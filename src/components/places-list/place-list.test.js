import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";
import {offers} from "../../mock/test-mocks";

it(`Should PlaceList component render correcrly`, () => {
  const tree = renderer.create(
      <PlacesList
        offers={offers}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
