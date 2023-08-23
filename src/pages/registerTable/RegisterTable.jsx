import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UsuariosContext } from "../../context/UserContext";
import axios from "axios";

const RegisterTable = () => {
  const [formularios, setFormularios] = useState([]);
  const {getUsuarios} = useContext(UsuariosContext)
  const navigate = useNavigate()

  useEffect(() => {
    getUsuarios().then((response)=>{
      setFormularios(response);
    }).catch((error)=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error
      })
    })
  }, []);

  const RedirectViewUpdate = (user) => {
    navigate('/registerEdit', {state: user})
  }
  
  const handleDelete = (user) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_URL}/api/users/delete`,
            {
              data: { id: user._id }, // Send the user ID in the request body
            }
          );
  
          if (response.status === 200) {
            Swal.fire("¡Eliminado!", "El usuario ha sido eliminado.", "success");
            setFormularios((prevFormularios) =>
              prevFormularios.filter((formulario) => formulario._id !== user._id)
            );
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al eliminar el usuario.",
          });
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
          {formularios.map((formulario) => (
            <tr key={formulario._id}>
              <td>{formulario.nombre}</td>
              <td>{formulario.apellido}</td>
              <td>{formulario.email}</td>
              <td>{formulario.telefono}</td>
              <td>{formulario.direccion}</td>
              <td>{formulario.codigoPostal}</td>
              <td>{formulario.userName}</td>
              <td>
                {formulario.roles.map((rol, index) => (
                  <span key={index}>{rol.role}</span>
                ))}
              </td>
              <td>
                {/* <Link
                    to={`/registerEdit/${formulario.id}`}
                    className="btn-orange mx-1 text-decoration-none text-center"
                  >
                    Update
                  </Link> */}
                <ButtonGroup vertical>
                  <Button onClick={()=>{RedirectViewUpdate(formulario)}}>Modificar</Button>
                  <Button variant="danger" onClick={() => handleDelete(formulario)}>Eliminar</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterTable;
