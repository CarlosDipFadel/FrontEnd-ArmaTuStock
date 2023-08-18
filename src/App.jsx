import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import UserContext from "./context/UserContext";
import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import FooterLayout from "./components/footer/FooterLayout";
import Nosotros from "./components/nosotros/Nosotros";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContext>
        <div className="header"><Header /></div>
        <div className="body"><Routes /></div>
        <div className="nosotros"><Nosotros /></div>
        <div className="footer"><FooterLayout /></div>
      </UserContext>
    </>
  );
}


export default App;
