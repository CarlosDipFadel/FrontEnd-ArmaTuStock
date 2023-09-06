import { Route, Routes as Rutas} from "react-router-dom";
import Home from "../pages/home/Home";
import { Container } from "react-bootstrap";
import { Navbar  } from "react-bootstrap";

const Routes = () => {
  return (
    <Navbar >
      <Rutas>
        <Route path="/" element={<Home/>}/>
      </Rutas>
    </Navbar>
  );
};

export default Routes;