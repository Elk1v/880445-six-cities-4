import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Property from "Property/property.jsx";
import {cities, offer, offers as nearbyOffers} from "Mocks/test-mocks";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`Should Property component render correctly`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,

  });
  const tree = renderer.create(
      <Provider store={store}>
        <Property
          offer={offer}
          nearbyOffers={nearbyOffers}
          currentCity={`Amsterdam`}
          cities={cities}
        />
      </Provider>, {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
