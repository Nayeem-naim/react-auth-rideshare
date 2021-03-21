import React from 'react';
import{ Nav,Navbar } from 'react-bootstrap';
import  {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="container link-style">
             <Navbar.Brand className=" brand" as={Link} to="/home">BD RIDE SHARE</Navbar.Brand>
            <Nav className="justify-content-end navItem" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/contact">Contact </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBar;