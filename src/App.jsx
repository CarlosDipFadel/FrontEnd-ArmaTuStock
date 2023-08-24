import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/Routes";
import FooterLayout from "./components/footer/FooterLayouts";
import Header from "./components/header/Header";
import UserContext  from "./context/UserContext";

function App() {
  return (
    <>
      <UserContext>
        <div className="header"> <Header /></div>
        <div className="body"> <Routes/></div>
        <div className="footer"><FooterLayout /></div>
      </UserContext>
    </>
  );
}

export default App;
