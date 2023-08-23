
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import AppRoutes from './routes/Routes'
import FooterLayout from "./components/Footer/FooterLayouts";
import Header from "./components/Header/Navbar"



function App() {

  return (
    <>
    
    <Routes> 
    <AppRoutes/>  
    <FooterLayout />
    <Header />
     </Routes> 
    
    </>
  );
}

export default App;