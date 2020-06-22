import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main.jsx";
import {offers, Options} from "../../mock/test-mocks";

it(`Should Main component render correctly`, () => {
  const tree = renderer.create(
      <Main
        offers={offers}
        offersCount={Options.OFFERS_COUNT}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
