import React from 'react';
import { NavLink } from 'react-router-dom';

/* Aquí, hemos agregado dos enlaces de navegación utilizando el componente NavLink de react-router-dom:
 uno para ver una lista de todos los productos 
y el otro para agregar un nuevo producto */
const CrudProductos = () => {
  return (
    <CrudProductos>
      <h1>Aplicación de Administración de Libros</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de productos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Agrega productos
        </NavLink>
      </div>
    </CrudProductos>
  );
};


export default CrudProductos;