import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormScreen from './Components/FormScreen';
import MapScreen from './Components/MapScreen';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/select-sensor">Select Sensor</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/select-sensor">
          <FormScreen/>
        </Route>
        <Route path="/map/:device_id/:sensor_id">
          <MapScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
