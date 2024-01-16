
import React from 'react';

import { Navbar, Container, Nav, Button, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../../hooks/useAuth';
import './Header.css';





const Header = () => {
    const { user, logout, admin } = useFirebase();
    return (


        // header part

        <>

            <Navbar bg="dark" variant="dark" className="py-4 shadow" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className=" nav-item  text-danger fw-bolder"><h1>Drive Time</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end  ">
                        <Nav.Link as={Link} to="/home" className="  nav-item text-white"><h5>Home</h5></Nav.Link>
                        <Nav.Link as={Link} to="/info" className="  nav-item text-white"><h5>Information</h5></Nav.Link>
                        <Nav.Link as={Link} to="/products" className="  nav-item text-white"><h5>Products</h5></Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="  nav-item text-white"><h5>Blogs</h5></Nav.Link>


                        {user?.email ? < Nav.Link as={Link} to="/dashboard" className=" nav-item text-white"> <h5>Dashboard</h5></Nav.Link>
                            : <Nav.Link as={Link} to="/home"></Nav.Link>}


                        {user?.email ?
                            <Button onClick={logout} variant="white" className=" nav-item text-white"> <h5>LogOut</h5></Button>
                            :
                            <Nav.Link as={Link} to="/login" className=" nav-item text-white"> <h5>Login</h5></Nav.Link>
                        }
                        <Navbar.Text>

                            <a href=" #login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>



    );
};

export default Header;


