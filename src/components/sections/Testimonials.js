/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../slider/testtimonial-data";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="pt-12 pb-3 md:pt-20 md:pb-12 px-4 md:px-16 lg:px-32 bg-[#0A2640]">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-end">
        <div className="md:max-w-[398px] lg:max-w-[716px]">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-normal">
            An enterprise template to ramp up your company website
          </h2>
        </div>
        <div className="flex flex-row space-x-6">
          <div
            className="bg-white p-2 rounded-[100%] flex justify-center items-center w-[72px] h-[72px] cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <svg
              width="36"
              height="39"
              viewBox="0 0 36 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5 18L7.5 18"
                stroke="#0A2640"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28.5L7.5 18L18 7.5"
                stroke="#0A2640"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="bg-white p-2 rounded-[100%] flex justify-center items-center w-[72px] h-[72px] cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <svg
              width="36"
              height="39"
              viewBox="0 0 36 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 21H28.5"
                stroke="#0A2640"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 10.5L28.5 21L18 31.5"
                stroke="#0A2640"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-14 mx-2 md:mt-14 md:mb-20 md:mx-auto">
        <Slider {...settings} ref={setSliderRef}>
          {testimonialData.map((testimonial, index) => {
            return (
              <div
                className="bg-white max-w-[310px] md:max-w-[308px] lg:max-w-[375px] py-8 px-6 rounded-xl flex justify-center items-center space-y-7"
                style={{ boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.12)" }}
                key={index}
              >
                <h3 className="font-normal text-2xl align-middle">
                  {testimonial.quote}
                </h3>
                <div className="flex flex-row space-x-3 items-center">
                  <div className="w-[58px] h-[58px] object-cover">
                    <img src={testimonial.image} alt="albus-dumbledore" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-base font-bold text-[#0A2640]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-normal text-[#0A2640]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
