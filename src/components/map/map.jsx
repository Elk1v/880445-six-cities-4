import React, {PureComponent} from "react";
import L from "leaflet";
import PropTypes from "prop-types";
import {MapProps} from "../../consts";
import {Map as LeafletMap, Marker, TileLayer} from 'react-leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {offers} = this.props;
    const center = [52.38333, 4.9];
    const customIcon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: MapProps.ICON_SIZE,
    });

    return (
      <LeafletMap
        center={center}
        zoom={MapProps.ZOOM}
        zoomControl={true}
        style={{width: 512, height: 674}}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        />

        {offers.map((offer) => {
          return (
            <Marker key={offer.id}
              position={offer.coords}
              icon={customIcon}>
            </Marker>
          );
        })}
      </LeafletMap>
    );
  }
}


Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
