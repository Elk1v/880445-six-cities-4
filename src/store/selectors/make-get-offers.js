import {createSelector} from "reselect";
import {getCurrentCity} from "./get-current-city";

const getCities = (_, props) => (props.cities);

const makeGetOffers = () => createSelector(
    [getCurrentCity, getCities],
    (currentCity, cities) => {
      const findCity = cities.find((city) => (city.name === currentCity));
      return findCity.offers;
    }
);

export default makeGetOffers;
