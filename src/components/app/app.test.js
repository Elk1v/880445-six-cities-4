import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app.jsx";

const Options = {
  OFFERS_COUNT: 312,
  OFFERS_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`
  ],
};

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        offersCount = {Options.OFFERS_COUNT}
        offersName = {Options.OFFERS_NAME}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
