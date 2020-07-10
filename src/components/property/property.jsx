import React from "react";
import PropTypes, {shape} from "prop-types";
import Map from "Map/map.jsx";
import NearbyList from "NearbyList/nearby-list.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {MapProps} from "Consts/consts";
import {calcRatingInPercent} from "Utils/common";

const Property = (props) => {
  const {offer, nearbyOffers, currentCity, cities} = props;
  const {id, title, features, rating, isPremium, price, images, inside, host, reviews} = offer;
  const {type, bedrooms, adults} = features;
  const {name, avatar, text} = host;
  const {PROPERTY_RESOLUTION} = MapProps;
  const {WIDTH, HEIGHT} = PROPERTY_RESOLUTION;

  const renderImages = (pictures) => {
    return pictures.map((picture, i) => {
      return (
        <div className="property__image-wrapper" key={picture + i}>
          <img className="property__image" src={picture} alt="Photo studio" />
        </div>
      );
    });
  };

  const renderInside = (insideItems) => {
    return insideItems.map((insideItem, i) => {
      return (
        <li className="property__inside-item" key={insideItem + i}>
          {insideItem}
        </li>
      );
    });
  };

  const renderText = (textItems) => {
    return textItems.map((textItem, i) => {
      return (
        <p className="property__text" key={textItem + i}>
          {textItem}
        </p>
      );
    });
  };

  return (
    <div key={id}>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>6 cities: property</title>
      <link rel="stylesheet" href="css/main.css" />
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
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
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {renderImages(images)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${calcRatingInPercent(rating)}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                Max {adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What`s inside</h2>
                  <ul className="property__inside-list">
                    {renderInside(inside)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={avatar} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                  </div>
                  <div className="property__description">
                    {renderText(text)}
                  </div>
                </div>
                <ReviewsList
                  reviews={reviews}
                />
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearbyOffers}
                width={WIDTH}
                height={HEIGHT}
                currentCity={currentCity}
                cities={cities}
              />
            </section>
          </section>
          <div className="container">
            <NearbyList
              nearbyOffers={nearbyOffers}
            />
          </div>
        </main>
      </div>
    </div>

  );
};

Property.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    features: PropTypes.shape({
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      adults: PropTypes.number.isRequired,
    }).isRequired,

    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,

    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,

    coords: PropTypes.arrayOf(PropTypes.number).isRequired,

    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,

      user: shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }),

      rating: PropTypes.number.isRequired,
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
      date: PropTypes.any.isRequired,
    }))
  }).isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
};

export default Property;
