import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/app/app.jsx";

const Options = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
    <App
      offersCount = {Options.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
