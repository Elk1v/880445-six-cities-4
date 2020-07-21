import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {sorters} from "Consts/consts";

class Sort extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      isActive: false,
    };
    this.arrowClickhandler = this.arrowClickhandler.bind(this);
    this.placesOptionClickHandler = this.placesOptionClickHandler.bind(this);
  }

  render() {
    const {isOpened, isActive} = this.state;
    const {currentSort} = this.props;

    return (
      <form className="places__sorting" action="#" method="get" onClick={this.arrowClickhandler}>
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
              onClick={(evt) => this.onClickWrapper(evt)}
              key={sorter + i}
              tabIndex={0}>{sorter}
            </li>
          ))}
        </ul>
      </form>);
  }

  arrowClickhandler() {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened
    }));
  }

  placesOptionClickHandler() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  }

  onClickWrapper(evt) {
    const {onSortChange} = this.props;
    this.placesOptionClickHandler();
    onSortChange(evt.target.textContent);
  }
}

Sort.propTypes = {
  currentSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

export default Sort;

