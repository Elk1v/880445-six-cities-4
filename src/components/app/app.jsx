import React from "react";
import Pt from "prop-types";

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
  offersCount: Pt.number.isRequired,
  offersName: Pt.array.isRequired,
};

export default App;
