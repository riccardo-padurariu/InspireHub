import React from "react";
import '../Styles/Carousel.css';
import dot from '../Assets/Ellipse 12.png';
import arrow from '../Assets/line-md_arrow-down.png';

export default function Carousel() {
  return (
    <div className="carousel-main-container">
      <div className="carousel-container">
        <p className="title-car">Today's Quote</p>
        <p className="quote">"You are never too old to set another goal or to dream a new dream." — Malala Yousafzai</p>
        <div className="control-buttons">
          <button className="control-button-right">
            <img className="arrow" src={arrow}></img>
          </button>
          <div className="dots">
              <img className="dot" src={dot}></img>
              <img className="dot" src={dot}></img>
              <img className="dot" src={dot}></img>
              <img className="dot" src={dot}></img>
              <img className="dot" src={dot}></img>
              <img className="dot" src={dot}></img>
          </div>
          <button className="control-button-left">
            <img className="arrow-left" src={arrow}></img>
          </button>
        </div>
      </div>
    </div>
  );
}