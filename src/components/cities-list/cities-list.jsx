import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cityElements, onCityTitleClick, currentCity} = props;

  const locationsClickHandler = (evt) => {
    evt.preventDefault();
    onCityTitleClick(evt.target.textContent);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityElements.map((cityElement) =>{
          const isActive = cityElement.name === currentCity;
          return (
            <li className="locations__item" key={cityElement.id}>
              <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`} onClick={(evt) => locationsClickHandler(evt)}>
                <span>{cityElement.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cityElements: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};

export default CitiesList;
