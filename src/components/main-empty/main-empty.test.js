import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Empty from "Empty/main-empty.jsx";

const mockStore = configureStore([]);

it(`Render Empty Main`, () => {
  const store = mockStore({
    currentCity: `Amsterdam`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Empty
          currentCity={`Amsterdam`}
        />
      </Provider>
  ) .toJSON();

  expect(tree).toMatchSnapshot();
});
