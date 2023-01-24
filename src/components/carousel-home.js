import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// react bootstrap carousel - https://react-bootstrap.github.io/components/carousel/
// uses bootstraps built in carousel - loads images via src
    
function UncontrolledExample() {
    const [index, setIndex] = useState(0);
  // handles controls
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
// carousel items 
  return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/Doritos_Roulette.png"
          alt="Doritos Roulette"
        />
        <Carousel.Caption>
          <h3>Buy Now!</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/1280x720_16_9.webp"
          alt="Flamin Hot"
        />

        <Carousel.Caption>
          <h3>Sign Up Now</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/Doritos-Cheetos-FH_Desktop_0.webp"
          alt="Unleash your Flamin Hot!"
        />

        <Carousel.Caption>
          <h3>See Products</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;