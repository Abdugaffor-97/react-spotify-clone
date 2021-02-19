import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarVertical from "./components/NavBarVertical";
import Home from "./pages/home";
import Album from "./pages/album";
import Footer from "./components/Footer";
import Register from "./pages/register";
import Login from "./pages/login";

const { useState } = require("react");

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <NavbarVertical />

        {/* <Switch> */}
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
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
