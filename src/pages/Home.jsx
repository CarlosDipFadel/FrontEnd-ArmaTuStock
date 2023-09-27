import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Bienvenido= () => {
    return (
        <div className='Encabezado' >
            <h1>Bienvenido a la Ferretería</h1>
            <div>
                <container fluid>
                    <row>
                        <col1>
                            <Card className='Card1' style={{ width: '18rem' }} fluid>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Aqui estan los productos</Card.Title>
                                    <Button href="/show" variant="link">
                                        
                                    </Button>
                                </Card.Body>
                            </Card>
                        </col1>
                        <col2>
                            <Card className='Card2' style={{ width: '18rem'}} fluid>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Crear producto</Card.Title>
                                   <Button href="/Create" variant="link">
                                        
                                    </Button>
                                </Card.Body>
                            </Card>
                        </col2>
                    </row>
                </container>
            </div>
        </div>
    );
  }
  
  export default Bienvenido;




