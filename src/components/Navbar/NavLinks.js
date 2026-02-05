import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
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
        smooth
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
        smooth
      >
        Media Coverage
      </a>
      <a
        href="https://drive.google.com/drive/folders/1QGL9JxavpwplBKO-NNhHrDg3wjPaGBUG?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        smooth
      >
        Gallery
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-green-900"
        to="/contact#contact"
      >
        Contact
      </HashLink>

      {/* <a
        href="https://drive.google.com/file/d/1xM2RQjPzuf4NYWORjGOOcNSZLiLU3m4O/view?usp=sharing"
        target="_blank"
        className="text-white bg-green-900 hover:bg-green-700 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
      >
        Guide Book
      </a> */}
    </>
  );
};

export default NavLinks;
