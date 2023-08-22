import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import UserContext from "./context/UserContext";
import Navbar from "./components/Header/Navbar";
import FooterLayout from "./components/Footer/FooterLayouts";
import Pages from "./routes/Routes"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContext>
        <div className="Navbar"><Navbar /></div>
        <div className="Pages"><Routes /></div>
        <div className="footer"><FooterLayout /></div>
      </UserContext>
    </>
  );
}

export default App;