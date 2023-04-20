'use client';

import Link from 'next/link';
import { useState } from 'react';

// import styles from '../styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-2 bg-gray-900 bg-opacity-50 fixed z-50 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-3 lg:mr-72">
        <img src="/logo5.svg" className="w-100 h-10" alt="Logo" />
      </div>
      <div className="flex w-full lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-gray-300"
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
        className={`w-full text-amber-400 opacity-90 mx-4 block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="text-sm lg:flex-grow bg-white md:bg-transparent">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 md:text-blue-200 hover:text-blue-500 hover:underline mx-4">
            Home
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 md:text-blue-200 hover:text-blue-500 hover:underline  mx-4">
            About
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 md:text-blue-200 hover:text-blue-500 hover:underline  mx-4">
            Services
          </Link>
          <Link href="/industries" className="block mt-4 lg:inline-block lg:mt-0 text-blue-700 md:text-blue-200 hover:text-blue-500 hover:underline  mx-4">
            Industries
          </Link>
          <Link href="/quote" className="block bg-amber-500 border-0 py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-blue-700 md:text-gray-200 hover:text-blue-500 hover:underline  mx-4">
            Instant Quote
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
