import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Bienvenido= () => {
    return (
        <div className="text-center mt-4" >
        <h1>Bienvenido a la Ferretería!</h1>
        <br></br>
        <div className="row justify-content-center">
        <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/assets/ferre1.jpg" />
            <Card.Body>
              <Card.Title>Lista de productos</Card.Title>
              <Card.Text>
                Aqui podra visualizar todos los productos con los que contamos actualmente en stock
              </Card.Text>
              <Button variant="primary" href="/show" > 
              < img alt="Lista de productos" fluid />
            </Button>
            </Card.Body>
          </Card>
        </div>
  
        <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/assets/ferre2.jpg" />
            <Card.Body>
              <Card.Title>Agregar producto</Card.Title>
              <Card.Text>
                Aqui podra agregar nuevos productos al inventario, tambien ver precio y la categoria
              </Card.Text>
              <Button variant="primary" href="/Create" >
                    <img alt="Agregar producto" fluid />
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
    );
  }
  
  export default Bienvenido;




/*
const Bienvenido = () => {
    return (
        <div className='Encabezado' >
            <h1>Bienvenido a la Ferretería</h1>
            <div>
                <container fluid>
                    <row>
                        <col1>
                            <Card className='Card1' style={{ width: '18rem' }} fluid>
                                <Card.Img variant="top" src="holder.js/100px180"  />
                                <Card.Body>
                                    <Card.Title>Aqui estan los productos</Card.Title>
                                    <Button href="/show" variant="link">
                                        < img alt="Lista de productos" fluid />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </col1>
                        <col2>
                            <Card className='Card2' style={{ width: '18rem'}} fluid>
                                <Card.Img variant="top" src="holder.js/100px180"  />
                                <Card.Body>
                                    <Card.Title>Crear producto</Card.Title>
                                   <Button href="/Create" variant="link">
                                        <img alt="Crear producto" fluid />
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
*/
