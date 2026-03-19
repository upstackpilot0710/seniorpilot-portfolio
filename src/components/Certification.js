import React from "react";
import CertificationData from "../data/certification";

const Certification = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="certifications"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Certifications
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Professional Certifications
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
          className="px-2 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CertificationData.map((cert, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="flex flex-col items-center justify-start p-6 bg-slate-100 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={cert.badge}
                alt={cert.name}
                className="w-24 h-24 md:w-28 md:h-28 mb-4 object-contain transition duration-500 hover:scale-110"
              />

              <h3 className="text-lg font-semibold text-center mb-2">
                {cert.name}
              </h3>

              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;