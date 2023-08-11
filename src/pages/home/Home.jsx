import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Productos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre del producto"
            defaultValue="Martillo"
          />
          <Form.Control.Feedback>Bien</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tipo de producto"
            defaultValue="Hogar"
          />
          <Form.Control.Feedback>Bien</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Codigo</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Codigo del producto"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Codigo invalido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agregar este producto"
          feedback="El producto fue agregado"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Agregar</Button>
    </Form>
    </div>
  );
}

export default FormExample;