import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cityElements, onCityTitleClick, currentCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityElements.map((cityElement) =>{
          const isActive = cityElement.name === currentCity;
          return (
            <li className="locations__item" key={cityElement.id}>
              {isActive && (
                <a className="locations__item-link tabs__item tabs__item--active" onClick={(evt) => {
                  evt.preventDefault();
                  onCityTitleClick(evt.target.textContent);
                }}>
                  <span>{cityElement.name}</span>
                </a>
              )}
              {isActive || (
                <a className="locations__item-link tabs__item " href="#" onClick={(evt) => {
                  evt.preventDefault();
                  onCityTitleClick(evt.target.textContent);
                }} >
                  <span>{cityElement.name}</span>
                </a>
              )}
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
