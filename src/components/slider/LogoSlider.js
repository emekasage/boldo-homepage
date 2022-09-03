import React from "react";
import { logoData } from "./logo-data";

const LogoSlider = () => {
  // eslint-disable-next-line no-unused-vars
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const slideLength = logoData.length;

  //   const autoScroll = true;
  //   let intervalTime = 1000;

  //   const nextLogo = () => {
  //     setCurrentIndex(currentIndex === slideLength - 1 ? 0 : currentIndex + 1);
  //   };

  return (
    <div>
      <div className="relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        {logoData.map((logos, index) => {
          return (
            <div key={index} className="relative w-36 h-10 snap-start">
              <img src={logos.image} alt="logos" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoSlider;
