import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import KeyPersonel from "../components/KeyPersonel";

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
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower nurses by providing them with access to
            international and local job opportunities, advanced training in
            non-communicable diseases, and cutting-edge digital health tools. We
            are committed to improving patient care quality while supporting the
            professional growth of healthcare providers through mentorship and
            education.
          </p>

          <b className="text-gray-800">Our Vision</b>
          <p>
            To be a leading nurse recruitment agency that connects skilled
            nurses with life-changing career opportunities worldwide, while
            enhancing global healthcare outcomes through innovative and
            compassionate care.
          </p>
        </div>
      </div>
      <KeyPersonel/>

      <div className="text-xl my-4">
        <p>WHY CHOOSE US</p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>INTERGRITY: </b>
          <p>We operate with honesty and transparency in all our dealings.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>COMPASSION:</b>
          <p>
            We prioritize the well-being of both our nurses and the patients
            they serve.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>INNOVATION:</b>
          <p>
            We embrace new ideas and technologies to enhance our services and
            processes.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-3oo text text-gray-600 cursor-pointer">
          <b>DIVERSITY:</b>
          <p>
            We celebrate and support a diverse workforce that reflects the
            communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
