import React from "react";
import renderer from "react-test-renderer";
import Main from "../main/main.jsx";
import {offers, Options} from "../../mock/test-mocks";
import {BrowserRouter} from "react-router-dom";

it(`Should Main component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Main
          offers={offers}
          offersCount={Options.OFFERS_COUNT}
          onTitleClick={() => {}}
        />
      </BrowserRouter>,
      {createNodeMock: () => document.createElement(`div`)
      })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
