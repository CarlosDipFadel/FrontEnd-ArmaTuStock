import React, { useEffect, useState } from "react";
import { Route, Routes as Rutas} from "react-router-dom";
import Home from "../pages/home/Home";
import { Container } from "react-bootstrap";
import RegisterUser from "../pages/registerCreate/RegisterCreate";
import RegisterTable from "../pages/registerTable/registerTable";
import RegisterEdit from "../pages/registerEdit/registerEdit";



const Routes = () => {
   // consumo de Variable de entorno vitejs

 

  
  // const getApi = async () => {
  //   try {
  //     const res = await fetch(URL);
  //     const registerApi = await res.json();
  //     setRegisters(registerApi);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  useEffect(() => {
    
  }, []);


  return (
    <Container>
      <Rutas>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/registerTable" element={<RegisterTable />} />
        <Route path="/registerEdit" element={<RegisterEdit  />} />


      </Rutas>
    </Container>
  );
};

export default Routes;