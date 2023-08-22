import React, { useContext } from 'react';
import { UsuariosContext } from '../../context/UserContext';
import { Container, Card, Image, Button, Col } from 'react-bootstrap';
import './login.css'
import logo from "../../img/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userSchema } from '../../helpers/loginValidations';
import Swal from "sweetalert2";

const Login = ({setUserValidation}) => {
    const {loginUser} = useContext(UsuariosContext)

    const initialValues = {
        userName: "",
        password: ""
    }

    const handleFormSubmit = async (values) => { 
        const login = await loginUser(values.userName, values.password)
        if (login.success){
            if(setUserValidation){setUserValidation(true)}
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: login.message
            })
        }
    }

    return (
        <Container fluid className='body d-flex justify-content-center align-items-center'>
            <Col lg={10} md={6}>
                <Card>
                    <div className='card-header d-flex justify-content-center align-items-center'>
                        <Image
                            fluid
                            src={logo}
                            alt="Imagen de la tarjeta"
                            className="card-image"
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center'>Login</Card.Title>
                        <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={userSchema}>
                            <Form>
                                <label>Nombre de Usuario:</label>
                                <Field
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="userName"
                                    component="div"
                                    className="text-danger"
                                />

                                <label>Contraseña:</label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                                
                                <Button type='submit' className='mt-3 w-100'>Confirmar</Button>
                            </Form>
                        </Formik>
                    </Card.Body>
                </Card>
            </Col>

        </Container>
    );
};

export default Login;