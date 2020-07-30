import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "App/app.jsx";
import {cities, offers} from "Mocks/test-mocks";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,
    currentCardId: 0,
    currentSort: `Popular`,
    isLoaded: true,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          isLoaded={true}
          cities={cities}
          onCityTitleClick={() => {}}
          onCardTitleClick={() => {}}
          currentCity={`Amsterdam`}
          currentCardId={0}
          offers={offers}
          nearbyOffers={offers}
          currentSort={`Popular`}
          onSortChange={() => {}}/>
      </Provider>,

      {createNodeMock: () => document.createElement(`div`)
      })
        .toJSON();

  expect(tree).toMatchSnapshot();
});


