import React, { useState } from "react";
import { logoData } from "./logo-data";

const LogoSlider = () => {
  const [currentIndex] = useState(0);
  //   const autoScroll = false;
  //   let slideInterval;
  //   let intervalTime = 1000;

  return (
    <div>
      {/* <div style={{background: `url(${logoData[currentIndex].image})`}}></div> */}
      <div className="h-full relative">
        <img
          src={`${logoData[currentIndex].image}`}
          alt="logos"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LogoSlider;
