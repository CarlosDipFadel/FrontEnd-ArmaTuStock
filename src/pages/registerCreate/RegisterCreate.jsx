import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { validationSchema } from "../../helpers/registerValidations";
import logo from "../../img/Logo.png";
import * as Yup from "yup";
import clsx from "clsx";
import axios from "axios";

const RegisterCreate = ({}) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/users/getRoles`)
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener roles:", error);
      });
  }, []);

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    confirmEmail: "",
    telefono: "",
    direccion: "",
    codigoPostal: "",
    userName: "",
    password: "",
    confirmPassword: "",
    rol: "",
  };

  const handleFormSubmit = async (values) => {
    values.preventDefault();
    console.log(values);

    try {
      await axios
        .post(`${import.meta.env.VITE_URL}/api/users/register`, {
          nombre: values.target[0].value,
          apellido: values.target[1].value,
          email: values.target[2].value,
          confirmEmail: values.target[3].value,
          telefono: values.target[4].value,
          direccion: values.target[5].value,
          codigoPostal: values.target[6].value,
          userName: values.target[7].value,
          password: values.target[8].value,
          confirmPassword: values.target[9].value,
          rol: values.target[10].value,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form
        className="container mt-5 bg-white p-4 rounded"
        onSubmit={handleFormSubmit}
      >
        <div className="d-flex justify-content-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle mt-4"
            style={{ maxWidth: "150px", width: "100%", margin: "0 auto" }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <Field
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
          />
          <ErrorMessage name="nombre" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <Field
            type="text"
            id="apellido"
            name="apellido"
            className="form-control"
          />
          <ErrorMessage
            name="apellido"
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
          <label htmlFor="telefono">Teléfono:</label>
          <Field
            type="telefono"
            id="telefono"
            name="phone"
            className="form-control"
          />
          <ErrorMessage
            name="telefono"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <Field
            type="text"
            id="direccion"
            name="direccion"
            className="form-control"
          />
          <ErrorMessage
            name="direccion"
            component="div"
            className="text-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <Field
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            className="form-control"
          />
          <ErrorMessage
            name="codigoPostal"
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
          <label htmlFor="rol">Rol:</label>
          <Field as="select" id="rol" name="rol" className="form-control">
            <option value="">Selecciona un rol</option>
            {roles.map((rol, index) => (
              <option key={index} value={rol.role}>
                {rol.role}
              </option>
            ))}
          </Field>
          <ErrorMessage name="rol" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Registrarse
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterCreate;
