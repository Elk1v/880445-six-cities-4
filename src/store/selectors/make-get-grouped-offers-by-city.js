import {createSelector} from "reselect";
import {getCurrentCity} from "./get-current-city";
import {getCitiesData} from "./get-cities-data";

const makeGetGroupedOffersByCity = () => createSelector(
    [getCurrentCity, getCitiesData],
    (currentCity, cities) => {
      return cities.filter((it) => (it.city === currentCity));
    }
);

export default makeGetGroupedOffersByCity;


