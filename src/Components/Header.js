import React , {Component} from 'react';
import {Navbar} from 'react-bootstrap';


class Header extends Component {
    render() {
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">COVID-19 INDIA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;