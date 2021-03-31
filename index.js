const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer  = require('multer');

const data = require('./data');

const maxSize = 1000000; // 1 Mb
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: maxSize },
}).single('file');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json({ limit: '1000kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const isBooked = (booked, from, to) => (
  !(from >= booked.from && from <= booked.to) || !(to >= booked.from && to <= booked.to)
);

const shuffle = (arr = []) => {
  const array = [...arr];
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

app.post(
  '/api/file',
  (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        const errorData = {
          field: err.field || 'file',
          message: err.message,
        };

        res.status(400).send(errorData);
      } else {
        next();
      }
    });
  }, (req, res) => {
    const { originalname, mimetype, size } = req.file;

    res.status(200).send({
      fileName: originalname,
      mimetype,
      size: `${size} bytes`
    });
  }
);

app.get('/api/hotels', (req, res) => {
  const {
    search = '',
    dateFrom,
    dateTo,
    adults: adultsQuery,
    children: childrenQuery = '',
    rooms: roomsQuery
  } = req.query;
  const date = new Date();
  date.setHours(0,0,0,0);
  const currentDay = date.valueOf();
  const from = +dateFrom;
  const to = +dateTo;
  const adults = +adultsQuery;
  const children = childrenQuery.split(',').filter(item => !!item).map(age => +age);
  const rooms = +roomsQuery;
  const isInvalidSearch = typeof search !== 'string';
  const isInvalidDateFrom = dateFrom && from < currentDay;
  const isInvalidDateTo = dateTo && to < currentDay;
  const isInvalidAdults = adults && !(adults >= 0 && adults <= 30);
  const isInvalidChildren = (!!children.length && !adults) || (!!children.length && !!children.filter(age => age < 0 || age > 17).length);
  const isInvalidRooms = rooms && !(rooms >= 0 && rooms <= 30);
  const searchRegExp = new RegExp(search, 'gi');

  if (isInvalidSearch || isInvalidDateFrom || isInvalidDateTo || isInvalidAdults || isInvalidChildren || isInvalidRooms) {
    res.status(400).send({ errorMessage: '400. Error field' });
    return;
  }

  const result = data.filter(item => {
    let foundByString = searchRegExp.test(item.name) || searchRegExp.test(item.city) || searchRegExp.test(item.country);

    if (foundByString && dateFrom && dateTo && adults && children.length && rooms) {
      return isBooked(item.booked, from, to)
        && adults <= item.filter.adults
        && children.length <= item.filter.children
        && rooms <= item.filter.rooms;
    }

    if (foundByString && dateFrom && dateTo && adults && children.length) {
      return isBooked(item.booked, from, to)
        && adults <= item.filter.adults
        && children.length <= item.filter.children;
    }

    if (foundByString && dateFrom && dateTo && adults && rooms) {
      return isBooked(item.booked, from, to)
        && adults <= item.filter.adults
        && rooms <= item.filter.rooms;
    }

    if (foundByString && dateFrom && dateTo && adults) {
      return isBooked(item.booked, from, to) && adults <= item.filter.adults;
    }

    if (foundByString && dateFrom && dateTo && rooms) {
      return isBooked(item.booked, from, to) && rooms <= item.filter.rooms;
    }

    if (foundByString && dateFrom && dateTo) {
      return isBooked(item.booked, from, to);
    }

    if (foundByString && adults && children.length && rooms) {
      return adults <= item.filter.adults
        && children.length <= item.filter.children
        && rooms <= item.filter.rooms;
    }

    if (foundByString && adults && children.length) {
      return adults <= item.filter.adults && children.length <= item.filter.children;
    }

    if (foundByString && adults && rooms) {
      return adults <= item.filter.adults && rooms <= item.filter.rooms;
    }

    if (foundByString && adults) {
      return adults <= item.filter.adults;
    }

    if (foundByString && rooms) {
      return rooms <= item.filter.rooms;
    }

    return foundByString
  });

  res.status(200).send(result.map(({ booked = {}, filter = {}, ...item }) => item));
});

app.get('/api/hotels/popular', (req, res) => {
  res.status(200).send(
    shuffle(data)
      .slice(0, 8)
      .map(({ booked = {}, filter = {}, ...item }) => item)
  );
});

app.get('/api/hotels/:id', (req, res) => {
  const hotel = data.find(item => item.id === req.params.id);

  if (hotel) {
    const { booked, filter, ...view } = hotel;
    res.status(200).send(view);
  } else {
    res.status(404).send('404. Page doesn\'t exist');
  }
});

app.use((req, res) => {
  res.status(404).send('404. Page doesn\'t exist');
});

app.listen(port, () => console.log(`Student api listening at http://localhost:${port}`));
