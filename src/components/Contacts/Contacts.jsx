import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}

        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are always ready to provide you the best of service, We believe a
            good place to live can make your life the best
          </span>

          <div className="flexColStart contactModes">
            {/* the first row */}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>+961 03 147 298</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>+961 03 147 298</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span>+961 03 147 298</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span>+961 03 147 298</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>

          <div className="socialMedia-container"></div>
        </div>

        {/* Right side */}

        <div className="c-right flexColEnd">
          <div className="image-container">
            <img src="./contact.jpg" alt="property image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
