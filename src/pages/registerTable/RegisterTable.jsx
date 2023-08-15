import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const RegisterTable = ({}) => {
  // Eliminar usuario
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

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
          {register((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.postalCode}</td>
              <td>{user.userName}</td>
              <td>{user.role}</td>
              <td>
                <div className="btn-group btn-group-sm">
                  <Link
                    to={`/registerEdit/${user.id}`}
                    className="btn-orange mx-1 text-decoration-none text-center"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => handleDelete(user.id)}
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
