import { Route, Routes as Rutas } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/home/Home";
import RegistroUsuarios from "../pages/registro/RegisterUsuario"
import { Container } from "react-bootstrap";

const Routes = () => {
  const [registers,setRegisters] = useState([]);
  
  // consumo de Variable de entorno vitejs

  const URL = import.meta.env.VITE_API_ArmaTuStock;

  useEffect(() => {
    getApi();
  }, []);

  
  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const registerApi = await res.json();
      setRegisters(registerApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Rutas>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistroUsuarios URL={URL} getApi={getApi}/>} />
      </Rutas>
    </Container>
  );
};

export default Routes;