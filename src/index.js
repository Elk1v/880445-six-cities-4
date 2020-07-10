import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "App/app.jsx";
import cities from "Mocks/cities";
import {reducer} from "Store/reducers";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cities}
      />
    </Provider>,
    document.querySelector(`#root`)
);


