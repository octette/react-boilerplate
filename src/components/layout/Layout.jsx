import React from 'react';
import Header from './Header';

const Layout = props => (
  <div className="main-layout">
    <div className="container">
      <Header />
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
