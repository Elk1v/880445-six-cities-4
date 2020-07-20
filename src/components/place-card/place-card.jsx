import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {calcRatingInPercent} from "Utils/common";
import {initialCardId} from "Consts/consts";


const PlaceCard = (props) => {
  const {offer, onCardHoverChangeId, onCardTitleClick} = props;
  const {id, title, features, rating, isPremium, isBookmarked, price, images} = offer;
  const {type} = features;

  return (
    <article className="cities__place-card place-card" data-key={id} key={id}
      onMouseEnter={(evt) => onCardHoverChangeId(parseInt(evt.currentTarget.getAttribute(`data-key`), 10))}
      onMouseLeave={()=> onCardHoverChangeId(initialCardId)}>

      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isBookmarked && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calcRatingInPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name" onClick={(evt) => onCardTitleClick(
            parseInt(evt
             .currentTarget
             .parentNode
             .parentElement
             .getAttribute(`data-key`), 10))
        }>
          <Link
            to={{
              pathname: `/property`,
              /*
              hash: ``,
              search: `${id}`,
              */
            }}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onCardTitleClick: PropTypes.func.isRequired,
  onCardHoverChangeId: PropTypes.func.isRequired,
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
    isBookmarked: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlaceCard;
