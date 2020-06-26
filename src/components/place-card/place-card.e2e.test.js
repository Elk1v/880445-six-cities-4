import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";
import {offer} from "../../mock/test-mocks";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const onTitleClick = jest.fn();
const onCardHover = jest.fn();

it(`Should title click be passed`, () => {

  const placeCard = mount(
      <BrowserRouter>
        <PlaceCard
          key={offer.id}
          offer={offer}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
        />
      </BrowserRouter>
  );

  const title = placeCard.find(`.place-card__name`).first();
  title.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should hover handler receive info about offer`, () => {
  const placeCard = mount(
      <BrowserRouter>
        <PlaceCard
          key={offer.id}
          offer={offer}
          onTitleClick={onTitleClick}
          onCardHover={onCardHover}
        />
      </BrowserRouter>
  );

  const card = placeCard.find(PlaceCard);
  card.simulate(`mouseOver`);
  expect(card.prop(`offer`)).toEqual(offer);
});

