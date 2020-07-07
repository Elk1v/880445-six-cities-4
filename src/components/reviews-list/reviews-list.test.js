import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "ReviewsList/reviews-list.jsx";
import {reviews} from "Mocks/test-mocks";

it(`Reviews list component renders correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
