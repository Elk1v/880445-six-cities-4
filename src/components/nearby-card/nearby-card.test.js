import React from "react";
import renderer from "react-test-renderer";
import NearbyCard from "NearbyCard/nearby-card.jsx";
import {offer as nearbyOffer} from "Mocks/test-mocks";

it(`Nearby card component renders correctly`, () => {
  const tree = renderer.create(
      <NearbyCard
        nearbyOffer={nearbyOffer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
