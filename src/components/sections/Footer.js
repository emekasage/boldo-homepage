import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent top-0 z-10 overflow-hidden">
      <div className="container mx-auto my-12 py-5 px-8 md:px-10 lg:px-20 flex flex-col md:flex-row gap-8 md:gap-0 lg:gap-60 items-start">
        <div className="block max-w-xs">
          <div>
            <svg
              width="163"
              height="42"
              viewBox="0 0 163 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.2025 38V6.86H52.5504C54.6553 6.86 56.378 7.28529 57.7188 8.13587C59.074 8.97204 60.0759 10.0461 60.7247 11.358C61.3878 12.6699 61.7194 14.0251 61.7194 15.4235C61.7194 17.1391 61.3086 18.5952 60.4868 19.7917C59.6795 20.9883 58.5766 21.7957 57.1782 22.2137V21.1325C59.1388 21.5794 60.6238 22.5093 61.6329 23.9221C62.6565 25.335 63.1683 26.9424 63.1683 28.7445C63.1683 30.5898 62.8151 32.2045 62.1087 33.5885C61.4023 34.9725 60.3498 36.0537 58.9514 36.8322C57.5674 37.6107 55.8518 38 53.8047 38H40.2025ZM45.479 33.0911H53.1559C54.0642 33.0911 54.8787 32.9109 55.5996 32.5505C56.3204 32.1757 56.8826 31.6567 57.2863 30.9935C57.7044 30.3159 57.9134 29.5158 57.9134 28.5931C57.9134 27.757 57.7332 27.0073 57.3728 26.3441C57.0124 25.681 56.4862 25.1547 55.7942 24.7655C55.1022 24.3618 54.2732 24.16 53.3073 24.16H45.479V33.0911ZM45.479 19.2944H52.4855C53.2352 19.2944 53.9056 19.1502 54.4967 18.8619C55.0878 18.5735 55.5563 18.1482 55.9023 17.586C56.2483 17.0237 56.4213 16.3317 56.4213 15.51C56.4213 14.4287 56.0753 13.5277 55.3833 12.8069C54.6913 12.086 53.7254 11.7256 52.4855 11.7256H45.479V19.2944ZM77.8023 38.6488C75.4668 38.6488 73.4269 38.1225 71.6825 37.0701C69.9381 36.0177 68.5829 34.5688 67.617 32.7235C66.6655 30.8637 66.1897 28.7301 66.1897 26.3225C66.1897 23.8717 66.6799 21.7236 67.6602 19.8782C68.6406 18.0329 70.0029 16.5912 71.7473 15.5532C73.4918 14.5152 75.5101 13.9962 77.8023 13.9962C80.1523 13.9962 82.1994 14.5225 83.9438 15.5749C85.6883 16.6273 87.0434 18.0834 88.0093 19.9431C88.9753 21.7885 89.4582 23.9149 89.4582 26.3225C89.4582 28.7445 88.9681 30.8854 87.9877 32.7451C87.0218 34.5905 85.6666 36.0393 83.9222 37.0917C82.1778 38.1297 80.1378 38.6488 77.8023 38.6488ZM77.8023 33.7615C79.8783 33.7615 81.4209 33.0695 82.4301 31.6855C83.4393 30.3015 83.9438 28.5138 83.9438 26.3225C83.9438 24.0591 83.4321 22.257 82.4085 20.9162C81.3849 19.5611 79.8495 18.8835 77.8023 18.8835C76.4039 18.8835 75.2506 19.2007 74.3423 19.835C73.4485 20.4549 72.7853 21.3271 72.3528 22.4516C71.9203 23.5617 71.7041 24.852 71.7041 26.3225C71.7041 28.5859 72.2159 30.3952 73.2395 31.7504C74.2775 33.0911 75.7984 33.7615 77.8023 33.7615ZM94.6553 38V6.21125H99.8669V38H94.6553ZM115.708 38.6488C113.56 38.6488 111.686 38.1081 110.086 37.0269C108.486 35.9456 107.246 34.4751 106.366 32.6154C105.487 30.7556 105.047 28.658 105.047 26.3225C105.047 23.9582 105.487 21.8533 106.366 20.008C107.26 18.1482 108.522 16.685 110.151 15.6181C111.78 14.5369 113.697 13.9962 115.903 13.9962C118.123 13.9962 119.983 14.5369 121.482 15.6181C122.996 16.685 124.142 18.1482 124.921 20.008C125.699 21.8677 126.088 23.9726 126.088 26.3225C126.088 28.6436 125.699 30.7412 124.921 32.6154C124.142 34.4751 122.981 35.9456 121.439 37.0269C119.896 38.1081 117.986 38.6488 115.708 38.6488ZM116.508 33.9777C117.907 33.9777 119.031 33.6606 119.882 33.0262C120.747 32.3775 121.374 31.4765 121.763 30.3231C122.167 29.1698 122.369 27.8362 122.369 26.3225C122.369 24.7943 122.167 23.4608 121.763 22.3219C121.374 21.1685 120.761 20.2747 119.925 19.6404C119.089 18.9916 118.008 18.6672 116.681 18.6672C115.283 18.6672 114.13 19.0132 113.221 19.7052C112.313 20.3828 111.643 21.3055 111.21 22.4732C110.778 23.6266 110.562 24.9097 110.562 26.3225C110.562 27.7497 110.771 29.0472 111.189 30.215C111.621 31.3683 112.277 32.2838 113.157 32.9614C114.036 33.639 115.153 33.9777 116.508 33.9777ZM122.369 38V21.6082H121.72V6.86H126.975V38H122.369ZM143.353 38.6488C141.018 38.6488 138.978 38.1225 137.233 37.0701C135.489 36.0177 134.134 34.5688 133.168 32.7235C132.216 30.8637 131.74 28.7301 131.74 26.3225C131.74 23.8717 132.231 21.7236 133.211 19.8782C134.191 18.0329 135.554 16.5912 137.298 15.5532C139.043 14.5152 141.061 13.9962 143.353 13.9962C145.703 13.9962 147.75 14.5225 149.495 15.5749C151.239 16.6273 152.594 18.0834 153.56 19.9431C154.526 21.7885 155.009 23.9149 155.009 26.3225C155.009 28.7445 154.519 30.8854 153.538 32.7451C152.573 34.5905 151.217 36.0393 149.473 37.0917C147.729 38.1297 145.689 38.6488 143.353 38.6488ZM143.353 33.7615C145.429 33.7615 146.972 33.0695 147.981 31.6855C148.99 30.3015 149.495 28.5138 149.495 26.3225C149.495 24.0591 148.983 22.257 147.959 20.9162C146.936 19.5611 145.4 18.8835 143.353 18.8835C141.955 18.8835 140.801 19.2007 139.893 19.835C138.999 20.4549 138.336 21.3271 137.904 22.4516C137.471 23.5617 137.255 24.852 137.255 26.3225C137.255 28.5859 137.767 30.3952 138.79 31.7504C139.828 33.0911 141.349 33.7615 143.353 33.7615Z"
                fill="#0A2640"
              />
              <path
                d="M0 21H17.0678C21.9511 21 25.9099 24.9588 25.9099 29.8421C25.9099 34.7255 21.9511 38.6842 17.0678 38.6842H0V21Z"
                fill="#0A2640"
              />
              <path
                d="M0 5.52634H11.3927C15.0552 5.52634 18.0243 8.4954 18.0243 12.1579C18.0243 15.8204 15.0552 18.7895 11.3927 18.7895H0V5.52634Z"
                fill="#0A2640"
              />
            </svg>
          </div>
          <p
            className="font-normal text-base leading-7 mt-9 mb-12 md:w-56 lg:w-80"
            style={{ color: "#777" }}
          >
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p
            className="font-normal text-base leading-7"
            style={{ color: "#777", width: "300px" }}
          >
            All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:-ml-10 md:gap-24 lg:ml-10 lg:gap-44">
          <div className="block">
            <h3 className="font-bold text-xl text-black">Landings</h3>
            <div
              className="mt-6 md:mt-12 space-y-8 font-normal text-xl"
              style={{ color: "#777" }}
            >
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">Products</p>
              <p className="cursor-pointer">Services</p>
            </div>
          </div>
          <div className="block">
            <h3 className="font-bold text-xl text-black">Company</h3>
            <div
              className="mt-6 md:mt-12 space-y-8 font-normal text-xl"
              style={{ color: "#777" }}
            >
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer relative">
                Careers
                <span
                  className="top-0 ml-3 md:top-7 md:-ml-16 lg:top-0 lg:ml-3 px-4 py-1.5 font-bold absolute"
                  style={{
                    backgroundColor: "#65E4A3",
                    color: "#0A2640",
                    fontSize: "13px",
                    borderRadius: "120px",
                  }}
                >
                  Hiring!
                </span>
              </p>
              <p className="cursor-pointer pt-0 md:pt-4 lg:pt-0">Services</p>
            </div>
          </div>
          <div className="block">
            <h3 className="font-bold text-xl text-black">Resources</h3>
            <div
              className="mt-6 md:mt-12 space-y-8 font-normal text-xl"
              style={{ color: "#777" }}
            >
              <p className="cursor-pointer">Blog</p>
              <p className="cursor-pointer">Products</p>
              <p className="cursor-pointer">Services</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
