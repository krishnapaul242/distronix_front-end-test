import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormScreen from './Components/FormScreen';
import MapScreen from './Components/MapScreen';
import SVGMapScreen from './Components/SVGMapScreen';
import Nav from "react-bootstrap/Nav";
import Home from './Components/Home';

const testDevice: string = ""; 

function App() {
  return (
    <Router>
      <Nav variant="tabs" justify={true}>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/select-sensor">Select Sensor</Link>
        </Nav.Item>
        <Link to={`/map/${testDevice}`}>Google Map</Link>
        <Nav.Item>
          <Link to={`/map-alt/${testDevice}`}>Alternative Map</Link>
        </Nav.Item>
      </Nav>
      <div style={{ backgroundColor: "#cde543" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
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
