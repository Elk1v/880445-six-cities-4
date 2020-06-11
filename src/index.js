import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/app/app.jsx";

const Options = {
  OFFERS_COUNT: 312,
  OFFERS_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Canal View Prinsengracht`
  ],
};


ReactDOM.render(
    <App
      offersCount = {Options.OFFERS_COUNT}
      offersName = {Options.OFFERS_NAME}
    />,
    document.querySelector(`#root`)
);
