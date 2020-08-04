import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "Map/map.jsx";
import {offers, MapProps} from "Mocks/test-mocks";

const mockStore = configureStore([]);

it(`Map conponent renders correctly`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,
    currentCardId: 1,
  });
  const {WIDTH, HEIGHT} = MapProps;

  const tree = renderer.create(
      <Provider store={store}>
        <Map
          currentCity={`Amsterdam`}
          currentCardId={1}
          offers={offers}
          width={WIDTH}
          height={HEIGHT}
        />
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
