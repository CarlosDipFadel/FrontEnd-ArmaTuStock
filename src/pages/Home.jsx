import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

const WelcomePage = () => {
  return (
    <div className='Encabezado' >
      <h1>Bienvenido a la Ferretería</h1>
      <div>
        <Button href="/show" variant="link">
          <img src="/ruta/a/imagen/listado-de-productos.jpg" alt="Listado de productos" />
        </Button>
        <Button href="/Create" variant="link">
          <img src="/ruta/a/imagen/crear-producto.jpg" alt="Crear producto" />
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
