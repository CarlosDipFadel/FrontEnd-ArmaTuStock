import { Route, Routes as Rutas} from "react-router-dom";
import Home from "../pages/home/Home";
import { Container } from "react-bootstrap";

const Routes = () => {
  return (
    <Container>
      <Rutas>
        <Route path="/" element={<Home/>}/>
      </Rutas>
    </Container>
  );
};

export default Routes;