export const calcRatingInPercent = (rate) => {
  return Math.round(rate * 100 / 5);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const findOffers = (cities, currentCity) => {
  const findCity = cities.find((city) => {
    return city === currentCity;
  });

  return findCity.offers;
};


export const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

