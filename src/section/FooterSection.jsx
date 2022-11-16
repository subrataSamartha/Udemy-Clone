import React from "react";
import { BsGlobe } from "react-icons/bs";

const FooterSection = () => {
  return (
    <section className="h-[360px] bg-gray-900 text-white flex justify-between py-8 px-16 pb-16">
      <div className="flex flex-col justify-between">
        <div className="flex gap-24">
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
            <li className="hover:underline hover:cursor-pointer">Contact us</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="hover:underline hover:cursor-pointer">Careers</li>
            <li className="hover:underline hover:cursor-pointer">Blog</li>
            <li className="hover:underline hover:cursor-pointer">
              Help and Support
            </li>
            <li className="hover:underline hover:cursor-pointer">Affiliate</li>
            <li className="hover:underline hover:cursor-pointer">Investors</li>
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
        <div>
          <img
            src="./images/logo-udemy-inverted.svg"
            alt="udemy-logo"
            className="h-7 md:h-9"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <button className="h-10 px-5 border border-solid border-white font-bold text-sm flex justify-center items-center gap-3">
          <BsGlobe />
          <p>English</p>
        </button>
        <p>© 2022 Udemy, Inc</p>
      </div>
    </section>
  );
};

export default FooterSection;
