import {createSelector} from "reselect";

const getCurrentCity = (state) => {
  return state.currentCity;
};

const getCities = (_, props) => { // props only (ignoring state argument)
  return props.cities;
};

const makeGetOffers = () => createSelector(
    [getCurrentCity, getCities],
    (currentCity, cities) => {
      const findCity = cities.find((city) => {
        return city.name === currentCity;
      });

      return findCity.offers;
    }
);

export default makeGetOffers;
