import {reducer} from "./reducers";
import {cities} from "Mocks/test-mocks";
import {ActionType} from "./actions";

it(`Reducer without additional params should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 0,
  });
});

it(`Reducer should change current city correctly by a peyload value`, () => {
  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            cities,
          },

          {
            type: ActionType.CHANGE_CITY,
            payload: `Paris`,
          }
      )
  ).toEqual({
    currentCity: `Paris`,
    currentCardId: 0,
    cities,
  });

  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            cities,
          },

          {
            type: ActionType.CHANGE_CITY,
            payload: `Amsterdam`,
          }
      )
  ).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 0,
    cities,
  });
});

it(`Reducer should change current card id correctly by a peyload value`, () => {
  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            cities,
          },

          {
            type: ActionType.CHANGE_CARD_ID,
            payload: 1,
          }
      )
  ).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 1,
    cities,
  });

  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            cities,
          },

          {
            type: ActionType.CHANGE_CARD_ID,
            payload: 3,
          }
      )
  ).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 3,
    cities,
  });
});
