import React from "react";

const InstructorSection = () => {
  return (
    <div className="w-full md:max-w-[896px] flex flex-col-reverse md:flex-row-reverse justify-between items-center mx-auto gap-12 px-6 py-6 pb-16 md:pb-32 md:py-16">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-center md:text-left text-4xl font-bold">
          Become an instructor
        </h2>
        <p className="text-center md:text-left text-xl">
          Instructors from around the world teach millions of students on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button className="md:w-max px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
          Start teaching today
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="./images/companies/instructor.jpg"
          alt=""
          className="h-[300px] md:h-[400px] mx-auto"
        />
      </div>
    </div>
  );
};

export default InstructorSection;
