import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroCarousel.css";
import c1 from "./components/Logos/1.png";
import c2 from "./components/Logos/2.png";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      image: "https://t3.ftcdn.net/jpg/03/01/80/20/360_F_301802058_rlkPe4NJ32bEjX5TM9n4HpDnrqQqtaYa.jpg",
      heading: "Empower Through Giving",
      text: "Join NeedNest to help those in need with your generosity.",
    },
    {
      image: c1,
      heading: "Your Kindness Matters",
      text: "Be the reason someone smiles today.",
    },
    {
      image: c2,
      heading: "Make a Real Impact",
      text: "Donate essentials like food, clothes, and books directly.",
    },
  ];

  return (
    <div className="hero-carousel">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        transitionTime={800}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.heading} />
            <div className="overlay">
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
              <Link className="btn donate-btn" to="/donate">
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
