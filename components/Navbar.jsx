'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`${styles.xPaddings} bg-gray-900 bg-opacity-50 z-50 fixed w-full flex items-center justify-between flex-wrap top-0 left-0 md:py-0`}
    >
      <div className="flex items-center top-0 flex-shrink-1 text-white mr-6 lg:mr-72">
        <Link href="/" className="flex items-center">
          <img
            src="/logo5.svg"
            className=" h-24 w-24 mr-3"
            alt="Ethiostar Logo"
          />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-gray-200"
          type="button"
        >
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col p-2 md:p-0 mt-2 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white md:bg-transparent border-gray-700">
          <Link href="/" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
            About
          </Link>
          <Link href="/services" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
            Services
          </Link>
          <Link href="/industries" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
            Industries
          </Link>
          <div>
            <Link
              href="/quote"
              className="inline-flex items-center bg-amber-500 border-0 py-2 px-3 text-white"
            >
              Instant Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
