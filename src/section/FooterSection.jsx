import React from "react";
import { BsGlobe } from "react-icons/bs";

const FooterSection = () => {
  return (
    <section className="w-full bg-gray-900 py-8 px-6 md:px-16 md:pb-16 flex flex-col gap-16">
      <div className="text-white flex flex-col-reverse md:flex-row justify-between ">
        <div className="flex flex-col justify-between">
          <div className="hidden md:flex gap-24">
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:cursor-pointer">
                Udemy Business
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Teach on Udemy
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Get the app
              </li>
              <li className="hover:underline hover:cursor-pointer">About us</li>
              <li className="hover:underline hover:cursor-pointer">
                Contact us
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:cursor-pointer">Careers</li>
              <li className="hover:underline hover:cursor-pointer">Blog</li>
              <li className="hover:underline hover:cursor-pointer">
                Help and Support
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Affiliate
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Investors
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="hover:underline hover:cursor-pointer">Terms</li>
              <li className="hover:underline hover:cursor-pointer">
                Privacy policy
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Cookies setting
              </li>
              <li className="hover:underline hover:cursor-pointer">Sitemap</li>
              <li className="hover:underline hover:cursor-pointer">
                Accessibility statement
              </li>
            </ul>
          </div>
          <div className="md:hidden mt-6">
            <ul className="flex flex-col gap-2">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Cookie settings</li>
              <li>Blog</li>
              <li>Sitemap</li>
              <li>Get the app</li>
              <li>Accessibility statement</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button className="w-max h-10 px-5 border border-solid border-white font-bold text-sm flex justify-center items-center gap-3">
            <BsGlobe />
            <p>English</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start md:justify-between gap-6 ">
        <img
          src="./images/logo-udemy-inverted.svg"
          alt="udemy-logo"
          className="h-7 md:h-9 w-max"
        />
        <p className="text-white">© 2022 Udemy, Inc</p>
      </div>
    </section>
  );
};

export default FooterSection;
