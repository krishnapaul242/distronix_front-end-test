import React, { useState } from 'react';
import './style.css';

const FormScreen = () => {
    const [deviceId, setDeviceId] = useState<string>();
    const [sensorId, setSensorId] = useState<string>();
    return (
      <div className="form-screen">
        <input
          type="text"
          id="InputDeviceID"
          className="input-box"
          placeholder="Device ID"
          required={true}
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
        ></input>
        <input
          type="text"
          id="InputSensorID"
          className="input-box"
          placeholder="Sensor ID"
          required={true}
          value={sensorId}
          onChange={(e) => setSensorId(e.target.value)}
        ></input>
        <button className="submit-button">
          See on Google Map
        </button>
        <button className="submit-button">
          See on Alternative Map
        </button>
      </div>
    );
}

export default FormScreen;