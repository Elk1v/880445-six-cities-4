import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {citiesNameList, onCityTitleClick, currentCity} = props;

  const locationsClickHandler = (evt) => {
    evt.preventDefault();
    onCityTitleClick(evt.target.textContent);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesNameList.map((cityName, i) =>{
          const isActive = cityName === currentCity;
          return (
            <li className="locations__item" key={i + cityName}>
              <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`} onClick={(evt) => locationsClickHandler(evt)}>
                <span>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  citiesNameList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};

export default CitiesList;
