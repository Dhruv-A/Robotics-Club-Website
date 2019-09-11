import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About {...props} />
            )}
          />
          <Route
            exact
            path="/contact"
            render={props => (
              <Contact {...props} />
            )}
          />
          <Route
            exact
            path="/projects"
            render={props => (
              <Projects {...props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
