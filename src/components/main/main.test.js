import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import Main from "Main/main.jsx";
import {offers, Options} from "Mocks/test-mocks";


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
