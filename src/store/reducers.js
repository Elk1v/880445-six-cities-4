import {extend} from "Utils/common";
import {ActionType} from "Store/actions";

const initialState = {
  currentCity: `Amsterdam`,
  currentCardId: -1,
  currentSort: `Popular`,
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

    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
  }

  return state;
};

export {reducer};
