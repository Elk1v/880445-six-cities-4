import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const Options = {
  OFFERS_COUNT: 312,
  OFFERS_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`
  ],
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title click be passed`, () => {
  const onTitleClickHandler = jest.fn();

  const main = shallow(
      <Main
        offersCount = {Options.OFFERS_COUNT}
        offersName = {Options.OFFERS_NAME}
        onTitleClickHandler = {onTitleClickHandler}
      />
  );

  const title = main.find(`.place-card__name a`).first();

  title.props().onClick();

  expect(onTitleClickHandler.mock.calls.length).toBe(1);

});
