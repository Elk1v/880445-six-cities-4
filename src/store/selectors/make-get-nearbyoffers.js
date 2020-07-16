import {createSelector} from "reselect";

const getCurrentCardId = (state) => {
  return state.currentCardId;
};

const getOffersByCity = (state, props) => {
  const currentCity = state.currentCity;
  const cities = props.cities;
  const findCity = cities.find((city) =>{
    return city.name === currentCity;
  });

  return findCity.offers;
};

const makeGetNearbyOffers = () => createSelector(
    [getCurrentCardId, getOffersByCity],
    (currentCardId, offers) => {
      return offers.filter((offer) => {
        return offer.id !== currentCardId;
      });
    }
);

export default makeGetNearbyOffers;
