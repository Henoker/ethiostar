'use client';

import Link from 'next/link';
import { useState } from 'react';

// import styles from '../styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleServicesClick = () => {
    setShowSubMenu(!showSubMenu);
  };

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
        <div className="text-sm lg:flex-grow bg-gray-900 divide-gray-600 md:bg-transparent">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 md:text-blue-200 hover:text-blue-500 hover:underline mx-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 md:text-blue-200 hover:text-blue-500 hover:underline  mx-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 md:text-blue-200 hover:text-blue-500 hover:underline ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Services
          </Link>
          <div className="relative inline-block">
            <button
              type="button"
              className="relative z-10 block p-2 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:outline-none"
              onClick={handleServicesClick}
            >
              <svg
                className="w-5 h-5 text-blue-800 lg:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            {showSubMenu && (
              <div
                className="absolute left-0 z-20 w-48 py-2 ml-0 mt-2 origin-top-right rounded-md shadow-xl bg-gray-800"
              >
                <Link
                  href="/services/translation"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  Translation{' '}
                </Link>
                <Link
                  href="/services/localization"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  Localization{' '}
                </Link>
                <Link
                  href="/services/interpretation"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  Interpretation{' '}
                </Link>
                <Link
                  href="/services/audioservices"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  Audio Services{' '}
                </Link>
                <Link
                  href="/services/dtp"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  DTP{' '}
                </Link>
                <Link
                  href="/services/machine"
                  className="block px-4 py-3 text-sm text-gray-200 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                >
                  {' '}
                  Machine Translation{' '}
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/industries"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 md:text-blue-200 hover:text-blue-500 hover:underline  mx-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Industries
          </Link>
          <Link
            href="/quote"
            className="block bg-amber-500 border-0 py-2 px-4 mt-4 lg:inline-block lg:mt-0 text-gray-700 md:text-gray-700 hover:text-blue-500 hover:underline mx-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            Instant Quote
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
