import {extend} from "Utils/common";
import {ActionType} from "Store/actions";

const initialState = {
  currentCity: `Amsterdam`,
  currentCardId: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.CHANGE_CARD_ID:
      return extend(state, {
        currentCardId: action.payload,
      });
  }

  return state;
};

export {reducer};
