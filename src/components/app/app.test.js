import React from "react";
import renderer from "react-test-renderer";
import App from "App/app.jsx";
import {offers, Options} from "Mocks/test-mocks";


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
