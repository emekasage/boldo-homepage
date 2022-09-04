import React from "react";
import Navbar from "../navbar/Navbar";
import { logoData } from "../slider/logo-data";

const Hero = () => {
  return (
    <section className="bg-white relative">
      <div
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(../../assets/backgroundImg.png)",
          backgroundPositionX: "610px",
          backgroundPositionY: "-580px",
        }}
      >
        <Navbar />
        <div className="container mx-auto my-4 py-5 px-8 md:px-10 lg:px-20 block lg:flex justify-between items-center">
          <div className="flex flex-col" style={{ maxWidth: "601px" }}>
            <h1
              className="font-normal text-5xl text-black"
              style={{ lineHeight: "72px" }}
            >
              Save time by building fast with Boldo Template
            </h1>
            <p
              className="font-normal text-base leading-7 mt-5 mb-10"
              style={{ color: "#777" }}
            >
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex items-center flex-col md:flex-row space-y-4 space-x-0 md:space-x-4 md:space-y-0">
              <button
                className="border-2 font-bold text-xl text-white text-center px-16 py-4"
                style={{
                  borderColor: "#0A2640",
                  backgroundColor: "#0A2640",
                  borderRadius: "56px",
                }}
              >
                Buy template
              </button>
              <button
                className="border-2 bg-white font-bold text-xl text-center px-20 md:px-12 py-4"
                style={{
                  borderColor: "#0A2640",
                  color: "#0A2640",
                  borderRadius: "56px",
                }}
              >
                Explore
              </button>
            </div>
          </div>
          <div className="max-w-sm md:max-w-lg mt-8 lg:mt-0 mx-auto lg:mx-8">
            <img
              src="../../assets/hero-graphics.png"
              alt="hero-graphics"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="container max-w-max my-12 mx-auto">
          <div className="relative flex gap-14 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
            {logoData.map((logos, index) => {
              return (
                <div key={index} className="relative w-36 h-10">
                  <img src={logos.image} alt="logos" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
