import React, { Component } from 'react';
import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem,   
} 
from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
          <Navbar color="faded" className="main-header" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/home">Home</Link>
              </NavItem>
              <NavItem>
              <Link to="/account">Account</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;
