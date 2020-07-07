import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {

  const {cities} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) =>{
          return (
            <li className="locations__item" key={city.id}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{city.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CitiesList;
