import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarVertical from "./components/NavBarVertical";
import Home from "./components/Home";
import Album from "./components/Ablum";
import Footer from "./components/Footer";
import Register from "./pages/register";
const { useState } = require("react");

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <NavbarVertical />
        <Route
          path="/"
          exact
          render={() => <Home setCurrentTrack={setCurrentTrack} />}
        />
        <Route
          path="/album/:id/"
          exact
          render={() => <Album setCurrentTrack={setCurrentTrack} />}
        />
        <Footer currentTrack={currentTrack} />

        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
