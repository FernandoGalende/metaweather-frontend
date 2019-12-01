import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home/Home.container';
import LayoutChalenge from './components/pages/LayoutChallenge/LayoutChallenge.container';
import JSChallenge from './components/pages/JSChallenge/JSChallenge.container';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact component={Home} path="/home" />
      <Route exact component={LayoutChalenge} path="/layoutchalenge" />
      <Route exact component={JSChallenge} path="/jschallenge" />
      <Route extact component={Home} path="/" />
      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  </Router>
);

export default AppRouter;
