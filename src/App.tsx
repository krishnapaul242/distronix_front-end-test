import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormScreen from './Components/FormScreen';
import MapScreen from './Components/MapScreen';
import SVGMapScreen from './Components/SVGMapScreen';

const testDevice: string = ""; 

function App() {
  return (
    <Router>
      <nav style={{width: '100%', height: '10%'}}>
        <ul>
          <li>
            <Link to="/select-sensor">Select Sensor</Link>
          </li>
          <li>
            <Link to={`/map/${testDevice}`}>Google Map</Link>
          </li>
          <li>
            <Link to={`/map-alt/${testDevice}`}>Alternative Map</Link>
          </li>
        </ul>
      </nav>
      <div style={{backgroundColor: '#cde543'}}>
        <Switch>
          <Route path="/select-sensor">
            <FormScreen />
          </Route>
          <Route path="/map">
            <MapScreen />
          </Route>
          <Route path="/map-alt">
            <SVGMapScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
