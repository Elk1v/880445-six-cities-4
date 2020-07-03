import React from "react";
import PropTypes, {shape} from "prop-types";
import moment from "moment";
import {calcRatingInPercent} from "Utils/common";

const renderText = (txtItems)=> {
  return txtItems.map((txtItem, i) => {
    return (
      <p className="reviews__text" key={txtItem + i}>
        {txtItem}
      </p>
    );
  });
};

const Review = (props) => {
  const {review} = props;
  const {user, rating, text, date} = review;
  const {name, avatar} = user;

  const formatedDate = moment(date).format(`MMMM YYYY`)


  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calcRatingInPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        {renderText(text)}
        <time className="reviews__time" dateTime={date}>{formatedDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.any.isRequired,
  })
};

export default Review;
