import React from 'react';
import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';



const Bienvenido = () => {
    return (
        <div className='Encabezado' >
            <h1>Bienvenido a la Ferretería</h1>
            <div>
                <Button href="/show" variant="link">
                    <img src="/ruta/a/imagen/listado-de-productos.jpg" alt="Listado de productos" />
                </Button>




                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button href="/show" variant="link">
                            < img alt="Listado de productos" fluid />
                        </Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button href="/Create" variant="link">
                            <img alt="Crear producto" fluid />
                        </Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

return (
    <div>
        <h1 style={{ textAlign: 'center' }}> Bienvenido </h1>
    </div>
);



export default Bienvenido;
