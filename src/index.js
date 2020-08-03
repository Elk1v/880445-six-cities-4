import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "App/app.jsx";
import cities from "Mocks/cities";
import {Operation as DataOperation} from "Store/data/actions";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "Store/user/actions";
import {createAPI} from "./api";
import reducer from "Store/reducers";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

store.dispatch(DataOperation.loadCities());
// store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);


