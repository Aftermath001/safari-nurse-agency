import Reactzz from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex bg-[url('/src/assets/assets_frontend/airplane-plane.jpg')] bg-cover bg-center rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10"
      
    >
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p>With Safari Nursing Agency</p>
        </div>
        <button
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Contact Us
        </button>
      </div>
      {/* Right Side */}
      <div className="hidden md:block md:mw-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="appointment img"
        />
      </div>
    </div>
  );
};

export default Banner;
