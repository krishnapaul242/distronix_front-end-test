//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import './styles.css';
import api from '../API';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const SVGMapScreen = async () => {
  const { device_id, sensor_id } = useParams<{ device_id: string; sensor_id: string }>();
  const [Error, setError] = useState<string>("");
  const [MarkerData, setMarkerData] = useState<{ lat: number; lng: number }>();
  const [TextVisible, setTextVisible] = useState<boolean>(false)
  await api.fetchData(device_id).then((response) => {
    const data = response.data;
    if (data.hasOwnProperty('latitude') && data.hasOwnProperty('longitude')) setMarkerData({ lat: data.latitude, lng: data.longitude });
    else setError("Bad Response");
  }).catch(error => setError(error));
    return (
      <div style={{}}>
        {Error.length > 0 ? (
          <div className="error-screen">
            Some Error occurred. Error: {Error}
          </div>
        ) : (
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
              scale: 150,
            }}
          >
            <ZoomableGroup zoom={1}>
              <Geographies
                geography={geoUrl}
                style={{ width: "100%", height: "80%" }}
              >
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
              {typeof MarkerData !== "undefined" &&
              typeof MarkerData.lat !== "undefined" &&
              typeof MarkerData.lng !== "undefined" ? (
                <Marker
                  coordinates={[MarkerData?.lat, MarkerData?.lng]}
                      fill="#b30000"
                      onClick={() => setTextVisible(!TextVisible)}
                >
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
                  {TextVisible ? (
                    <text
                      textAnchor="middle"
                      y={-35}
                      style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                      {sensor_id}
                    </text>
                  ) : null}
                </Marker>
              ) : null}
            </ZoomableGroup>
          </ComposableMap>
        )}
      </div>
    );
}

export default SVGMapScreen;