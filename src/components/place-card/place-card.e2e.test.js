import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import PlaceCard from "PlaceCard/place-card.jsx";
import {offer} from "Mocks/test-mocks";


Enzyme.configure({
  adapter: new Adapter(),
});

const onCardTitleClick = jest.fn();
const onCardHover = jest.fn();

it(`Should title click be passed`, () => {

  const placeCard = mount(
      <BrowserRouter>
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onCardHover={onCardHover}
        />
      </BrowserRouter>
  );

  const title = placeCard.find(`.place-card__name`).first();
  title.simulate(`click`);

  expect(onCardTitleClick.mock.calls.length).toBe(1);
});

it(`Should hover handler receive info about offer`, () => {
  const placeCard = mount(
      <BrowserRouter>
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onCardHover={onCardHover}
        />
      </BrowserRouter>
  );

  const card = placeCard.find(PlaceCard);
  card.simulate(`mouseOver`);
  expect(card.prop(`offer`)).toEqual(offer);
});

