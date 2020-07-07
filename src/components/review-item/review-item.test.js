import React from "react";
import renderer from "react-test-renderer";
import ReviewITem from "ReviewItem/review-item.jsx";
import {review} from "Mocks/test-mocks";

it(`ReviewItem component renders correctly`, () => {
  const tree = renderer.create(
      <ReviewITem
        review={review}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
