import React from 'react';
import Movies from './components/Movies';
import Home from './components/Home';
import TV from './components/TV';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={TV} />
      </Switch>
    </Router>
  );
}

export default App;
