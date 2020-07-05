import React from "react";
import renderer from "react-test-renderer";
import Property from "Property/property.jsx";
import {offer, offers as nearbyOffers} from "Mocks/test-mocks";


it(`Should Property component render correctly`, () => {
  const tree = renderer.create(
      <Property
        offer={offer}
        nearbyOffers={nearbyOffers}
      />, {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
