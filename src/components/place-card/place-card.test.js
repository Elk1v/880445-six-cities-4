import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "../place-card/place-card.jsx";
import {offer} from "../../mock/test-mocks";
import {BrowserRouter} from "react-router-dom";

it(`Should PlaceCard component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PlaceCard
          offer={offer}
          onTitleClick={() => {}}
          onCardHover={() => {}}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
