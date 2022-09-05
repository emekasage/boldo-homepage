import React from "react";
import ServiceFlow from "../service/ServiceFlow";
import ServiceGrid from "../service/ServiceGrid";

const Services = () => {
  return (
    <section>
      <div
        className="pt-20 pb-12 px-4 md:px-16 lg:px-24"
        style={{ backgroundColor: "#0A2640" }}
      >
        <div
          className="mx-auto flex flex-col justify-center text-center text-white"
          style={{ maxWidth: "842px" }}
        >
          <p
            className="font-normal text-base md:text-xl"
            style={{ color: "#F1F1F1" }}
          >
            Our Services
          </p>
          <h2 className="text-4xl md:text-6xl font-normal mt-2 mb-4">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
        <div className="mx-auto md:mx-2 lg:mx-24 my-2 md:my-14">
          <ServiceGrid />
        </div>
      </div>
      <ServiceFlow />
    </section>
  );
};

export default Services;
