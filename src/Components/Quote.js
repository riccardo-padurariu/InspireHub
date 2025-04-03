import React from "react";
import '../Styles/Quote.css';

export default function Quote() {
  return (
    <div className="quote-main-div">
      <div className="quote-container">
        <p className="quote-title">Today's quote</p>
        <p className="quote-description">"You are never too old to set another goal or to dream a new dream." — Malala Yousafzai</p>
      </div>
      <div className="more-quotes-container">
        <p className="more-quotes-title">Want more inspiration?</p>
        <p className="more-quotes-description">Click below to explore a collection of powerful motivational quotes!</p>
        <button className="more-quotes-button">See More Quotes</button>
      </div>
    </div>
  );
}