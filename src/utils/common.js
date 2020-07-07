export const calcRatingInPercent = (rate) => {
  return Math.round(rate * 100 / 5);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
