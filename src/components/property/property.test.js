import React from "react";
import renderer from "react-test-renderer";
import Property from "../property/property.jsx";
import {offer} from "../../mock/test-mocks";

it(`Should Property component render correctly`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
