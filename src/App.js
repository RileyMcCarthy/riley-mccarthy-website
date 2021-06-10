import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home.js";
import About from "./About.js";

function App() {
  return (
    <Router>
      <Navbar scrolling dark expand="md" variant="light" fixed="top">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/profession">Profession</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/social">Social Media</Nav.Link>
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
