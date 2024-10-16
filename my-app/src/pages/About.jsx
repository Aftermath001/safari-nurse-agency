import React from "react";
import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="felx flex-col justify-center gap-6 md:mw-2/4 text-sm text-gray-600">
          <p>
            We aim to connect healthcare professionals with international job
            opportunities and educational programs that enable them to thrive
            and make a global impact. Our focus is on empowering nurses and
            medical practitioners to pursue careers in countries where their
            skills are needed most.
          </p>
          
          <b className="text-gray-800">Our Vision</b>
          <p>
            We aim to connect healthcare professionals with international job
            opportunities and educational programs that enable them to thrive
            and make a global impact. Our focus is on empowering nurses and
            medical practitioners to pursue careers in countries where their
            skills are needed most.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>WHY CHOOSE US</p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>GLOBAL NETWORK: </b>
          <p>
          We have established partnerships with reputable healthcare organizations and academic institutions around the world.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>PERSONALIZED SUPPORT:</b>
          <p>
          Our team of experts offers one-on-one support, from job search and applications to relocation and settling in your new country.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>COMPREHENSIVE SERVICES:</b>
          <p>
          From visa assistance to interview preparation, we offer a full range of services designed to make your transition seamless
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
