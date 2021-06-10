import logo from "./logo.svg";
import brand from "./images/LogoLong.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home.js";
import About from "./About.js";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <img
            src={brand}
            height="50"
            //width="30"
            className="float-left d-inline-block align-middle"
            alt="RM"
          />
        </Navbar.Brand>
        <Nav className="ml-auto pl-5">
          <Nav.Link href="/profession" className="font-weight-bold mr-3">
            <h3>Profession</h3>
          </Nav.Link>
          <Nav.Link href="/about" className="font-weight-bold mr-3">
            <h3>About Me</h3>
          </Nav.Link>
          <Nav.Link href="/projects" className="font-weight-bold mr-3">
            <h3>Projects</h3>
          </Nav.Link>
          <Nav.Link href="/social" className="font-weight-bold mr-3">
            <h3>Social Media</h3>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
