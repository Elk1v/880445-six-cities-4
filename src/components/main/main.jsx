import React from "react";
import PropTypes from "prop-types";
import CitiesList from "CitiesList/cities-list.jsx";
import Map from "Map/map.jsx";
import Empty from "Empty/main-empty.jsx";
import PlacesList from "PlacesList/places-list.jsx";
import Sort from "Sort/sort.jsx";
import {MapProps} from "Consts/consts";


const Main = (props) => {
  const {cities, offers, currentCity, onCardTitleClick, onCityTitleClick} = props;
  const {MAIN_RESOLUTION} = MapProps;
  const {WIDTH, HEIGHT} = MAIN_RESOLUTION;
  const offersCount = offers.length;
  const cityElements = cities.map((city) => {
    return {
      name: city.name,
      id: city.id
    };
  });

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cityElements={cityElements}
            currentCity={currentCity}
            onCityTitleClick={onCityTitleClick}
          />
        </div>

        {offers.length === 0
          ? <Empty
            currentCity={currentCity}
          />

          :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {currentCity}</b>
                <Sort
                  cities={cities}
                />
                <div className="cities__places-list places__list tabs__content">
                  <PlacesList
                    offers={offers}
                    onCardTitleClick={onCardTitleClick}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  currentCity={currentCity}
                  cities={cities}
                  offers={offers}
                  width={WIDTH}
                  height={HEIGHT}
                />
              </div>
            </div>
          </div>} {/**/}
      </main>
    </div>
  );
};

Main.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentCardId: PropTypes.number,
  onCardTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
};

export default Main;
