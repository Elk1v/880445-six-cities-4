import React from "react";
import renderer from "react-test-renderer";
import NearbyList from "NearbyList/nearby-list.jsx";
import {nearbyOffers} from "Mocks/test-mocks";

it(`Nearby list component renders correctly`, () => {
  const tree = renderer.create(
      <NearbyList
        nearbyOffers={nearbyOffers}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
