import React , {Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {  Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">COVID-19 INDIA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mr-auto">
             
             
               <Link className="nav-link" to ="/india">Statewise details</Link>
                
               <Link className="nav-link" to ="/piechart">Pie Chart  </Link>
                
                 
                 
                 <Link className="nav-link" to="/barchart">Bar Chart  </Link>
                 
                 <Link className="nav-link" to="/linechart">Line Chart</Link>
               
             
              
              
             </Nav>    
            </Navbar.Collapse>
            </Navbar>
            



        )
    }
}

export default Header;