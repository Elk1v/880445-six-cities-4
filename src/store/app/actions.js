export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_CARD_ID: `CHANGE_CARD_ID`,
  CHANGE_SORT: `CHANGE_SORT`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeCardId: (id) => ({
    type: ActionType.CHANGE_CARD_ID,
    payload: id,
  }),

  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};
