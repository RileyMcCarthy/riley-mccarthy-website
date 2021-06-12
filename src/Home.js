import React, { useEffect } from "react";
import { Jumbotron, Container, Carousel, Button } from "react-bootstrap";
import laptopImage from "./images/laptop.jpg";
import longboardImage from "./images/longboard.jpg";

function Home() {
  useEffect(() => {
    document.title = "Riley McCarthy - Home";
  }, []);

  const carouselImage = {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
  };

  const carouselCaption = {
    top: "30vh",
    bottom: "auto",
  };

  const imageDarkenContainer = {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
    zIndex: "1",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <a href="/about">
          <div className="slideshow-wrapper">
            <img
              className="d-block"
              src={laptopImage}
              alt="About Me"
              style={carouselImage}
            />
          </div>
          <Carousel.Caption style={carouselCaption}>
            <h1
              style={{
                fontSize: 64,
                color: "#e87967",
              }}
              className="float-left"
            >
              Welcome to my website!
            </h1>
            <p style={{ fontSize: 24 }} className="float-left text-left w-50">
              My name is Riley McCarthy, I am a third year Engineering student
              at the University of Guelph.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/about">
          <div className="slideshow-wrapper">
            <img
              className="d-block"
              src={laptopImage}
              alt="About Me"
              style={carouselImage}
            />
          </div>
          <Carousel.Caption style={carouselCaption}>
            <h1
              style={{
                fontSize: 64,
                color: "#e87967",
              }}
              className="float-left"
            >
              Experience and Education
            </h1>
            <p style={{ fontSize: 24 }} className="float-left text-left w-50">
              Working for my degree in Engineering Systems and Computing Co-op I
              have learned about the theory behind engineering and gained real
              world experience in the field.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/about">
          <img
            className="d-block"
            src={laptopImage}
            alt="Third slide"
            style={carouselImage}
          />

          <Carousel.Caption style={carouselCaption}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
export default Home;
