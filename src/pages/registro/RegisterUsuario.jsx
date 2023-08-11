import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';


const RegistrationForm = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Estado para rastrear el registro exitoso
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',


  };

  const validationSchema = Yup.object({

    //validacion de nombre y apellido
    firstName: Yup.string()
      .required('Campo requerido')
      .max(30, 'Debe tener 30 caracteres o menos'),
    lastName: Yup.string()
      .required('Campo requerido')
      .max(30, 'Debe tener 30 caracteres o menos'),

    //validacion de email

    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Los correos electrónicos no coinciden')
      .required('Campo requerido'),

    //validacion de contraseña
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Campo requerido'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });

      // Simulación del proceso de registro exitoso
      setTimeout(() => {
        console.log(values);
        setIsRegistered(true);
        setErrorMessage('');
        setSubmitting(false);
      }, 1000);
    } catch (error) {
      setErrorMessage('No se puede registrar. Por favor, revisa los campos.');
      setSubmitting(false);
    }
  };
  return (
    <div className="container mt-5">
       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {isRegistered ? (
        <div className="alert alert-success">Usuario registrado exitosamente</div>
      ) : (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="container mt-5 bg-white p-4 rounded">
            <div className="form-group">
              <label htmlFor="firstName">Nombre:</label>
              <Field type="text" id="firstName" name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido:</label>
              <Field type="text" id="lastName" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmEmail">Confirmar correo electrónico:</label>
              <Field type="email" id="confirmEmail" name="confirmEmail" className="form-control" />
              <ErrorMessage name="confirmEmail" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <Field type="password" id="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña:</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary mt-2" >Registrarse</button>
          </Form>
        </Formik>
      )}
    </div>
  );
};


export default RegistrationForm;
