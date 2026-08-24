import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
  const [isGuideBookOpen, setIsGuideBookOpen] = useState(false);

  const toggleGuideBook = () => {
    setIsGuideBookOpen(!isGuideBookOpen);
  };

  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        smooth
        to="/#hero"
      >
        Home
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>

      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/Faq"
      >
        Faq
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/ListofWinner"
      >
        List of Winner
      </HashLink>
      <a
        href="/Kurasipage"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        smooth="true"
      >
        Curation
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/CertificateSupervisor"
      >
        Certificate
      </HashLink>
      <a
        href="/MediaCoverage"
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        smooth="true"
      >
        Media Coverage
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/Gallery"
      >
        Gallery
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/contact#contact"
      >
        Contact
      </HashLink>

      <div className="relative inline-block text-left lg:mt-0">
        <button
          onClick={toggleGuideBook}
          className="text-white bg-green-900 hover:bg-green-700 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl focus:outline-none"
        >
          Guide Book
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {isGuideBookOpen && (
          <div className="lg:absolute lg:right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1 flex flex-col" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="https://drive.google.com/file/d/1y604pWO2S9w76utVS93h9qIkQZBqXAw5/view?usp=sharing" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-900 font-bold" role="menuitem">2026</a>
              <a href="https://drive.google.com/file/d/1B1kHwIL0TRCCsvBe006kdD0scKYKyM0p/view?usp=sharing" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-900 font-bold" role="menuitem">2025</a>
              <a href="https://drive.google.com/file/d/1Tao9l2dB_1M0lEvarYnhd5-lRRUGrmof/view?usp=sharing" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-900 font-bold" role="menuitem">2024</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
