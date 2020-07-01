import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toShowPropertyCardId: 0,
    };

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

  _renderProperty(cardId) {
    const {offers} = this.props;
    return (
      <Property
        offer={offers.filter((offer) =>{
          return offer.id === cardId;
        })[0]}
      />
    );
  }

  render() {
    const {toShowPropertyCardId} = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route path="/property">
            {this._renderProperty(toShowPropertyCardId)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  titleClickHandler(evt) {
    this.setState({
      toShowPropertyCardId: evt.currentTarget.parentNode.parentElement.getAttribute(`data-key`)
    }
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offersCount: PropTypes.number.isRequired,
};

export default App;
