import { Route, Routes as Rutas} from "react-router-dom";
import Home from "../pages/home/Home";
import { Container } from "react-bootstrap";
import { Footer } from "react-bootstrap/lib/Modal";

const Routes = () => {
  return (
    <Footer>
      <Rutas>
        <Route path="/" element={<Home/>}/>
      </Rutas>
    </Footer>
  );
};

export default Routes;