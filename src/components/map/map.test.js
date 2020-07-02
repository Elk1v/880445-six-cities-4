import React from "react";
import renderer from "react-test-renderer";
import Map from "Map/map.jsx";
import {offers} from "Mocks/test-mocks";


it(`Map conponent renders correctly`, () => {
  const tree = renderer.create(
      <Map offers={offers}/>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
