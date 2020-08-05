/* eslint-disable */
import moment from "moment";

export const Options = {
  OFFERS_COUNT: 312,
};

export const cityElements = [
 `Amsterdam`, `Paris`,
 `Cologne`, `Brussels`, `Hamburg`,
  `Dusseldorf`,
];

export const MapProps = {
  WIDTH: 100,
  HEIGHT: 400,
};

export const adaptedOffers = [
  {
    city: `Cologne`,
    id: 1,
    center: [50.938361, 6.959974],
    title: `Canal View Prinsengracht`,
    features: {
      type: `Apartment`,
      bedrooms: 3,
      adults: 6,
    },
    rating: 4,
    isPremium: true,
    isBookmarked: false,
    price: 120,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    inside: [`Wifi`, `Heating`, `Kitchen`],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      text: [`Some text`],
    },
    coords: [50.960361, 6.967974],
  }
]

export const serverOffers = [
  {
    id: 1,
    title: `Canal View Prinsengracht`,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
    },
    type: `Apartment`,
    price: 120,
    rating: 4,
    is_premium: true,
    is_favorite: false,
    preview_image: `img/apartment-01.jpg`,
    bedrooms: 3,
    max_adults: 6,
    goods: [`Wifi`, `Heating`, `Kitchen`],
    description: `Some text`,
    host: {
      id: 1,
      avatar_url: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      is_pro: true,
    },
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`
    ],
    reviews: [
      {
        name: `Max`,
        photo: `img/avatar-max.jpg`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
        The building is green and from 18th century.`,
        date: `April 2019`,
      },
    ],
  },
];



export const offers = [{
  city: `Amsterdam`,
  id: 0,
  title: `Beautiful & luxurious apartment at great location`,
  features: {
    type: `Apartment`,
    bedrooms: 3,
    adults: 4,
  },
  rating: 4.5,
  isPremium: true,
  isBookmarked: false,
  price: 100,
  images: [
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  inside: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  host: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ]
  },
  coords: [52.3909553943508, 4.85309666406198],

  reviews: [{
    id: 0,
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`
    },
    rating: 4.5,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    date: moment().format(`YYYY-MM-DD`),
  },

  {
    id: 1,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`
    },
    rating: 4.7,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    date: moment().format(`YYYY-MM-DD`),
  }
  ],
},

{
  city: `Paris`,
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  features: {
    type: `Apartment`,
    bedrooms: 3,
    adults: 4,
  },
  rating: 4.0,
  isPremium: false,
  isBookmarked: true,
  price: 70,
  images: [
    `img/apartment-01.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  inside: [
    `Wi-Fi`,
    `Towels`,
    `Coffee machine`,
    `Kitchen`,
  ],
  host: {
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ]
  },

  coords: [52.369553943508, 4.85309666406198],

  reviews: [{
    id: 1,
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`
    },
    rating: 4.5,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    date: moment().format(`YYYY-MM-DD`),
  }],
},

{
  city: `Cologne`,
  id: 2,
  title: `Beautiful & luxurious apartment at great location`,
  features: {
    type: `Apartment`,
    bedrooms: 3,
    adults: 4,
  },
  rating: 4.5,
  isPremium: true,
  isBookmarked: false,
  price: 100,
  images: [
    `img/apartment-02.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  inside: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  host: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ]
  },
  coords: [52.3909553943508, 4.929309666406198],

  reviews: [{
    id: 2,
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`
    },
    rating: 4.5,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    date: moment().format(`YYYY-MM-DD`),
  }],
},
];

export const offer = {
  id: 0,
  title: `Beautiful & luxurious apartment at great location`,
  features: {
    type: `Apartment`,
    bedrooms: 3,
    adults: 4,
  },
  rating: 4.5,
  isPremium: true,
  isBookmarked: false,
  price: 100,
  images: [
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  inside: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  host: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ]
  },

  coords: [52.3809553943508, 4.939309666406198],

  reviews: [{
    id: 0,
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`
    },
    rating: 4.5,
    text: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    date: moment().format(`YYYY-MM-DD`),
  }],
};

export const nearbyOffers = [
  {
    id: 0,
    title: `Beautiful & luxurious apartment at great location`,
    features: {
      type: `Apartment`,
      bedrooms: 3,
      adults: 4,
    },
    rating: 4.5,
    isPremium: true,
    isBookmarked: false,
    price: 100,
    images: [
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      text: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      ]
    },

    coords: [52.3909553943508, 4.85309666406198],

    reviews: [{
      id: 0,
      user: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`
      },
      rating: 4.5,
      text: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      ],
      date: moment().format(`YYYY-MM-DD`),
    }],
  },

  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    features: {
      type: `Apartment`,
      bedrooms: 3,
      adults: 4,
    },
    rating: 4.0,
    isPremium: false,
    isBookmarked: false,
    price: 70,
    images: [
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    inside: [
      `Wi-Fi`,
      `Towels`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Fridge`,
    ],
    host: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      text: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      ]
    },

    coords: [52.369553943508, 4.85309666406198],

    reviews: [{
      id: 1,
      user: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`
      },
      rating: 4.5,
      text: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      ],
      date: moment().format(`YYYY-MM-DD`),
    }],
  },
];

