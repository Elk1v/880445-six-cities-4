import React from "react";
import ReactDOM from "react-dom";
import App from "App/app.jsx";
import offers from "Mocks/offers.js";


const offersCount = 312;

ReactDOM.render(
    <App
      offers = {offers}
      offersCount = {offersCount}
    />,
    document.querySelector(`#root`)
);


