import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

const titleClickHandler = () => {
  return null;
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {offers, offersCount} = this.props;
    return (
      <Main
        offers={offers}
        offersCount={offersCount}
        onTitleClick={titleClickHandler}
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
            <Property />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offersCount: PropTypes.number.isRequired,
};

export default App;
