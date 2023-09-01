import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';



const Bienvenido = () => {
    return (
        <div className=‘Encabezado’> <h1 style=“color: #C2DEDC; font-family: ‘Roboto’, sans-serif; text-shadow: 2px 2px 4px #000000;”>Bienvenido a la Ferretería</h1> <div style=“background-image: url(https://distribuidortruper.mx/wp-content/uploads/2022/12/Productos-de-ferreteria.jpg); background-size: cover; height: 200px; width: 100%;”></div> </div>
                <container fluid>
                    <row>
                        <col1>
                            <Card className='Card1' style={{ width: '18rem' }} fluid>
                                <Card variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title className='CardTitle' />
                                    <Button className='boton1' href="/show" variant="link">
                                        <p>Listado de productos </p>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </col1>
                        <col2>
                            <Card className='Card2' style={{ width: '18rem' }} fluid>
                                <Card variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title className='CardTitle' />
                                    <Button href="/Create" variant="link" >
                                        <p>Crear producto </p>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </col2>
                    </row>
                </container>
            </div>
        </div>
    );
};




export default Bienvenido;
