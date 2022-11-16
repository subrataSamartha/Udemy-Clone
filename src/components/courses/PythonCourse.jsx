import React from "react";
import CourseCard from "./CourseCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const PythonCourse = () => {
  const courseDetail = [
    {
      id: 0,
      img: "./images/python-courses/python-1.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Avinash Jain, The codex",
      rating: 4,
      price: 3999,
    },
    {
      id: 2,
      img: "./images/python-courses/python-1.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Subrata Samartha, The codex",
      rating: 3,
      price: 2999,
    },
    {
      id: 3,
      img: "./images/python-courses/python-1.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Chandan Sahoo, The codex",
      rating: 2,
      price: 1999,
    },
  ];
  return (
    <div className="border border-solid border-gray-300 p-5">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">
          Expand your career opportunities with Python
        </h2>
        <p className="text-md w-2/3">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
        <button className="w-max py-2 px-2 font-bold border border-solid border-gray-800">
          Explore Python
        </button>
      </div>
      <div className="mt-6 relative">
        <Splide
          aria-label="My Favorite Images"
          options={{ perPage: 4, pagination: false, gap: "1rem" }}
        >
          {courseDetail.map((course) => (
            <SplideSlide key={course.id}>
              <CourseCard course={course} />
            </SplideSlide>
          ))}

          {/* <SplideSlide>
            <CourseCard />
          </SplideSlide>
          <SplideSlide>
            <CourseCard />
          </SplideSlide>
          <SplideSlide>
            <CourseCard />
          </SplideSlide>
          <SplideSlide>
            <CourseCard />
          </SplideSlide>
          <SplideSlide>
            <CourseCard />
          </SplideSlide> */}
        </Splide>
      </div>
    </div>
  );
};

export default PythonCourse;
