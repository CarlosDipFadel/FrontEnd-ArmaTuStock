import { useState, useEffect } from "react";
import RegistroUsuario from "./components/RegistroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  

  return (
    <main>
      <BrowserRouter>
        <div>
          <Routes>
            {/* Rutas */}
            <Route exact path="/" element={<div>hola mundo</div>} />
            <Route exact path="/registro" element={<RegistroUsuario />} />

            
          
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
