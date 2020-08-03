import {createSelector} from "reselect";
import {getCurrentCardId} from "./get-current-card-id";
import makeGetGroupedOffersByCity from "./make-get-grouped-offers-by-city";

const makeGetNearbyOffers = (state) =>{
  const getGroupedOffersByCity = makeGetGroupedOffersByCity(state)
  return createSelector(
    [getCurrentCardId, getGroupedOffersByCity],
    (currentCardId, offers) => {
      return offers.filter((offer) => {
        return offer.id !== currentCardId;
      });
    }
)};

export default makeGetNearbyOffers;
