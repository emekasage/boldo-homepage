import React, { useState } from "react";

const ServiceFlow = () => {
  const [click, setClick] = useState(false);
  const [thirdClick, setThirdClick] = useState(false);
  const handleClick = (e) => {
    setClick(!click);
    e.preventDefault();
  };
  const handleThirdClick = (e) => {
    if (click === true) {
      setThirdClick(thirdClick);
    }
    e.preventDefault();
  };
  return (
    <div className="mx-4 md:mx-16 lg:mx-48 my-6 md:my-24">
      <div className="flex flex-col md:flex-row justify-between md:items-start lg:items-center max-w-full">
        <div>
          <img
            src="../../assets/Service-4.png"
            alt="service-fourth"
            className="md:max-w-xs lg:max-w-full object-cover"
          />
        </div>
        <div className="flex flex-col md:max-w-xs lg:max-w-lg">
          <h2 className="text-3xl md:text-5xl font-normal text-black">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="flex flex-col space-y-6 my-10">
            <div className="flex flex-row space-x-5 items-center">
              <div>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#0A2640" />
                  <path
                    d="M26 12L15 23L10 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xl text-black font-normal">
                We connect our customers with the best.
              </p>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#0A2640" />
                  <path
                    d="M26 12L15 23L10 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xl text-black font-normal">
                Advisor success customer launch party.
              </p>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#0A2640" />
                  <path
                    d="M26 12L15 23L10 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xl text-black font-normal">
                Business-to-consumer long tail.
              </p>
            </div>
          </div>
          <button
            className="border-2 px-8 py-4 text-white text-center font-bold text-xl md:w-3/5 lg:w-2/5"
            style={{ borderRadius: "56px", background: "#0A2640" }}
          >
            Start now
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between md:items-start lg:items-center max-w-full mt-10 md:mt-20 mb-8">
        <div>
          <img
            src="../../assets/Service-5.png"
            alt="service-five"
            className="md:max-w-xs lg:max-w-full object-cover"
          />
        </div>
        <div className="flex flex-col md:max-w-xs lg:max-w-lg">
          <h2 className="text-3xl md:text-5xl font-normal text-black">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="flex flex-col space-y-6 my-10">
            <a
              className={
                click
                  ? "flex flex-row space-x-5 items-center bg-white px-6 py-4 cursor-pointer"
                  : "flex flex-row space-x-5 items-center bg-[#0A2640] px-6 py-4 cursor-pointer"
              }
              style={{
                boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              }}
              href="#click-1"
              onClick={() => handleClick()}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
                    stroke={click ? "#0A2640" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8L2 22"
                    stroke={click ? "#0A2640" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 15H9"
                    stroke={click ? "#0A2640" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={
                  click
                    ? "text-base text-black font-semibold"
                    : "text-base text-white font-semibold"
                }
              >
                We connect our customers with the best.
              </p>
            </a>
            <a
              className={
                click
                  ? "flex flex-row space-x-5 items-center bg-[#0A2640] px-6 py-4 cursor-pointer"
                  : "flex flex-row space-x-5 items-center bg-white px-6 py-4 cursor-pointer"
              }
              style={{
                boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              }}
              href="#click-2"
              onClick={() => handleClick()}
            >
              <div>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_604_1519)">
                    <path
                      d="M1.7749 12.6543C1.7749 12.6543 5.7749 4.6543 12.7749 4.6543C19.7749 4.6543 23.7749 12.6543 23.7749 12.6543C23.7749 12.6543 19.7749 20.6543 12.7749 20.6543C5.7749 20.6543 1.7749 12.6543 1.7749 12.6543Z"
                      stroke={click ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7749 15.6543C14.4318 15.6543 15.7749 14.3112 15.7749 12.6543C15.7749 10.9974 14.4318 9.6543 12.7749 9.6543C11.118 9.6543 9.7749 10.9974 9.7749 12.6543C9.7749 14.3112 11.118 15.6543 12.7749 15.6543Z"
                      stroke={click ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_604_1519">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.774902 0.654297)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p
                className={
                  click
                    ? "text-base text-white font-semibold"
                    : "text-base text-black font-semibold"
                }
              >
                Advisor success customer launch party.
              </p>
            </a>
            <a
              className={
                thirdClick
                  ? "flex flex-row space-x-5 items-center bg-[#0A2640] px-6 py-4 cursor-pointer"
                  : "flex flex-row space-x-5 items-center bg-white px-6 py-4 cursor-pointer"
              }
              style={{
                boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.08)",
                borderRadius: "4px",
              }}
              href="#click-3"
              onClick={() => handleThirdClick()}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_604_1525)">
                    <path
                      d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 1V3"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21V23"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21997 4.21997L5.63997 5.63997"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3601 18.3601L19.7801 19.7801"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 12H3"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12H23"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.21997 19.7801L5.63997 18.3601"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3601 5.63997L19.7801 4.21997"
                      stroke={thirdClick ? "#ffffff" : "#0A2640"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_604_1525">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p
                className={
                  thirdClick
                    ? "text-base text-white font-semibold"
                    : "text-base text-black font-semibold"
                }
              >
                Business-to-consumer long tail.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFlow;
