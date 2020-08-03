import {getAdaptedCities} from "Adapters/cities";

export const ActionType = {
  LOAD_CITIES: `LOAD_CITIES`,
};

export const ActionCreator = {
  loadCities: (cities) => {
    return {
      type: ActionType.LOAD_CITIES,
      payload: cities,
    };
  },
};

export const Operation = {
  loadCities: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
         const adaptedCities = getAdaptedCities(response.data);
         dispatch(ActionCreator.loadCities(adaptedCities));
         console.log(adaptedCities);
      });
  },
};
