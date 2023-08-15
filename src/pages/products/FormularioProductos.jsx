import { Form, Button } from 'react-bootstrap';

return (
  
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nombrelibro"
            value={nombrelibro}
            placeholder="Ingrese el nombre del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="autor">
          <Form.Label>Autor del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Ingrese el nombre del autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="cantidad"
            value={cantidad}
            placeholder="Ingrese la cantidad disponible"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="precio"
            value={precio}
            placeholder="Ingrese el precio del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );


export default FormularioDeLibro;