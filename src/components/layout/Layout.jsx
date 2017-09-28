import React, { Component } from 'react';
import { Container, Row, Navbar} from 'reactstrap';
import { Button, NavItem, NavDropdown, MenuItem, Breadcrumb, Nav} from 'react-bootstrap';

import Header from './Header';

class Layout extends Component {
    render() {
        return(
            <div className="main-layout">               
                <div className="container">
                <Header />         
                {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;