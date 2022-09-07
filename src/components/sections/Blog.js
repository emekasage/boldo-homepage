import React from "react";
import { blogData } from "../slider/blog-data";

const Blog = () => {
  return (
    <section className="pt-12 pb-8 px-4 md:px-16 lg:px-24">
      <div className="mx-auto flex flex-col justify-center text-center max-w-[842px]">
        <p
          className="font-normal text-base md:text-xl"
          style={{ color: "#777777" }}
        >
          Our Blog
        </p>
        <h2 className="text-4xl md:text-6xl text-black font-normal mt-2 mb-4">
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div className="mx-auto md:mx-1 lg:mx-24 my-2 md:my-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-28">
          {blogData.map((blogInfo, index) => {
            return (
              <div className="flex flex-col overflow-hidden flex-1" key={index}>
                <img
                  src={blogInfo.blogImg}
                  alt="service-first"
                  className="max-w-full object-cover"
                />
                <div className="py-6 flex flex-col lg:flex-row items-start lg:items-center space-x-0 lg:space-x-6">
                  <p className="text-[#0A2640] font-bold text-base md:text-2xl">
                    {blogInfo.title}
                  </p>
                  <p className="text-base font-normal text-[#777777]">
                    {blogInfo.date}
                  </p>
                </div>
                <p className="text-xl text-black font-normal mb-8">
                  {blogInfo.description}
                </p>
                <div className="flex flex-row space-x-6">
                  <img
                    src={blogInfo.authorImg}
                    alt="blog-author"
                    className="max-w-full object-cover"
                  />
                  <p className="text-base font-normal text-black flex flex-1">
                    {blogInfo.blogAuthor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-1 justify-center">
          <button className="mt-12 border-2 border-[#0A2640] rounded-[56px] max-w-[250px] py-4 px-14 text-xl font-bold text-[#0A2640]">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
