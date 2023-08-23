import React from 'react';
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Nav  from "react-bootstrap/Nav";
import NavbarBs  from "react-bootstrap/Navbar";
import './navbar.css'

const Navbar = () => {
    return (
        <NavbarBs expand="lg" bg='dark' variant='dark'> 
            <Container fluid>
                <NavbarBs.Brand href="#home">Arma tu stock</NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="nav-container justify-content-evenly">
                        <Nav.Item>
                        <Link to="/">Principal</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/create">Crear</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link to="/show">Listar</Link>
                        </Nav.Item>
                    </Nav>
                    <Button variant='primary'>Login</Button>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;