import React, { useEffect, useState } from "react";
import { Route, Routes as Rutas} from "react-router-dom";
import Home from "../pages/home/Home";
import { Container } from "react-bootstrap";
import RegisterUser from "../pages/registerCreate/RegisterCreate";
import RegisterTable from "../pages/registerTable/registerTable";
import RegisterEdit from "../pages/registerEdit/registerEdit";



const Routes = () => {
  const [registers,setRegisters] = useState([]);
  
  // consumo de Variable de entorno vitejs

  const URL = import.meta.env.VITE_API_ArmaTuStock;

  
  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const registerApi = await res.json();
      setRegisters(registerApi);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getApi();
  }, []);


  return (
    <Container>
      <Rutas>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser URL={URL} getApi={getApi}/>} />
        <Route path="/registerTable" element={<RegisterTable registers={registers} URL={URL} getApi={getApi}/>} />
        <Route path="/registerEdit/:id" element={<RegisterEdit registers={registers} URL={URL} getApi={getApi} setRegisters={setRegisters} />} />


      </Rutas>
    </Container>
  );
};

export default Routes;