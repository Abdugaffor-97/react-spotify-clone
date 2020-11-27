import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarVertical from "./components/NavBarVertical";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <NavbarVertical />
      </BrowserRouter>
    </div>
  );
}

export default App;
