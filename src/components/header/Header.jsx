import React from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg"> 
            <Container>
                <Navbar.Brand href="#home">Arma tu stock</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Principal</Nav.Link>
                    </Nav>
                    <Button variant='primary'>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    /* return (
        <div className='header'>
            <h1>hola mundo</h1>
        </div>
    ); */
};

export default Header;