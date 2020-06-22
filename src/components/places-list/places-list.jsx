import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: null,
    };

    this.hoverHandler = this.hoverHandler.bind(this);
  }

  render() {
    const {offers, onBtnClick} = this.props;
    console.log(this.state);
    return (
      offers.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onBtnClick={onBtnClick}
            onCardHover={this.hoverHandler}
          />
        );
      })

    );
  }

  hoverHandler(evt) {
    this.setState({
      currentCard: evt.currentTarget,
    });
  }
}

PlacesList.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
