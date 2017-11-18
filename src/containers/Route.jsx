import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../containers/Home';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Home} />
    </Layout>
  </BrowserRouter>
);
export default Routes;
