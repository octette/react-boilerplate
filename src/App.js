import React, { Component } from 'react';
import Route from './routes/Routes';

import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Route />
      </div>
    );
  }
}

export default App;
