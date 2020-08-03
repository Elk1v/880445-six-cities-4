import {extend} from "Utils/common";
import {AuthorizationStatus, ActionType} from "./actions";

const initialState = {
  authorizationStatus:  AuthorizationStatus.NO_AUTH,
};

export const reducer =(state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return  state;
};
