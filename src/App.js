import "./App.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Course from "./components/courses/Course.jsx";
import StudentViewing from "./components/courses/StudentViewing";
import FearuredSection from "./section/FearuredSection";
import TustedTeams from "./section/TustedTeams";
import FooterSection from "./section/FooterSection";

function App() {
  return (
    <div>
      {/* Nav bar */}
      <nav className="flex justify-between md:justify-around items-center py-3 px-4 md:px-6 gap-5 shadow-md">
        <FiMenu className="md:hidden text-2xl text-gray-800" />
        <div className="logo">
          <img src="./logo-udemy.svg" alt="udemy-logo" className="h-7 md:h-9" />
        </div>
        <p className="hidden md:inline text-sm">Category</p>
        <div className="hidden md:flex justify-start items-center gap-4 grow border border-solid border-black rounded-full p-2 h-13 bg-gray-100">
          <button>
            <AiOutlineSearch className="text-2xl text-gray-500" />
          </button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for anything"
            className="text-sm w-full focus:outline-none leading-8 bg-gray-100"
          />
        </div>
        <p className="hidden md:inline text-sm">Udemy Business</p>
        <p className="hidden md:inline text-sm">Teach on Udemy</p>
        <div className="flex justify-between items-center gap-4">
          <AiOutlineSearch className="text-2xl text-gray-800" />
          <AiOutlineShoppingCart className="text-2xl text-gray-800" />
        </div>
        <div className="hidden md:flex justify-between items-center gap-2">
          <button className="px-5 h-10 border border-solid border-black font-bold text-sm">
            Log in
          </button>
          <button className="px-5 h-10 border border-solid border-black font-bold text-sm text-white bg-black">
            Sign up
          </button>
          <button className="h-10 w-10 border border-solid border-black font-bold text-sm flex justify-center items-center">
            <BsGlobe />
          </button>
        </div>
      </nav>
      {/* Hero section slider */}
      <div className="max-w-[1340px] mx-auto">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <div>
              <div className="w-[460px] p-5 bg-white absolute left-16 top-16 shadow-xl">
                <h2 className="text-4xl">Unlock the power of your people</h2>
                <p className="text-md mt-3 leading-6">
                  Udemy Business is trusted by 12.5K+ companies around the
                  world.
                  <a
                    href="https://business.udemy.com/request-demo-mx/?ref=ub-hero-banner&locale=en_US"
                    className="underline text-blue-800"
                  >
                    Find out what we can do for yours
                  </a>
                  .
                </p>
              </div>
              <img src="./slide.jpg" alt="" className="w-full" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div>
              <div className="w-[440px] p-5 bg-white absolute left-16 top-16 shadow-xl">
                <h2 className="text-4xl">Learning that gets you</h2>
                <p className="text-md mt-3 leading-6">
                  Skills for your present (and your future). Get started with
                  us.
                </p>
              </div>
              <img src="slide-2.jpg" alt="" className="w-full" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* courses */}
      <div className="max-w-[1340px] mx-auto p-5">
        <h2 className="text-2xl md:text-4xl font-medium">
          A broad selection of courses
        </h2>
        <p className="text-md md:text-xl mt-2">
          Choose from 204,000 online video courses with new additions published
          every month.
        </p>
        <Course />
        {/* Student viewing */}
        <StudentViewing />
      </div>
      {/* Feartured Section */}
      <FearuredSection />
      {/* Trusted teams section */}
      <TustedTeams />
      {/* footer section */}
      <FooterSection />
    </div>
  );
}

export default App;
