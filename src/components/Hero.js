import React from "react";
import Gallery from '../images/gallery.png'

const Hero = () => {
  return (
      <main>
          <div className="hero--image">
              <img src={Gallery} className="hero--img" alt="hero--image"/>
          </div>
    <div className="hero--section">
      <h1 className="hero--heading">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
      </main>
  );
};

export default Hero;