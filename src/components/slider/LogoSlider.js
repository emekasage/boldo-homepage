import React from "react";
import { logoData } from "./logo-data";

const LogoSlider = () => {
  return (
    <div className="ml-4 mr-6 mt-9 md:ml-20 md:mr-28 md:mt-12 overflow-hidden">
      <div className="marquee-wrapper scroll-smooth">
        {Array.from(Array(2), (e, i) => {
          return (
            <div className="marquee gap-2 md:gap-4  lg:gap-7" key={i}>
              {logoData.map((slide, index) => {
                return (
                  <div key={index} className="carousel">
                    <img src={slide.image} alt="slide" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoSlider;
