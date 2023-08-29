<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./context/UserContext";
import Routes from "./routes/Routes";
import Navbar from "./components/Header/Navbar";
import FooterLayout from "./components/Footer/FooterLayouts";
import Header from "./components/Header/Navbar"


=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/Routes";
import FooterLayout from "./components/footer/FooterLayouts";
import Header from "./components/header/Header";
import UserContext  from "./context/UserContext";
>>>>>>> ca9256383f4fb3921a1aef8564addb22bc600d1f

function App() {
  return (
    <>
      <UserContext>
<<<<<<< HEAD
        <div className="Navbar"><Navbar /></div>
        <div className="body"><Routes /></div>
=======
        <div className="header"> <Header /></div>
        <div className="body"> <Routes/></div>
>>>>>>> ca9256383f4fb3921a1aef8564addb22bc600d1f
        <div className="footer"><FooterLayout /></div>
      </UserContext>
    </>
  );
}

export default App;
