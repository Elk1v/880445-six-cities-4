import {createSelector} from "reselect";
import {SortTypes} from "Consts/consts";
import {getCurrentSort} from "./get-current-sort";
import makeGetGroupedOffersByCity from "./make-get-grouped-offers-by-city";

const makeGetSortedOffers = (state) => {
  const getGroupedOffersByCity = makeGetGroupedOffersByCity(state);
  return createSelector(
      [getCurrentSort, getGroupedOffersByCity],
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
