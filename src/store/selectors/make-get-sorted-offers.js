import {createSelector} from "reselect";
import {SortTypes} from "Consts/consts";

const getCurrentSort = (state) => {
  return state.currentSort;
};

const getOffersByCityToSort = (state, props) => {
  const currentCity = state.currentCity;
  const cities = props.cities;
  const findCity = cities.find((city) =>(city.name === currentCity));
  return findCity.offers;
};

const makeGetSortedOffers = () => {
  return createSelector(
      [getCurrentSort, getOffersByCityToSort],
      (sortType, offers) => {
        switch (sortType) {
          case SortTypes.POPULAR:
            return offers;
          case SortTypes.PRICE_DESCENDING:
            return offers.slice().sort((a, b) =>(a.price - b.price));
          case SortTypes.PRICE_ASCENDING:
            return offers.slice().sort((a, b) => (b.price - a.price));
          case SortTypes.TOP_RATED_FIRST:
            return offers.slice().sort((a, b) => (b.rating - a.rating));
        }
        return offers;
      }
  );
};

export default makeGetSortedOffers;
