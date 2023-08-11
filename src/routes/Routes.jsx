import { Route, Routes as Rutas } from "react-router-dom";
import Home from "../pages/home/Home";
import RegistroUsuarios from "../pages/registro/RegisterUsuario"
import { Container } from "react-bootstrap";

const Routes = () => {
  return (
    <Container>
      <Rutas>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistroUsuarios />} />
      </Rutas>
    </Container>
  );
};

export default Routes;