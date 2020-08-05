import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "Store/app/actions";
import {getCurrentCardId} from "Store/selectors/get-current-card-id";
import PropTypes from "prop-types";
import PlaceCard from "PlaceCard/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onCardTitleClick, onCardHoverChangeId} = this.props;
    return (
      offers.map((offer) =>{
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCardTitleClick={onCardTitleClick}
            onCardHoverChangeId={onCardHoverChangeId}
          />
        );
      })
    );

  }
}

PlacesList.propTypes = {
  onCardTitleClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  onCardHoverChangeId: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  return (state) => ({
    currentCardId: getCurrentCardId(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onCardHoverChangeId(id) {
    dispatch(ActionCreator.changeCardId(id));
  },
});

export {PlacesList};
export default connect(makeMapStateToProps, mapDispatchToProps)(PlacesList);
