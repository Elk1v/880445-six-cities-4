import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList from "CitiesList/cities-list.jsx";
import {cityElements} from "Mocks/test-mocks";

const mockStore = configureStore([]);

it(`Cities list component renders correctly`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList
          currentCity={`Amsterdam`}
          onCityTitleClick={() => {}}
          cityElements={cityElements}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
