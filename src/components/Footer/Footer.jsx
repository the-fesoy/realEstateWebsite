import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Homiez" width={120} />
          <span className="secondaryText">
            Our Vision is to make all people <br /> a place where they can call
            home
          </span>
        </div>

        {/*right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span>Lebanon - Tripoli - Dam El Farz - Al salam hospital</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
