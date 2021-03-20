import React  from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar className="container justify-content-end " activeKey="/home">
                <Nav>
                <Navbar.Brand className="brand-style">Bangladesh Ride Share</Navbar.Brand>
                <Link className="link-style " to="/home">Home</Link>
                <Link className="link-style " to="/destination">Destination</Link>
                <Link className="link-style " to="/blog">Blog</Link>
                <Link className="link-style " to="/contact">Contact</Link>
                <Link className="link-style " to="/login">Login</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;