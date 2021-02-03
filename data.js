const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    booked: {
      from: 1612861200000,
      to: 1613379600000,
    },
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    booked: {
      from: 1615798800000,
      to: 1617094800000,
    },
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    booked: {
      from: 1612170000000,
      to: 1613379600000,
    },
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    booked: {
      from: 1613379600000,
      to: 1614589200000,
    },
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    booked: {
      from: 1612170000000,
      to: 1622019600000,
    },
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612355305/fe/virgin-hotel_x4iexp.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612355736/fe/grand-beach-resort_n74jau.jpg',
    booked: {
      from: 1612170000000,
      to: 1613293200000,
    },
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612355939/fe/shilla-stay_lapsqx.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612356595/fe/san-firenze_sq4lhr.jpg',
    booked: {
      from: 1613293200000,
      to: 1614070800000,
    },
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612299908/fe/black-penny-villas_brteob.jpg',
    booked: {
      from: 1613293200000,
      to: 1615280400000,
    },
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612300202/fe/koko-hotel_fys7xe.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612300371/fe/ramada-plaza_c8ww5k.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612300639/fe/waikiki-resort-hotel_vpk2hm.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612300826/fe/puro-hotel_gtztvw.jpg',
    booked: {
      from: 1613120400000,
      to: 1616922000000,
    },
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301036/fe/asma-suites_p4oex6.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301294/fe/cityden-apartments_n242oa.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301451/fe/mandarin-oriental_qcagli.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301623/fe/concept-terrace-hotel_ora5ok.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301867/fe/ponta-mar_apr3os.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612302047/fe/four-seasons_xz2vjr.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612302207/fe/le-meridien_zcobql.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612302428/fe/apart-neptun_zh3egi.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612302619/fe/lux-isla_aljmc5.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612303144/fe/nox-hostel_tqekkl.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612303348/fe/leonardo-vienna_cl6ubh.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612303595/fe/adagio-aparthotel_g6bumi.jpg',
    booked: {
      from: 1613120400000,
      to: 1615280400000,
    },
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612303844/fe/steigenberger-hotel_bmvrag.jpg',
    booked: {
      from: null,
      to: null,
    },
  },
];

module.exports = data;
