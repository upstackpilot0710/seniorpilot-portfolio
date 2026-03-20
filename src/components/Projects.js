import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectsData from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? ProjectsData : ProjectsData.slice(0, 6);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextProject = () => {
    const currentIndex = ProjectsData.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % ProjectsData.length;
    setSelectedProject(ProjectsData[nextIndex]);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    const currentIndex = ProjectsData.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? ProjectsData.length - 1 : currentIndex - 1;
    setSelectedProject(ProjectsData[prevIndex]);
    setCurrentImageIndex(0);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Works
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {visibleProjects.map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 w-full object-cover rounded-xl"
              />

              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-500 bg-darkblue rounded-xl">
                <h3 className="text-2xl font-medium text-white my-2">
                  {project.name}
                </h3>

                <p className="px-2 text-lg text-white text-center">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {project?.icons?.map((Icon, index) => (
                    <div className="rounded-full p-2" key={index}>
                      <Icon className="text-white text-4xl font-bold" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <button
                    onClick={() => openModal(project)}
                    className="text-darkblue text-xl bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                    title="View Details"
                  >
                    <FaEye />
                  </button>

                  {project.github && (
                    <a
                      className="text-darkblue text-xl bg-white rounded-full p-2"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}

                  <a
                    className="text-darkblue text-xl bg-white rounded-full p-2"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="p-[1px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FiChevronLeft className="text-2xl text-gray-700" />
          </button>

          {/* Modal */}
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative mb-6">
                <img
                  src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-lg pointer-events-none" />

                {/* Prev Button */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white p-2 rounded-full hover:bg-white/40 transition-all duration-300 shadow-md"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white p-2 rounded-full hover:bg-white/40 transition-all duration-300 shadow-md"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-3">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-blue-500 scale-110"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Detailed Description */}
              <p className="text-gray-700 text-lg mb-6">
                {selectedProject.detailedDescription || selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedProject?.icons?.map((Icon, index) => (
                    <div className="rounded-full p-2 bg-gray-100" key={index}>
                      <Icon className="text-gray-700 text-2xl" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 justify-center mb-6">
                {selectedProject.github && (
                  <a
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <FaGithub className="inline mr-2" />
                  GitHub
                </a>)}
                {selectedProject.demo && (
                  <a
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="inline mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FiChevronRight className="text-2xl text-gray-700" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
