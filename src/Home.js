import React, { useEffect } from "react";
import { Jumbotron, Container, Carousel } from "react-bootstrap";
import laptopImage from "./images/laptop.jpg";
import longboardImage from "./images/longboard.jpg";

function Home() {
  useEffect(() => {
    document.title = "Riley McCarthy - Home";
  }, []);

  const carouselImage = {
    width: "100%",
    height: "100vh",
    background: { laptopImage } + " no-repeat center",
    // backgroundSize: "contain",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className=""
          src={laptopImage}
          alt="First slide"
          class="img-fluid"
          alt="Responsive image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={longboardImage}
          alt="Second slide"
          style={carouselImage}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={laptopImage}
          alt="Third slide"
          style={carouselImage}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home;
