import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "App/app.jsx";
import offers from "Mocks/offers";
import cities from "Mocks/cities";
import {reducer} from "./reducer";

const offersCount = 312;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        cities={cities}
        offersCount={offersCount}
      />
    </Provider>,
    document.querySelector(`#root`)
);


