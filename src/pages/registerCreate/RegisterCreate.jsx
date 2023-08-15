import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {validationSchema} from "../../helpers/registerValidations";
import logo from "../../img/Logo.png";
import * as Yup from "yup";
import clsx from "clsx";

const RegisterCreate = ({ URL, getApi }) => {
  //useNavigate
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    address: "",
    postalCode: "",
    userName: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 201) {
        Swal.fire("Created!", "Your file has been created.", "success");
        getApi();
        navigate("/registerTable");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={validationSchema}>
     
      <Form className="container mt-5 bg-white p-4 rounded">
        <div className="d-flex justify-content-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle mt-4"
            style={{ maxWidth: "150px", width: "100%", margin: "0 auto" }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar correo electrónico:</label>
          <Field
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            className="form-control"
          />
          <ErrorMessage
            name="confirmEmail"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <Field type="tel" id="phone" name="phone" className="form-control" />
          <ErrorMessage name="phone" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <Field
            type="text"
            id="address"
            name="address"
            className="form-control"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Código Postal:</label>
          <Field
            type="text"
            id="postalCode"
            name="postalCode"
            className="form-control"
          />
          <ErrorMessage
            name="postalCode"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Nombre de Usuario:</label>
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
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
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
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Rol:</label>
          <Field as="select" id="role" name="role" className="form-control">
            <option value="" disabled>
              Seleccionar Rol
            </option>
            <option value="admin">Usuario Administrador</option>
            <option value="sales">Usuario de Ventas</option>
          </Field>
          <ErrorMessage name="role" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Registrarse
        </button>
       
      </Form>

    </Formik>
  );
};

export default RegisterCreate;
