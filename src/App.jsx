import { useContext, useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import UserContext from "./context/UserContext";
import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import FooterLayout from "./components/footer/FooterLayout";
import Login from "./pages/login/Login";

function App() {
  const [userValidation, setUserValidation] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserValidation(user!=null)
  }, [])

  return (
    <>
      <UserContext>
        {userValidation ? <>
          <div className="header"><Header /></div>
          <div className="body"><Routes /></div>
          <div className="footer"><FooterLayout /></div>
        </> 
        :<Login setUserValidation={setUserValidation}/>}
      </UserContext>
    </>
  );
}

export default App;