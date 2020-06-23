import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleClickHandler = this.titleClickHandler.bind(this);
  }

  _renderMain() {
    const {offers, offersCount} = this.props;
    return (
      <Main
        offers={offers}
        offersCount={offersCount}
        onTitleClick={this.titleClickHandler}
      />
    );
  }

  _renderProperty() {
    const {offers} = this.props;
    return (
      <Property
        offer={offers[1]}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/property">
            {this._renderProperty()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  titleClickHandler() {
    return null;
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offersCount: PropTypes.number.isRequired,
};

export default App;
