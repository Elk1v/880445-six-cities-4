import NameSpace from "Store/name-space";
import {createSelector} from "reselect";
import {getCitiesData} from "./get-cities-data";

const makeGetCitiesNameList = () => createSelector(
  [getCitiesData],
    (cities) => {
      const allNames = cities.map((it) => (it.city));
       return [...new Set(allNames)]
    }
);

export default makeGetCitiesNameList;
