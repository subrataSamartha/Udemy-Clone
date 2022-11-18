import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CourseCard from "./CourseCard";

const StudentViewing = () => {
  const courseDetail = [
    {
      id: 0,
      img: "./images/student-viewing/sv-1.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Avinash Jain, The codex",
      rating: 4,
      price: 3999,
    },
    {
      id: 1,
      img: "./images/student-viewing/sv-2.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Subrata Samartha, The codex",
      rating: 3,
      price: 2999,
    },
    {
      id: 2,
      img: "./images/student-viewing/sv-3.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Chandan Sahoo, The codex",
      rating: 2,
      price: 1999,
    },
    {
      id: 3,
      img: "./images/student-viewing/sv-4.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Avinash Jain, The codex",
      rating: 4,
      price: 3999,
    },
    {
      id: 4,
      img: "./images/student-viewing/sv-5.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Subrata Samartha, The codex",
      rating: 3,
      price: 2999,
    },
    {
      id: 5,
      img: "./images/student-viewing/sv-6.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Chandan Sahoo, The codex",
      rating: 2,
      price: 1999,
    },
    {
      id: 6,
      img: "./images/student-viewing/sv-7.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Avinash Jain, The codex",
      rating: 4,
      price: 3999,
    },
    {
      id: 7,
      img: "./images/student-viewing/sv-8.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Subrata Samartha, The codex",
      rating: 3,
      price: 2999,
    },
    {
      id: 8,
      img: "./images/student-viewing/sv-9.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Chandan Sahoo, The codex",
      rating: 2,
      price: 1999,
    },
    {
      id: 9,
      img: "./images/student-viewing/sv-10.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Avinash Jain, The codex",
      rating: 4,
      price: 3999,
    },
    {
      id: 10,
      img: "./images/student-viewing/sv-11.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Subrata Samartha, The codex",
      rating: 3,
      price: 2999,
    },
    {
      id: 11,
      img: "./images/student-viewing/sv-1.png",
      title:
        "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53833 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹3,399",
      instructor: "Chandan Sahoo, The codex",
      rating: 2,
      price: 1999,
    },
  ];

  return (
    <div className="max-w-[1340px] mx-auto mt-6 py-16">
      <h2 className="text-2xl mb-4 font-bold">Students are viewing</h2>
      <div className="hidden md:block">
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
      <div className="md:hidden mt-6 relative flex overflow-x-auto flex-nowrap">
        {courseDetail.map((course) => (
          <div key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentViewing;
