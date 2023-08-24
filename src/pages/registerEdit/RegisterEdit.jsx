import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as FormBoostrap } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { validationSchema } from "../../helpers/registerValidations";
import logo from "../../img/Logo.png";
import * as Yup from "yup";
import clsx from "clsx";
import {UsuariosContext} from "../../context/UserContext"

const RegisterEdit = () => {
  const location = useLocation();
  const [roles, setRoles] = useState([]);
  const [roleSelected, setRoleSelected] = useState()
  const [user, setUser] = useState(location.state || {});

  const {getRoles, updateUser} = useContext(UsuariosContext)

  useEffect(() => {
    if (user.roles && user.roles.length > 0) {
      setRoleSelected(user.roles[0].role);
    }
    getRoles().then((response)=>{
      setRoles(response)
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  const initialValues = {
    nombre: user.nombre || '',
    apellido: user.apellido || '',
    email: user.email || '',
    confirmEmail: user.email || '',
    telefono: user.telefono || '',
    direccion: user.direccion || '',
    codigoPostal: user.codigoPostal || '',
    userName: user.userName || '',
    password: "",
    confirmPassword: "",
    rol: user.roles && user.roles[0] ? user.roles[0].role : "",
  };
  const handleFormSubmit = async (values) => {
    try {
      Swal.fire({
        title: "Crear usuario",
        text: "Esta seguro que desea modificar al usuario",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try { 
            const userDB = {
              _id: user._id,
              nombre: values.nombre,
              apellido: values.apellido,
              email: values.email,
              telefono: values.telefono,
              direccion: values.direccion,
              codigoPostal: values.codigoPostal,
              userName: values.userName,
              password: values.password,
              roles: [roleSelected],
            };

            updateUser(userDB).then((response)=>{
              if (response.status === 201) {
                Swal.fire(
                  response.data,
                  "El usuario ha sido registrado exitosamente.",
                  "success"
                );
              } else {
                console.log("assdasdasdasdasd");
                Swal.fire(
                  "Error",
                  "Hubo un error al registrar el usuario en la base de datos.",
                  "error"
                );
              }
            })

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


    <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleFormSubmit}>
      <Form
        className="container mt-5 p-4 rounded shadow text-white"
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

          <FormBoostrap.Select aria-label="Default select example" onChange={(value) => { setRoleSelected(value.target.value) }}>
            <option>{roleSelected}</option>
            {roles.map((rol, index) => {
              return (<option key={index} value={rol.role}>{rol.role}</option>)
            })}
          </FormBoostrap.Select>
          <ErrorMessage name="rol" component="div" className="text-danger" />
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-dark mt-2 btn-lg"style={{ width: "70%" }}>
            Actualizar
          </button>
        </div>
      </Form>
    </Formik>

  );
};

export default RegisterEdit;
