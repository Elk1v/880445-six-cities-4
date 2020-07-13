import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import PlacesList from "PlacesList/places-list";
import {offers} from "Mocks/test-mocks";


it(`Should PlaceList component render correcrly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PlacesList
          offers={offers}
          onCardTitleClick={() => {}}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
