import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "App/app.jsx";
import {cities, offers, cityElements} from "Mocks/test-mocks";
import NameSpace from "Store/name-space";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      currentCity: `Amsterdam`,
      currentCardId: 0,
      currentSort: `Popular`,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          citiesNameList={cityElements}
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


