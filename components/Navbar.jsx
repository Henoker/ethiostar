'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleServicesClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowSubMenu(false);
  };

  return (
    <nav className="bg-transparent backdrop-blur-lg fixed z-50 w-full">
      <div className="max-w-screen-xl mx-auto p-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer flex items-center">
              <img src="/logo5.svg" className="w-20 h-10 mr-4" alt="Logo" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <div className="text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                About
              </div>
            </Link>
            <button
              type="button"
              className="text-gray-200 hover:text-gray-300 hover:underline focus:outline-none"
              onClick={handleServicesClick}
            >
              Services
            </button>
            {showSubMenu && (
              <div className="ml-4">
                <Link href="/services">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    ALL Services
                  </div>
                </Link>
                <Link href="/services/translation">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    Translation
                  </div>
                </Link>
                <Link href="/services/localization">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    Localization
                  </div>
                </Link>
                <Link href="/services/interpretation">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    Interpretation
                  </div>
                </Link>
                <Link href="/services/audioservices">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    Audio Services
                  </div>
                </Link>
                <Link href="/services/dtp">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    DTP
                  </div>
                </Link>
                <Link href="/services/machine">
                  <div className="py-2 text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                    Machine Traslation
                  </div>
                </Link>
              </div>
            )}
            <Link href="/industries">
              <div className="text-gray-200 hover:text-gray-300 hover:underline" onClick={closeMenu}>
                Industries
              </div>
            </Link>
            <Link href="/quote">
              <div className="bg-amber-500 border-0 py-1 px-4 text-gray-700 hover:text-blue-500 hover:underline" onClick={closeMenu}>
                Instant Quote
              </div>
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-4 text-sm text-white rounded-lg md:hidden"
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
          className={`w-full text-amber-400 opacity-90 block md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="bg-gray-900 border-gray-100 border-transparent md:bg-transparent md:border-0 divide-gray-600 p-4 md:p-0">
            <Link
              href="/"
              className="block mt-4 text-gray-200 hover:text-gray-300 hover:underline"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 text-gray-200 hover:text-gray-300 hover:underline"
              onClick={closeMenu}
            >
              About
            </Link>
            <button
              type="button"
              className="block mt-4 text-gray-200 hover:text-gray-300 hover:underline focus:outline-none"
              onClick={handleServicesClick}
            >
              Services
            </button>
            {showSubMenu && (
              <div className="ml-4">
                <Link
                  href="/services"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  ALL SERVICES
                </Link>
                <Link
                  href="/services/translation"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  Translation
                </Link>
                <Link
                  href="/services/interpretation"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  Interpretation
                </Link>
                <Link
                  href="/services/audioservices"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  Audio Services
                </Link>
                <Link
                  href="/services/dtp"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  DTP
                </Link>
                <Link
                  href="/services/machine"
                  className="block py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                  onClick={closeMenu}
                >
                  Machine Traslation
                </Link>
              </div>
            )}
            <Link
              href="/industries"
              className="block mt-4 text-gray-200 hover:text-gray-300 hover:underline"
              onClick={closeMenu}
            >
              Industries
            </Link>
            <Link
              href="/quote"
              className="block bg-amber-500 border-0 py-1 px-4 mt-4 text-gray-700 hover:text-blue-500 hover:underline"
              onClick={closeMenu}
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
