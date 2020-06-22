import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/app/app.jsx";
import offers from "../src/mock/offers.js";

const offersCount = 312;

ReactDOM.render(
    <App
      offers = {offers}
      offersCount = {offersCount}
    />,
    document.querySelector(`#root`)
);


