import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import PlaceCard from "PlaceCard/place-card.jsx";
import {offer} from "Mocks/test-mocks";


it(`Should PlaceCard component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PlaceCard
          offer={offer}
          onCardTitleClick={() => {}}
          onCardHoverChangeId={() => {}}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
