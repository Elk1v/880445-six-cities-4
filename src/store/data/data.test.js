import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer} from "./reducer";
import {ActionType, Operation} from "./actions";
import {serverOffers} from "Mocks/test-mocks";

const cities = serverOffers;

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: [],
  });
});

it(`Reducer should update cities offers  by load cities`, () => {
  expect(reducer({
    cities: [],
  }, {
    type: ActionType.LOAD_CITIES,
    payload: cities,
  })).toEqual({
    cities,
  });
});

it(`Should make an error 401 from server`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
    .onGet(`/hotels`)
    .reply(401, [{fake: true}]);

  expect(api.get(`/hotels`)).rejects.toThrowError();
});

it(`Should make an error 404 from server`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
    .onGet(`/hotels`)
    .reply(404, [{fake: true}]);
  expect(api.get(`/hotels`)).rejects.toThrowError();
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const cityLoader = Operation.loadCities();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return cityLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CITIES,
          payload: [{fake: true}],
        });
      });
  });
});

