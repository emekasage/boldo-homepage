import React from "react";

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 lg:gap-28">
      <div className="flex flex-col overflow-hidden flex-1">
        <img
          src="../../assets/Service-1.png"
          alt="service-first"
          className="max-w-full object-cover"
        />
        <p className="pt-5 pb-6 text-white font-normal text-xl md:text-2xl">
          Cool feature title
        </p>
        <a
          href="#"
          className="flex flex-row items-center text-white text-base md:text-xl font-bold border-b border-white w-fit pb-2"
        >
          Explore page
          <span className="pl-2">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L19 14L12 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="flex flex-col overflow-hidden flex-1">
        <img
          src="../../assets/Service-2.png"
          alt="service-first"
          className="max-w-full object-cover"
        />
        <p className="pt-5 pb-6 text-white font-normal text-xl md:text-2xl">
          Cool feature title
        </p>
        <a
          href="#"
          className="flex flex-row items-center text-white text-base md:text-xl font-bold border-b border-white w-fit pb-2"
        >
          Explore page
          <span className="pl-2">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L19 14L12 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="flex flex-col overflow-hidden flex-1">
        <img
          src="../../assets/Service-3.png"
          alt="service-first"
          className="max-w-full object-cover"
        />
        <p className="pt-5 pb-6 text-white font-normal text-xl md:text-2xl">
          Cool feature title
        </p>
        <a
          href="#"
          className="flex flex-row items-center text-white text-base md:text-xl font-bold border-b border-white w-fit pb-2"
        >
          Explore page
          <span className="pl-2">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L19 14L12 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ServiceGrid;
