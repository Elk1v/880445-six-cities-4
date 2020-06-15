import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main.jsx";

const Options = {
  OFFERS_COUNT: 312,
  OFFERS_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`
  ],
};

it(`Should Main component render correctly`, () => {
  const tree = renderer.create(
      <Main
        offersCount = {Options.OFFERS_COUNT}
        offersName = {Options.OFFERS_NAME}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
