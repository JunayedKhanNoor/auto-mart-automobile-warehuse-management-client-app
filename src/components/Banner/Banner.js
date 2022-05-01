import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../Images/Banner1.jpg"
import Banner2 from "../../Images/Banner2.jpg"
import Banner3 from "../../Images/Banner3.jpg"



const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pioneering Luxury with Mercedes-Benz</h3>
          <p>Mercedes-Benz Design: Sensual Purity and Modern Luxury.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Much more than a luxury carmaker</h3>
          <p>Mercedes-Benz is a brand that stands for luxury and exceptional performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Advanced Design Studios around the world the world</h3>
          <p>
          For this reason, four of the five Mercedes-Benz Advanced Design Studios are outside Germany.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
