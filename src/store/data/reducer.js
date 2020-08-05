import {extend} from "Utils/common";
import {ActionType} from "./actions";

const initialState = {
  cities: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CITIES:
      return extend(state, {
        cities: action.payload,
      });
  }

  return state;
};
