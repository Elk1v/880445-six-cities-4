import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../mock/test-mocks";
import {BrowserRouter} from "react-router-dom";

it(`Should PlaceList component render correcrly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PlacesList
          offers={offers}
          onTitleClick={() => {}}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
