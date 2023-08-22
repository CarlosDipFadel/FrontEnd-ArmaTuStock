import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { validationSchema } from "../../helpers/registerValidations";
import logo from "../../img/Logo.png";
import * as Yup from "yup";
import clsx from "clsx";
import axios from "axios";
import { Form as FormBoostrap } from "react-bootstrap";

const RegisterCreate = ({}) => {
  const [roles, setRoles] = useState([]);
  const [roleSelected, setRoleSelected] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/users/getRoles`)
      .then((response) => {
        setRoles(response.data);
        setRoleSelected(response.data[0].role);
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
    confirmPassword: ""
  };

  const handleFormSubmit = async (values) => {

    console.log(values);

    try {
      Swal.fire({
        title: "Crear usuario",
        text: "Esta seguro que desea crear un nuevo usuario",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_URL}/api/users/register`,
              {
                nombre: values.nombre,
                apellido: values.apellido,
                email: values.email,
                telefono: values.telefono,
                direccion: values.direccion,
                codigoPostal: values.codigoPostal,
                userName: values.userName,
                password: values.password,
                roles: [roleSelected],
              }
            );

            if (response.status === 201) {
              Swal.fire(
                "¡Usuario Registrado!",
                "El usuario ha sido registrado exitosamente.",
                "success"
              );
            } else {
              Swal.fire(
                "Error",
                "Hubo un error al registrar el usuario en la base de datos.",
                "error"
              );
            }
          } catch (error) {
            console.error("Error al registrar el usuario:", error);
            // SweetAlert2 para mostrar un mensaje de error
            Swal.fire(
              "Error",
              "Hubo un error al registrar el usuario.",
              "error"
            );
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      <Form
        className="container mt-5  p-4 rounded shadow text-white"
        style={{ backgroundColor: '#01939c' }}
      >
        <div className="welcome-message text-center mb-4">
          <h3>Formulario de registro</h3>
        </div>
        <div className="d-flex d-none d-sm-block text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid rounded-circle mt-4"
            style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}
          />
        </div>
        <div className="form-group row">
          <div className="col-md-6  mb-md-3 mb-sm-0 ">
            <label htmlFor="nombre">Nombre:</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="col-md-6 mt-sm-0">
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
            name="telefono"
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

          <FormBoostrap.Select
            aria-label="Default select example"
            onChange={(value) => {
              setRoleSelected(value.target.value);
            }}
          >
            {roles.map((rol) => {
              return <option  key={rol.role} value={rol.role}>{rol.role}</option>;
            })}
          </FormBoostrap.Select>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-dark mt-2 btn-lg"style={{ width: "70%" }}>
            Registrarse
          </button>
        </div>
      </Form>
   
    </Formik>
  );
};

export default RegisterCreate;
