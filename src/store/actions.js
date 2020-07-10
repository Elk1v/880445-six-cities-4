
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_CARD_ID: `CHANGE_CARD_ID`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeCardId: (id) => ({
    type: ActionType.CHANGE_CARD_ID,
    payload: id, /* parseInt(evt.currentTarget.parentNode.parentElement.getAttribute(`data-key`), 10), */
  }),
};
