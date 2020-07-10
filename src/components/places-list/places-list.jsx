import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "PlaceCard/place-card.jsx";


class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: null,
    };

    this.hoverHandler = this.hoverHandler.bind(this);
  }

  render() {
    const {offers, onCardTitleClick} = this.props;
    return (
      offers.map((offer) =>{
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCardTitleClick={onCardTitleClick}
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
  onCardTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
