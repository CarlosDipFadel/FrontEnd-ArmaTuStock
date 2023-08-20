import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./context/UserContext";
import Routes from "./routes/Routes";
import Navbar from "./components/Header/Navbar";
import FooterLayout from "./components/Footer/FooterLayouts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContext>
        <div className="Navbar"><Navbar /></div>
        <div className="body"><Routes /></div>
        <div className="footer"><FooterLayout /></div>
      </UserContext>
    </>
  );
}

export default App;