import React from "react";
import renderer from "react-test-renderer";
import Property from "Property/property.jsx";
import {offer} from "Mocks/test-mocks";


it(`Should Property component render correctly`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
