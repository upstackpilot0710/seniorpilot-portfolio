import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="skills"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Technical Expertise
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
          className="w-full max-w-[1600px] mx-auto px-2 py-6 grid justify-center items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 md:gap-4 border-t-gray-200 border-2 rounded-2xl bg-white/60 p-3 md:p-4 shadow-sm"
        >
          {SkillsData.map((skill, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-once="false"
                key={index}
                className="flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-200 p-2 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <p className="text-xs sm:text-sm text-center font-medium tracking-wide">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
