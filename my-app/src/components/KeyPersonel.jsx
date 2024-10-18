import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const KeyPersonel = () => {
  const ceo = {
    name: "Dr. Hillary Kelum", 
    description: `Dr. Hillary Kelum is the founder and CEO of Safari Nursing Agency. With over 20 years of experience in the healthcare industry, he has dedicated his career to helping nurses find fulfilling opportunities both locally and internationally. His passion for education and mentorship has guided the company’s mission to support healthcare professionals in advancing their careers.`,
    achievements: [
      "5+ Years of Experience in Healthcare Industry",
      "Founded Safari Nursing Agency in 2024",
      "Helped place over 1,000 nurses in international positions",
      "Certified Mentor and Trainer in Global Nursing",
    ],

  };
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* CEO Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* CEO Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
          className="w-full md:max-w-[360px]"
          src={assets.maindoc}
          alt="profile_pic"
        />
          </div>

          {/* CEO Description and Achievements */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              {ceo.name}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{ceo.description}</p>

            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Achievements:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              {ceo.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPersonel;
