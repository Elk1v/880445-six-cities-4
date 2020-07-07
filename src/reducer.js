import {extend} from "Utils/common";
import offers from "Mocks/offers";

const initialState = {
  city: `Amsterdam`,
  offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SHOW_OFFERS: `SHOW_OFFERS`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.SHOW_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
