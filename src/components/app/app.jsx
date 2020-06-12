import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {
  const {offersCount, offersName} = props;

  return (
    <Main
      offersCount = {offersCount}
      offersName = {offersName}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersName: PropTypes.array.isRequired,
};

export default App;