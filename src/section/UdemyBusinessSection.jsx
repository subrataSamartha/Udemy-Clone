import React from "react";

const UdemyBusinessSection = () => {
  return (
    <div className="w-full md:max-w-[896px] flex flex-col-reverse md:flex-row justify-between items-center mx-auto gap-12 p-6 py-6 md:py-16">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <img src="./images/companies/logo-ub.svg" alt="" className="w-48" />
        <h2 className="text-center md:text-left text-4xl font-bold">
          Upskill your team with Udemy Business
        </h2>
        <ul className="flex flex-col gap-2 pl-2">
          <li className="flex justify-start items-start gap-4 text-xl">
            <div className="w-3 h-2 bg-black rounded-full mt-3"></div>
            Unlimited access to 17,000+ top Udemy courses, anytime, anywhere
          </li>
          <li className="flex justify-start items-start gap-4 text-xl">
            <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
            International course collection in 14 languages
          </li>
          <li className="flex justify-start items-center gap-4 text-xl">
            <div className="w-2 h-2 bg-black rounded-full"></div>Top
            certifications in tech and business
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
            Get Udemy Business
          </button>
          <button className="px-5 h-10 border border-solid border-black font-bold text-sm">
            Learn more
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="./images/companies/udemy-business.jpg"
          alt=""
          className="w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default UdemyBusinessSection;
