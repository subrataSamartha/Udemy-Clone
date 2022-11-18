import React, { useState } from "react";
import JsCouse from "./JsCouse";
import PythonCourse from "./PythonCourse";
import WebDev from "./WebDev";

const Course = () => {
  const [tab, setTab] = useState("Python");
  return (
    <section>
      <div>
        <ul className="flex flex-nowrap border-b-2 border-solid border-gray-200 gap-1">
          <li
            onClick={() => setTab("Python")}
            className={`py-3 px-5 hover:cursor-pointer hover:bg-gray-100 rounded-t-md ${
              tab === "Python" ? "bg-gray-100" : ""
            }`}
          >
            Python
          </li>
          <li
            onClick={() => setTab("Javascript")}
            className={`py-3 px-5 hover:cursor-pointer hover:bg-gray-100 rounded-t-md ${
              tab === "Javascript" ? "bg-gray-100" : ""
            }`}
          >
            JavaScript
          </li>
          <li
            onClick={() => setTab("webDev")}
            className={`py-3 px-5 hover:cursor-pointer hover:bg-gray-100 rounded-t-md ${
              tab === "webDev" ? "bg-gray-100" : ""
            }`}
          >
            Web Dev
          </li>
        </ul>
      </div>
      <div>
        {tab === "Python" && <PythonCourse />}
        {tab === "Javascript" && <JsCouse />}
        {tab === "webDev" && <WebDev />}
      </div>
    </section>
  );
};

export default Course;
