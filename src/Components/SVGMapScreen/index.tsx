//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
//import { useParams } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import './styles.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const SVGMapScreen = () => {
  //const { device_id } = useParams();
    return (
      <div style={{}}>
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 150,
          }}
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl} style={{width: '100%', height: '80%'}}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#FFF"
                  />
                ))
              }
            </Geographies>
            <Marker coordinates={[-101, 53]} fill="#b30000">
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
}

export default SVGMapScreen;