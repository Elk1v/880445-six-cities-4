import React, {PureComponent} from "react";
import L from "leaflet";
import styled from "styled-components";
import PropTypes from "prop-types";
import {MapProps} from "../../consts";


export const Wrapper = styled.div`
  width: ${(props) => {
    return props.width;
  }};

  height: ${(props) => {
    return props.height;
  }}
`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const coords = offers.map((offer) =>{
      return offer.coords;
    });
    const city = [52.38333, 4.9];
    const icon = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: MapProps.ICON_SIZE,
    });

    this.map = L.map(`map`, {
      center: city,
      zoom: MapProps.ZOOM,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(city, MapProps.ZOOM);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    coords.forEach((coord) =>{
      L.marker(coord, {icon}).addTo(this.map);
    });
  }

  render() {
    return <Wrapper width="512px" height="674px" id="map" />;
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
