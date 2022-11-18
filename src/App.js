import "./App.css";

import "@splidejs/react-splide/css";
import Course from "./components/courses/Course.jsx";
import StudentViewing from "./components/courses/StudentViewing";
import FearuredSection from "./section/FearuredSection";
import TustedTeams from "./section/TustedTeams";
import FooterSection from "./section/FooterSection";
import NavSection from "./section/NavSection";
import HeroSection from "./section/HeroSection";

function App() {
  return (
    <div>
      {/* Nav bar */}
      <NavSection />
      {/* Hero section slider */}
      <HeroSection />
      {/* courses */}
      <div className="max-w-[1340px] mx-auto px-6 py-1 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold">
          A broad selection of courses
        </h2>
        <p className="text-md md:text-xl mt-4 mb-4">
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
