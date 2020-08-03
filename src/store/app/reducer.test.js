import {reducer} from "./reducers";
import {cities} from "Mocks/test-mocks";
import {ActionType} from "./actions";

it(`Reducer without additional params should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: -1,
    currentSort: `Popular`,
    isLoaded: true,
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
            currentSort: `Popular`,
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
    currentSort: `Popular`,
    cities,
  });
});

it(`Reducer should change current card id correctly by a peyload value`, () => {
  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            currentSort: `Popular`,
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
    currentSort: `Popular`,
    cities,
  });

  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            currentSort: `Popular`,
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
    currentSort: `Popular`,
    cities,
  });
});

it(`Reducer should change current sorter correctly by a peyload value`, () => {
  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 1,
            currentSort: `Popular`,
            cities,
          },

          {
            type: ActionType.CHANGE_SORT,
            payload: `Top rated first`,
          }
      )
  ).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 1,
    currentSort: `Top rated first`,
    cities,
  });

  expect(
      reducer(
          {
            currentCity: `Amsterdam`,
            currentCardId: 0,
            currentSort: `Top rated first`,
            cities,
          },

          {
            type: ActionType.CHANGE_SORT,
            payload: `Popular`,
          }
      )
  ).toEqual({
    currentCity: `Amsterdam`,
    currentCardId: 0,
    currentSort: `Popular`,
    cities,
  });
});
