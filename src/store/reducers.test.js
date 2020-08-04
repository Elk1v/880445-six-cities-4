import reducers from "./reducers";
import {AuthorizationStatus} from "Store/user/actions";


it(`The combine reducer without additional parameters should return the initial state`, () => {
  expect(reducers(void 0, {})).toEqual({
    DATA: {
      cities: [],
    },
    APP: {
      currentCity: `Amsterdam`,
      currentCardId: -1,
      currentSort: `Popular`,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });
});
