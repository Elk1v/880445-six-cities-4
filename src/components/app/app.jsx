import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const titleClickHandler = () => {
  return null;
};

const App = (props) => {
  const {offers, offersCount} = props;

  return (
    <Main
      offers={offers}
      offersCount={offersCount}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offersCount: PropTypes.number.isRequired,
};

export default App;
