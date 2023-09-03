import React from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';

const Header = () => {
    return (
        
        <Navbar expand="lg"> 
            <Container>
                <Navbar.Brand href="/home">Arma tu stock</Navbar.Brand>
                <div class="d-flex justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Principal</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/register">Tabla usuarios</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/registerTable">Registro usuarios</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/registerEdit">Editar usuarios</Nav.Link>
                    </Nav>
                  <Button variant='primary'>Login</Button>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;