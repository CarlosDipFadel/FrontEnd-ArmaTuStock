// import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Header/Navbar";
import AppRoutes from "./routes/Routes";
import FooterLayout from "./components/Footer/FooterLayouts";

function App() {

  return (
    <>
    
    {/* <Router> */}
    <Navbar/>
    <AppRoutes/>  
    <FooterLayout/>
    {/* </Router> */}
    
    </>
  );
}

export default App;