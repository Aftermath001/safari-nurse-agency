import React from "react";

const ServicesPage = () => {
  const services = [
    {
      title: "Training and Education",
      description:
        "Offering training programs for nurses to enhance their skills, gain certifications, or prepare for exams like the NCLEX-RN.",
    },
    {
      title: "International Nurse Placement",
      description:
        "Connecting nurses from countries like Kenya to job opportunities abroad, such as in the U.S., U.K., Canada, or Australia.",
    },
    {
      title: "Local Staffing Solutions",
      description:
        "Providing local healthcare institutions in Kenya with qualified nurses for short- or long-term assignments.",
    },
    {
      title: "Digital Health Integration",
      description:
        "Incorporating digital health tools or platforms for remote consultations or telemedicine, aligning with global healthcare trends.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Services
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
