import {React, useState} from 'react';
import Movies from './components/Movies';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home} />
      <Route path="/movies" component={Movies} />
      {/* <Route path="/tv" component={tv} /> */}
      </Switch>
    </Router>
  );
}

export default App;
