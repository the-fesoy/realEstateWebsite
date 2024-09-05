import React, { useState } from "react";
import "./Information.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
const Information = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*The Left Side*/}

        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="property image" />
          </div>
        </div>

        {/* The Right side */}

        <div className="v-right flexColStart">
          <span className="orangeText">My Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always are ready to provide the best services for you{" "}
            <br /> we believe a good place to live can make your life better
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, index) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default Information;
