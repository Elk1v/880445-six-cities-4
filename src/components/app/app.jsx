import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "Store/actions";
import makeGetSortedOffers from "Store/selectors/make-get-sorted-offers.js";
import makeGetNearbyOffers from "Store/selectors/make-get-nearbyoffers.js";
import Main from "Main/main.jsx";
import Property from "Property/property.jsx";

class App extends PureComponent {
  _renderMain() {
    const {
      isLoaded,
      cities,
      onCardTitleClick,
      onCityTitleClick,
      onSortChange,
      currentCity,
      offers,
      currentSort,
      currentCardId,
    } = this.props;

    return (
      <Main
        isLoaded={isLoaded}
        cities={cities}
        offers={offers}
        currentCity={currentCity}
        currentSort={currentSort}
        currentCardId={currentCardId}
        onCardTitleClick={onCardTitleClick}
        onCityTitleClick={onCityTitleClick}
        onSortChange={onSortChange}
      />
    );
  }

  _renderProperty(cardId) {
    const {currentCity, cities, offers, nearbyOffers} = this.props;
    return (
      <Property
        offer={this._getPropertyOfferBy(offers, cardId)}
        nearbyOffers={nearbyOffers}
        currentCity={currentCity}
        cities={cities}
      />
    );
  }

  _getPropertyOfferBy(offers, cardId) {
    return offers.filter((offer) => offer.id === cardId)[0];
  }

  render() {
    const {currentCardId} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/property">
            {this._renderProperty(currentCardId)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  currentCardId: PropTypes.number.isRequired,
  currentSort: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
};

const makeMapStateToProps = () => {
  const getSortedOffers = makeGetSortedOffers();
  const getNearbyOffers = makeGetNearbyOffers();

  return (state, props) => ({
    isLoaded: state.isLoaded,
    currentCity: state.currentCity,
    currentCardId: state.currentCardId,
    offers: getSortedOffers(state, props),
    nearbyOffers: getNearbyOffers(state, props),
    currentSort: state.currentSort,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onCardTitleClick(id) {
    dispatch(ActionCreator.changeCardId(id));
  },

  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  onSortChange(sort) {
    dispatch(ActionCreator.changeSort(sort));
  },
});

export {App};
export default connect(makeMapStateToProps, mapDispatchToProps)(App);
