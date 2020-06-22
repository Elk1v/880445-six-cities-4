import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

const offer = {
  id: `0`,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 20,
  isPremium: true,
  price: 100,
  image: `img/apartment-01.jpg`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title click be passed`, () => {
  const onTitleClick = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        key={offer.id}
        offer={offer}
        onTitleClick={onTitleClick}
      />
  );

  const title = placeCard.find(`.place-card__name a`).first();
  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should hover handler receive info about offer`, () => {
  const placeCard = shallow(
      <PlaceCard
        key={offer.id}
        offer={offer}
        onTitleClick={onTitleClick}
      />
  );

  placeCard.props().onMouseOver();
  expect(placeCard.props().includedProp).to.equal(offer);
});
