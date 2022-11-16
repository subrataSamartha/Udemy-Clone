import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CourseCard from "./CourseCard";

const StudentViewing = () => {
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
    <div className="max-w-[1340px] mx-auto mt-6">
      <div>
        <h2 className="text-2xl mb-4">Students are viewing</h2>
        <Splide
          aria-label="My Favorite Images"
          options={{ perPage: 4, pagination: false, gap: "1rem" }}
        >
          {courseDetail.map((course) => (
            <SplideSlide key={course.id}>
              <CourseCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default StudentViewing;
