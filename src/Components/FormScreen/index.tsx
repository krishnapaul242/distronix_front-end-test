import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const FormScreen = () => {
    const [deviceId, setDeviceId] = useState<string>();
  const [sensorId, setSensorId] = useState<string>();
  const [ButtonActive, setButtonActive] = useState<boolean>(false)
    return (
      <div className="form-screen">
        <input
          type="text"
          id="InputDeviceID"
          className="input-box"
          placeholder="Device ID"
          required={true}
          value={deviceId}
          onChange={(e) => {
            setDeviceId(e.target.value);
            setButtonActive(true);
          }}
        ></input>
        <input
          type="text"
          id="InputSensorID"
          className="input-box"
          placeholder="Sensor ID"
          required={true}
          value={sensorId}
          onChange={(e) => {
            setSensorId(e.target.value)
            setButtonActive(true)
          }}
        ></input>
        <Link
          to={ButtonActive ? `/map/${deviceId}/${sensorId}` : "#"}
          className="submit-button"
        >
          See on Google Map
        </Link>
        <Link
          to={ButtonActive ? `/map-alt/${deviceId}/${sensorId}` : "#"}
          className="submit-button"
        >
          See on Alternative Map
        </Link>
      </div>
    );
}

export default FormScreen;