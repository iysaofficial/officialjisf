import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t float-right"
              src="./assets/logo/monas3.png"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-green-900 font-bold">About JISF</h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Indonesian Young Scientist Association (IYSA) in collaboration
                with Office of the Ministry of Religious Affairs of DKI Jakarta Province
                organised a scientific competition called "Jakarta National
                Science Fair" for the first time JISF organised in hybrid
                situation competition (Online and Offline).
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                JISF is emerging as a prestigious platform dedicated to
                fostering scientific innovation and collaboration on a global
                scale. Recognising the importance of scientific advancement in
                addressing contemporary challenges, the JISF stands as a beacon
                for research scientists, and innovators to come together and
                share their groundbreaking discoveries.
              </p>
            </div>
            {/* <Link to="/contact" className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
