import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterTable = () => {
  const [formularios, setFormularios] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/users/getUser`) // Ajusta la URL según tu API
      .then((response) => {
        setFormularios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de formularios:", error);
      });
  }, []);
  // Eliminar usuario
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Delete",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const res = await fetch(`${URL}/${id}`, {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         if (res.status === 200) {
  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //           getApi();
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   });
  // };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo electrónico</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Código Postal</th>
            <th>Nombre de Usuario</th>
            <th>Rol de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {formularios.map((formulario) => (
            <tr key={formulario.id}>
              <td>{formulario.nombre}</td>
              <td>{formulario.apellido}</td>
              <td>{formulario.email}</td>
              <td>{formulario.telefono}</td>
              <td>{formulario.direccion}</td>
              <td>{formulario.codigoPostal}</td>
              <td>{formulario.userName}</td>
              <td>
                {formulario.roles.map((rol) => (
                  <span key={rol._id}>{rol.role}</span>
                ))}
              </td>
              <td>
                <div className="btn-group btn-group-sm">
                  <Link
                    to={`/registerEdit/${formulario.id}`}
                    className="btn-orange mx-1 text-decoration-none text-center"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    // onClick={() => handleDelete(user.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterTable;
