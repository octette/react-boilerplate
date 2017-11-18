import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => (
  <Navbar color="faded" className="main-header" light toggleable>
    <NavbarBrand href="/">React Boilerplate</NavbarBrand>
  </Navbar>
);

export default Header;
