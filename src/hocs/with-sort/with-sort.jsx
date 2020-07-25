import * as React from "react";

const withSort = (Component) => {
  class WithSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
        isActive: false,
      };

      this.arrowClickHandler = this.arrowClickHandler.bind(this);
      this.placesOptionClickHandler = this.placesOptionClickHandler.bind(this);
    }

    render() {
      const {isOpened, isActive} = this.state;
      return (
        <Component
          {...this.props}
          onArrowClick={this.arrowClickHandler}
          onPlacesOptionClick={this.placesOptionClickHandler}
          isOpened={isOpened}
          isActive={isActive}
        />
      );
    }

    arrowClickHandler() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened
      }));
    }

    placesOptionClickHandler() {
      this.setState((prevState) => ({
        isActive: !prevState.isActive
      }));
    }
  }

  return WithSort;
};

export default withSort;


