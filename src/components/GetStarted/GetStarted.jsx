import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="g-container paddings innerWidth">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get Started With Homiez</span>
          <span className="secondaryText">Subscribe to our services and we shall grant you the best in everything <br/>
          As one would say if you want to be comfortable you should be feeling like home </span>
          <button className="button">
            <a href="mailto:yusufmalok77@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
