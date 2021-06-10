import React, { useEffect } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import laptopImage from "./images/laptop.jpg";

function Home() {
  useEffect(() => {
    document.title = "Riley McCarthy - Home";
  }, []);

  return (
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${laptopImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}
export default Home;
