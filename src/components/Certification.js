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
          data-aos-once="false"
          className="px-2 py-6 grid justify-center items-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
        >
          {CertificationData.map((cert, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="false"
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className="w-16 h-16 md:w-20 md:h-20 mb-4 transition duration-700 hover:scale-110"
                />
                <h3 className="text-lg font-semibold text-center mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-2">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  View Certificate
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;