export const review = {
  id: 0,
  user: {
    name: `Max`,
    avatar: `img/avatar-max.jpg`
  },
  rating: 4.5,
  text: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  ],
  date: moment().format(`YYYY-MM-DD`),
};

export const reviews = [{
  id: 0,
  user: {
    name: `Max`,
    avatar: `img/avatar-max.jpg`
  },
  rating: 4.5,
  text: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  ],
  date: moment().format(`YYYY-MM-DD`),
}];


export const cities = [
  {
    name: `Amsterdam`,
    id: 0,
    center: [52.38333, 4.9],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [52.3909553943508, 4.85309666406198],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 1,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: true,
      price: 70,
      images: [
        `img/apartment-01.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [52.369553943508, 4.85309666406198],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [52.3909553943508, 4.929309666406198],

      reviews: [{
        id: 2,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [52.3809553943508, 4.939309666406198],

      reviews: [{
        id: 3,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  },

  {
    name: `Paris`,
    id: 1,
    center: [48.864716, 2.349014],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [48.866716, 2.342012],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 1,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: true,
      price: 70,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
        `Dishwasher`,
        `Fridge`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [48.876716, 2.342012],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [48.767716, 2.322012],

      reviews: [{
        id: 2,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [48.766716, 2.742012],

      reviews: [{
        id: 3,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  },

  {
    name: `Cologne`,
    id: 2,
    center: [50.9333, 6.9500],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [50.9333, 6.9500],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 1,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: true,
      price: 70,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
        `Dishwasher`,
        `Fridge`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [50.9133, 6.9400],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [50.9233, 6.9530],

      reviews: [{
        id: 2,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [50.899, 6.9530],

      reviews: [{
        id: 3,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  },

  {
    name: `Brussels`,
    id: 3,
    center: [50.8407, 4.3542],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [50.8407, 4.3542],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 2,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: false,
      price: 70,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
        `Dishwasher`,
        `Fridge`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [50.8307, 4.3442],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [50.8399, 4.3545],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [50.8400, 4.3540],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  },

  {
    name: `Hamburg`,
    id: 4,
    center: [53.551086, 9.993682],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [53.551086, 9.993682],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 1,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: true,
      price: 70,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
        `Dishwasher`,
        `Fridge`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [53.541086, 9.983682],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [53.555086, 9.995682],

      reviews: [{
        id: 2,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [53.551886, 9.993682],

      reviews: [{
        id: 3,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  },
  {
    name: `Duselldolf`,
    id: 5,
    center: [51.233334, 6.783333],
    offers: [{
      id: 0,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [51.233334, 6.783333],

      reviews: [{
        id: 0,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      },

      {
        id: 1,
        user: {
          name: `Angelina`,
          avatar: `img/avatar-angelina.jpg`
        },
        rating: 4.7,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }
      ],
    },

    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.0,
      isPremium: false,
      isBookmarked: false,
      price: 70,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Towels`,
        `Coffee machine`,
        `Kitchen`,
        `Dishwasher`,
        `Fridge`,
      ],
      host: {
        name: `Max`,
        avatar: `img/avatar-max.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [51.243334, 6.763333],

      reviews: [{
        id: 1,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 2,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: false,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },
      coords: [51.203334, 6.793333],

      reviews: [{
        id: 2,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    },

    {
      id: 3,
      title: `Beautiful & luxurious apartment at great location`,
      features: {
        type: `Apartment`,
        bedrooms: 3,
        adults: 4,
      },
      rating: 4.5,
      isPremium: true,
      isBookmarked: true,
      price: 100,
      images: [
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-03.jpg`,
        `img/studio-01.jpg`,
        `img/apartment-01.jpg`
      ],
      inside: [
        `Wi-Fi`,
        `Washing machine`,
        `Towels`,
        `Heating`,
        `Coffee machine`,
        `Baby seat`,
        `Kitchen`,
        `Dishwasher`,
        `Cabel TV`,
        `Fridge`,
      ],
      host: {
        name: `Angelina`,
        avatar: `img/avatar-angelina.jpg`,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ]
      },

      coords: [51.233334, 6.883333],

      reviews: [{
        id: 3,
        user: {
          name: `Max`,
          avatar: `img/avatar-max.jpg`
        },
        rating: 4.5,
        text: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        date: moment().format(`YYYY-MM-DD`),
      }],
    }]
  }

];
