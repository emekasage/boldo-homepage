import React from "react";

const Newsletter = () => {
  return (
    <section className="mx-auto">
      <div className="px-3 py-9 md:px-12 md:py-10 lg:px-32 lg:py-11">
        <div
          className="bg-[#0a2640] bg-no-repeat rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url(../../assets/newletterBackImg.png)",
            backgroundSize: "60%",
            backgroundPositionX: "100%",
          }}
        >
          <div className="max-w-[720px] mx-7 md:mx-20 lg:mx-auto text-center flex-initial my-12">
            <h2 className="text-white text-4xl md:text-6xl font-normal">
              An enterprise template to ramp up your company website
            </h2>
            <div className="mt-12 mb-8 md:mb-16 mx-4 md:mx-auto">
              <form className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-x-5 md:space-y-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border-2 border-white rounded-[240px] py-4 px-6 text-black text-xl placeholder-black w-[310px] md:w-[370px]"
                />
                <button
                  type="submit"
                  className="text-[#0A2640] font-bold text-xl bg-[#65E4A3] border-2 border-[#65E4A3] py-4 md:px-2 lg:px-12 w-[300px] md:w-[210px] rounded-[56px]"
                >
                  Start now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
