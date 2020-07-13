import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "Store/actions";
import Main from "Main/main.jsx";
import Property from "Property/property.jsx";


class App extends PureComponent {
  _renderMain() {
    const {
      cities,
      onCardTitleClick,
      onCityTitleClick,
      currentCity,
    } = this.props;

    const offers = this._findOffers();

    return (
      <Main
        cities={cities}
        offers={offers}
        currentCity={currentCity}
        onCardTitleClick={onCardTitleClick}
        onCityTitleClick={onCityTitleClick}
      />
    );
  }

  _renderProperty(cardId) {
    const {currentCity, cities} = this.props;
    const offers = this._findOffers();
    return (
      <Property
        offer={
          offers.filter((offer) =>{
            return offer.id === cardId;
          })[0]}

        nearbyOffers={this._filterNearbyOffers(offers)}
        currentCity={currentCity}
        cities={cities}
      />
    );
  }

  render() {
    const toShowPropertyCardId = this.props.currentCardId;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/property">
            {this._renderProperty(toShowPropertyCardId)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _filterNearbyOffers(offers) {
    const showedCardId = this.props.currentCardId;

    return offers.filter((offer) => {
      return offer.id !== showedCardId;
    });
  }

  _findOffers() {
    const {cities, currentCity} = this.props;

    const findCity = cities.find((city) => {
      return city.name === currentCity;
    });

    return findCity.offers;
  }
}

App.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  currentCardId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentCardId: state.currentCardId,
});

const mapDispatchToProps = (dispatch) => ({
  onCardTitleClick(id) {
    dispatch(ActionCreator.changeCardId(id));
  },

  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
