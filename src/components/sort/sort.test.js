import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Sort from "Sort/sort.jsx";

const mockStore = configureStore([]);

it(`Sort conponent renders correctly`, () => {
  const store = mockStore({
    currentSort: `Popular`,
    isActive: true,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sort
          currentSort={`Popular`}
          onSortChange={() => {}}
          isActive={true}
          isOpened={false}
          onArrowClick={() => {}}
          onPlacesOptionClick={() => {}}/>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
