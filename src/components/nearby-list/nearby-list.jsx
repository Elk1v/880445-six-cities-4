import React from "react";
import PropTypes from "prop-types";
import NearbyCard from "NearbyCard/nearby-card.jsx";

const NearbyList = (props) => {
  const {nearbyOffers} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((nearbyOffer) => {
          return (
            <NearbyCard
              key={nearbyOffer.id}
              nearbyOffer={nearbyOffer}
            />
          );
        })}
      </div>
    </section>
  );
};

NearbyList.propTypes = {
  nearbyOffers: PropTypes.array.isRequired,
};

export default NearbyList;
