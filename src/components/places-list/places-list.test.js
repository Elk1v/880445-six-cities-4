import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PlacesList from "PlacesList/places-list";
import {offers} from "Mocks/test-mocks";

const mockStore = configureStore([]);

it(`Should PlaceList component render correcrly`, () => {
  const store = mockStore({
    currentCardId: 0,
  });

  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <PlacesList
            offers={offers}
            onCardTitleClick={() => {}}
          />
        </Provider>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
