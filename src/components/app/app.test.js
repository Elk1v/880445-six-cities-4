import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app.jsx";
import {offers, Options} from "../../mock/test-mocks";

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        offers={offers}
        offersCount={Options.OFFERS_COUNT}
      />,
      {createNodeMock: () => document.createElement(`div`)
      })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
