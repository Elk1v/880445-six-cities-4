import * as React from "react";
import * as renderer from "react-test-renderer";
import withSort from "Hocs/with-sort/with-sort.jsx";

const MockComponent = (props) => {
  return (
    <div
      {...props}
    />
  );
};

const MockComponentWrapped = withSort(MockComponent);

it(`withSort is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isOpened={false}
      isActive={true}
      onArrowClick={() => {}}
      onPlacesOptionClick={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
