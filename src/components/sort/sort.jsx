
import React from "react";
import PropTypes from "prop-types";
import {sorters} from "Consts/consts";

const Sort = ({onSortChange, onArrowClick, onPlacesOptionClick, currentSort, isOpened, isActive}) => {
  const onClickWrapper = (evt) => {
    onPlacesOptionClick();
    onSortChange(evt.target.textContent);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={onArrowClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4} >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}>
        {sorters.map((sorter, i) =>(
          <li
            className={`places__option places__option--active ${isActive && `places__option--active`}`}
            onClick={(evt) => onClickWrapper(evt)}
            key={sorter + i}
            tabIndex={0}>{sorter}
          </li>
        ))}
      </ul>
    </form>);
};

Sort.propTypes = {
  currentSort: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onArrowClick: PropTypes.func.isRequired,
  onPlacesOptionClick: PropTypes.func.isRequired,
};

export default Sort;

