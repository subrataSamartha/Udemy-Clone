import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiOutlineSearch } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="max-w-[1340px] mx-auto">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="./slide.jpg" alt="" className="w-full hidden md:block" />
          <img
            src="./hero-1-mobile.jpg"
            alt=""
            className="h-64 w-full md:hidden"
          />
          <div>
            <div className="w-full md:w-[460px] p-5 bg-white md:absolute left-16 top-16 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold">
                Unlock the power of your people
              </h2>
              <p className="text-xl md:text-md mt-3 md:mt-4 leading-6 ">
                Udemy Business is trusted by 12.5K+ companies around the world.
                <a
                  href="https://business.udemy.com/request-demo-mx/?ref=ub-hero-banner&locale=en_US"
                  className="underline text-blue-800"
                >
                  Find out what we can do for yours
                </a>
                .
              </p>
              <div className="md:hidden flex flex-row-reverse justify-start items-center gap-4 grow border border-solid border-gray-500 p-2 h-13 mt-4 ">
                <button>
                  <AiOutlineSearch className="text-2xl text-gray-500" />
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search for anything"
                  className="text-sm w-full focus:outline-none leading-8 "
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="slide-2.jpg" alt="" className="w-full hidden md:block " />
            <img
              src="hero-2-mobile.jpg"
              alt=""
              className="h-64 w-full md:hidden"
            />
            <div className="w-full md:w-[460px] p-5 bg-white md:absolute left-16 top-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Learning that gets you
              </h2>
              <p className="text-xl md:text-md mt-3 md:mt-4 leading-6">
                Skills for your present (and your future). Get started with us.
              </p>
              <div className="md:hidden flex flex-row-reverse justify-start items-center gap-4 grow border border-solid border-gray-500 p-2 h-13 mt-4 ">
                <button>
                  <AiOutlineSearch className="text-2xl text-gray-500" />
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search for anything"
                  className="text-sm w-full focus:outline-none leading-8 "
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HeroSection;
