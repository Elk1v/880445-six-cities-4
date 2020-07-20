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
      cities,
      onCardTitleClick,
      onCityTitleClick,
      currentCity,
      offers,
      currentCardId
    } = this.props;

    console.log(currentCity);

    return (
      <Main
        cities={cities}
        offers={offers}
        currentCity={currentCity}
        onCardTitleClick={onCardTitleClick}
        onCityTitleClick={onCityTitleClick}
        currentCurdId={currentCardId}
      />
    );
  }

  _renderProperty(cardId) {
    const {currentCity, cities, offers, nearbyOffers} = this.props;
    return (
      <Property
        offer={
          offers.filter((offer) =>{
            return offer.id === cardId;
          })[0]}

        nearbyOffers={nearbyOffers}
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
}

App.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  currentCardId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
};

const makeMapStateToProps = () => {
  const getSortedOffers = makeGetSortedOffers();
  const getNearbyOffers = makeGetNearbyOffers();

  const mapStateToProps = (state, props) => ({
    currentCity: state.currentCity,
    currentCardId: state.currentCardId,
    offers: getSortedOffers(state, props),
    nearbyOffers: getNearbyOffers(state, props)
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  onCardTitleClick(id) {
    dispatch(ActionCreator.changeCardId(id));
  },

  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(makeMapStateToProps, mapDispatchToProps)(App);
