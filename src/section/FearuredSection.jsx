import React from "react";

const FearuredSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="text-2xl font-bold">Featured topic by category</h2>
        <div className="flex justify-between py-10">
          {/* Development list */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Development</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Python
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  36,354,994 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Web Development
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  11,415,615 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Machine Learning
                </p>
                <p className="text-sm text-gray-500 mt-1">7,070,015 students</p>
              </li>
            </ul>
          </div>
          {/* Business list */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Business</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Financial Analysis
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  36,354,994 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  SQL
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  11,415,615 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  PMP
                </p>
                <p className="text-sm text-gray-500 mt-1">7,070,015 students</p>
              </li>
            </ul>
          </div>
          {/* IT and Softweare list */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">IT and Software</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  AWS Certification
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  36,354,994 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Ethical Hacking
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  11,415,615 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Cyber Security
                </p>
                <p className="text-sm text-gray-500 mt-1">7,070,015 students</p>
              </li>
            </ul>
          </div>
          {/* Design list */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Design</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Photoshop
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  36,354,994 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Graphic Design
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  11,415,615 students
                </p>
              </li>
              <li>
                <p className="text-md font-bold underline underline-offset-2 text-purple-800">
                  Drawing
                </p>
                <p className="text-sm text-gray-500 mt-1">7,070,015 students</p>
              </li>
            </ul>
          </div>
        </div>
        <button className="w-max py-2 px-2 font-bold border border-solid border-gray-800">
          Explore more topics
        </button>
      </div>
    </section>
  );
};

export default FearuredSection;
