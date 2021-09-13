import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

import MainView from './MainView';

const Hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainView} />
      </Switch>
    </Router>
  );
}
