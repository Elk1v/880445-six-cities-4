import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "../place-card/place-card.jsx";

const offer = {
  id: `0`,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 20,
  isPremium: true,
  price: 100,
  image: `img/apartment-01.jpg`,
};

it(`Should PlaceCard component render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={offer}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
