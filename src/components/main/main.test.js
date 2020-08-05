import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "Main/main.jsx";
import {cities, offers, cityElements} from "Mocks/test-mocks";
import NameSpace from "Store/name-space";


const mockStore = configureStore([]);

it(`Should Main component render correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      currentCity: `Amsterdam`,
      currentCardId: 0,
      currentSort: `Popular`,
    }
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Main
            isLoaded={true}
            currentCity={`Amsterdam`}
            cities={cities}
            citiesNameList={cityElements}
            offers={offers}
            onCityTitleClick={() => {}}
            onCardTitleClick={() => {}}
            currentCardId={0}
            currentSort={`Popular`}
            onSortChange={() => {}}/>
        </Provider>
      </BrowserRouter>,

      {createNodeMock: () => document.createElement(`div`)
      })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
