import React, { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import HoverDiv from "./HoverDiv";
import ReactStars from "react-rating-stars-component";
import ReactTooltip from "react-tooltip";

const CourseCard = ({ course }) => {
  console.log(course);
  //   const [visibility, setvisibility] = useState("hidden");
  //   const showCourseDetails = () => {};

  return (
    // <div className="relative" onMouseOver={() => showCourseDetails()}>
    <div className="group relative ">
      <ReactTooltip id="happyFace" type="error">
        <div className="w-[600px] h-[600px]">Show happy face</div>
      </ReactTooltip>
      {/* <div className="absolute left-10 bottom-24 invisible group-hover:visible">
        <HoverDiv />
      </div> */}
      <div className="w-[240px] p-2 cursor-pointer">
        <img src={course.img} alt="" />
        <div className="font-medium">
          <LinesEllipsis
            text={course.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <ReactStars
            count={5}
            size={24}
            value={course.rating}
            activeColor="#ffd700"
          />
        </div>
        <p>{course.instructor}</p>
        <p className="">₹{course.price}</p>
        <div></div>
      </div>
    </div>
  );
};

export default CourseCard;
