import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "Main/main.jsx";
import {cities, offers} from "Mocks/test-mocks";

const mockStore = configureStore([]);


it(`Should Main component render correctly`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,

  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Main
            currentCity={`Amsterdam`}
            cities={cities}
            offers={offers}
            onCityTitleClick={() => {}}
            onCardTitleClick={() => {}}
          />
        </Provider>
      </BrowserRouter>,

      {createNodeMock: () => document.createElement(`div`)
      })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
