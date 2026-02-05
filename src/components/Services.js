import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">
            Category
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-green-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">
            This is a category in JISF events.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="./assets/logo/social-science.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Social Science
                </h2>
                <p className="text-md font-medium">
                  This category encompasses a wide range of disciplines, including sociology, psychology, anthropology, and economics. It focuses on the study of human society and social relationships.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="./assets/logo/life.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Life Sciences
                </h2>
                <p className="text-md font-medium">
                  Life Science is a fundamental discipline that studies various aspects of life and living organisms, including their structure, function, growth, evolution, and ecology. Its focus lies in understanding biological phenomena without directly aiming for practical applications.
                </p>
              </div>
            </div>

             <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="./assets/logo/en.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Engineering
                </h2>
                <p className="text-md font-medium">
                  The interdisciplinary academic field that studies the interactions between physical, chemical, and biological components within the environment, with a particular focus on human impact.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="./assets/logo/env.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Environmental Science
                </h2>
                <p className="text-md font-medium">
                  The interdisciplinary academic field that studies the interactions between physical, chemical, and biological components within the environment, with a particular focus on human impact.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src="./assets/logo/inov.png"
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Innovation Science
                </h2>
                <p className="text-md font-medium">
                  The exploration of the processes, factors, and outcomes of innovation, including the development of new ideas, technologies, and business models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
