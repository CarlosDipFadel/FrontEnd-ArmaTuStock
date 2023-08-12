import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import {
  validationFirstName,
  validationLastName,
  validationEmail,
  validationConfirmEmail,
  validationPassword,
  validationConfirmPassword,
} from "../../helpers/registerValidations";
import logo from "../../img/Logo.png";
import * as Yup from "yup";
import clsx from "clsx";

const RegistrationForm = ({ URL, getApi }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //useNavigate
  // const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
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
        // Puedes realizar redirección o acciones adicionales aquí
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
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
        <button type="submit" className="btn btn-primary mt-2">
          Registrarse
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
