import React from "react";
import Map from "../map/map.jsx";
import renderer from "react-test-renderer";
import {offers} from "../../mock/test-mocks";

it(`Map conponent renders correctly`, () => {
  const tree = renderer.create(
      <Map offers={offers}/>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
