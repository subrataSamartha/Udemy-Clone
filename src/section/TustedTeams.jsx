import React from "react";
import InstructorSection from "./InstructorSection";
import UdemyBusinessSection from "./UdemyBusinessSection";

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
        <div className="flex justify-between flex-wrap items-center mt-2">
          <img src="./images/companies/nasdaq-dark.svg" alt="" srcset="" />
          <img src="./images/companies/volkswagen-dark.svg" alt="" srcset="" />
          <img src="./images/companies/box-dark.svg" alt="" srcset="" />
          <img src="./images/companies/netapp-dark.svg" alt="" srcset="" />
          <img src="./images/companies/eventbrite-dark.svg" alt="" srcset="" />
          <img src="./images/companies/tcs-dark.svg" alt="" srcset="" />
        </div>
      </div>

      {/*  udemy bussiness */}
      <UdemyBusinessSection />
      {/*  instructor */}
      <InstructorSection />
    </section>
  );
};

export default TustedTeams;
