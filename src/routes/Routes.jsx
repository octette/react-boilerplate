import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Account from '../containers/Account';
import Home from '../containers/Home';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Account} />
          {/* Add your Webpage Routes Here */}
        </Layout>
      </BrowserRouter>
    );
  }
}
export default Routes;