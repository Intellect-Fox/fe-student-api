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

app.get('/api/hotels', (req, res) => {
  const { search = '', dateFrom, dateTo } = req.query;
  const date = new Date();
  date.setHours(0,0,0,0);
  const currentDay = date.valueOf();
  const from = +dateFrom;
  const to = +dateTo;
  const isValidSearch = typeof search !== 'string';
  const isValidDateFrom = dateFrom && from < currentDay;
  const isValidDateTo = dateTo && to < currentDay;
  const searchRegExp = new RegExp(search, 'gi');

  if (isValidSearch || isValidDateFrom || isValidDateTo) {
    res.status(400).send({ errorMessage: '400. Error field' });
  }

  const result = data.filter(item => {
    let foundByString = searchRegExp.test(item.name) || searchRegExp.test(item.city) || searchRegExp.test(item.country);

    if (foundByString && dateFrom && dateTo) {
      return !(from >= item.booked.from && from <= item.booked.to)
        || !(to >= item.booked.from && to <= item.booked.to);
    }

    return foundByString
  });

  res.status(200).send(result.map(({ booked = {}, ...item }) => item));
});

app.get('/api/hotels/popular', (req, res) => {
  res.status(200).send(
    shuffle(data)
      .slice(0, 8)
      .map(({ booked = {}, ...item }) => item)
  );
});

app.use((req, res) => {
  res.status(404).send('404. Page doesn\'t exist');
});

app.listen(port, () => console.log(`Student api listening at http://localhost:${port}`));
