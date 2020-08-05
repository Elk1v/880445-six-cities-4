import React, {PureComponent} from "react";
import L from "leaflet";
import PropTypes from "prop-types";
import {Map as LeafletMap, Marker, TileLayer} from 'react-leaflet';
import {MapProps} from "Consts/consts";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, width, height, currentCardId} = this.props;
    const center = this._findCenter();
    const customIcon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: MapProps.ICON_SIZE,
    });
    const activeIcon = L.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: MapProps.ICON_SIZE,
    });

    const markers = offers.map((offer) => {
      const icon = (offer.id === currentCardId) ? activeIcon : customIcon;
      return (
        <Marker key={offer.id}
          position={offer.coords}
          icon={icon}>
        </Marker>
      );
    });

    return (
      <LeafletMap
        center={center}
        zoom={MapProps.ZOOM}
        zoomControl={true}
        style={{width: `${width}%`, height}}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />
        {markers}
      </LeafletMap>
    );
  }

  _findCenter() {
    const {offers, currentCity} = this.props;
    const findCity = offers.find((offer) => offer.city === currentCity);
    return findCity.center;
  }
}

Map.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentCardId: PropTypes.number,
  offers: PropTypes.array.isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
};

export default Map;
