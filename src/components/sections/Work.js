import React, { useState } from "react";

const Work = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  return (
    <section className="mx-auto">
      <div className="px-3 py-9 md:px-12 md:py-14 lg:px-32 lg:py-24">
        <div className="mb-14 rounded-2xl overflow-hidden">
          <img
            src="../../assets/workImg.png"
            alt="work-img"
            className="max-w-full w-full h-full object-cover align-middle inline-block"
          />
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between items-start">
          <div className="md:max-w-xs lg:max-w-[500px]">
            <h2 className="font-normal text-3xl md:text-5xl text-black">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
          </div>
          <div className="flex flex-col space-y-4 max-w-full md:max-w-xs lg:max-w-full">
            <div className="border-b border-[#c4c4c4] pb-4 cursor-pointer">
              <div
                className="flex flex-row space-x-3 md:space-x-8 lg:space-x-40 transition duration-700 delay-500 ease-in-out"
                onClick={() => setIsActive(!isActive)}
              >
                <p className="font-normal text-base md:text-xl text-black flex-1">
                  We connect our customers with the best?
                </p>
                <div
                  className={
                    isActive
                      ? "transform rotate-180 transition-all duration-500 ease-in-out origin-center"
                      : ""
                  }
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#0A2640" />
                    <path
                      d="M8 12L14 18L20 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {isActive && (
                <>
                  <p className="text-sm font-normal w-[500px] pt-4">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                </>
              )}
            </div>
            <div className="border-b border-[#c4c4c4] pb-4 cursor-pointer">
              <div
                className="flex flex-row space-x-3 md:space-x-8 lg:space-x-40 transition"
                onClick={() => setIsActiveTwo(!isActiveTwo)}
              >
                <p className="font-normal text-base md:text-xl text-black flex-1">
                  We connect our customers with the best?
                </p>
                <div
                  className={
                    isActiveTwo
                      ? "transform rotate-180 transition-all duration-500 ease-in-out origin-center"
                      : ""
                  }
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="14" cy="14" r="14" fill="#0A2640" />
                    <path
                      d="M8 12L14 18L20 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {isActiveTwo && (
                <>
                  <p className="text-sm font-normal w-[500px] pt-4">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
