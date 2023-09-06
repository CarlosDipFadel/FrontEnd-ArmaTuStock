import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#116A7B" }}
    >
      <MDBContainer className="p-4"></MDBContainer>
      <p>
        En nuestro compromiso por brindarte la mejor gestión de inventario
        posible, trabajamos incansablemente para mantener un control preciso y
        eficiente de todos tus productos. Creemos que la clave para un negocio
        exitoso radica en la capacidad de conocer y administrar con precisión lo
        que tienes disponible. ¡Confía en nosotros para optimizar tu control de
        stock y ayudarte a alcanzar tus metas empresariales!
      </p>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="/">
          armatustock.com
        </a>
      </div>
    </MDBFooter>
  );
}
