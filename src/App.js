import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarVertical from "./components/NavBarVertical";
import Home from "./pages/home";
import Album from "./pages/album";
import Footer from "./components/Footer";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <NavbarVertical />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/album/:id/" exact render={() => <Album />} />
          <Route component={Footer} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
