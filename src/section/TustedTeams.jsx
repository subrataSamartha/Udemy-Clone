import React from "react";

const TustedTeams = () => {
  return (
    <section>
      <div className="max-w-[1340px] mx-auto px-6 py-16 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-center">
          Trusted by over 12,500 great teams
        </h2>
        <p className="text-center">
          Leading companies use the same courses to help employees keep their
          skills fresh
        </p>
        <div className="flex justify-between items-center mt-2">
          <img src="./images/companies/nasdaq-dark.svg" alt="" srcset="" />
          <img src="./images/companies/volkswagen-dark.svg" alt="" srcset="" />
          <img src="./images/companies/box-dark.svg" alt="" srcset="" />
          <img src="./images/companies/netapp-dark.svg" alt="" srcset="" />
          <img src="./images/companies/eventbrite-dark.svg" alt="" srcset="" />
          <img src="./images/companies/tcs-dark.svg" alt="" srcset="" />
        </div>
      </div>

      {/*  udemy bussiness */}
      <div className="my-16 max-w-[896px] max-h-[400px] flex justify-between items-center mx-auto py-16 gap-12">
        <div className="w-1/2 flex flex-col gap-4">
          <img src="./images/companies/logo-ub.svg" alt="" className="w-48" />
          <h2 className="text-4xl font-bold">
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
          <div className="flex gap-4">
            <button className="px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
              Get Udemy Business
            </button>
            <button className="px-5 h-10 border border-solid border-black font-bold text-sm">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="./images/companies/udemy-business.jpg"
            alt=""
            className="h-[400px]"
          />
        </div>
      </div>
      {/*  instructor */}
      <div className="my-16 max-w-[896px] max-h-[400px] flex flex-row-reverse justify-between items-center mx-auto gap-12">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Become an instructor</h2>
          <p className="text-xl ">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="w-max px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
            Start teching today
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="./images/companies/instructor.jpg"
            alt=""
            className="h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TustedTeams;
