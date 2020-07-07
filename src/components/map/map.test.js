import React from "react";
import renderer from "react-test-renderer";
import Map from "Map/map.jsx";
import {offers, MapProps} from "Mocks/test-mocks";


it(`Map conponent renders correctly`, () => {
  const {WIDTH, HEIGHT} = MapProps;

  const tree = renderer.create(
      <Map
        offers={offers}
        width={WIDTH}
        height={HEIGHT}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
