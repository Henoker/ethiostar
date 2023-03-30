'use client'
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logoethioameric1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


 
  // const [showMobileMenu, setShowMobileMenu] = useState(false);

  // const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      // className={`${styles.xPaddings} py-4 px-4 sticky top-0 bg-blue-900 bg-opacity-50 md:pr-32 md:py-0 z-50`}
      // className={`${styles.xPaddings} bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}
      className={`${styles.xPaddings} bg-white z-50 fixed w-full flex items-center justify-between flex-wrap p-4 top-0 left-0`}
    >
     
       {/* <div className={`${styles.innerWidth}  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
       
        <Link href="/" className="flex items-center">
          <img
          src="/favicon.ico"
          className="h-8 mr-3"
          alt="Ethiostar Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Ethiostar America
          </span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="p-4 hover:text-gray-500 md:text-[14px]">
            <Link 
            href="/"
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
            >
              Home
            </Link>
          </li>
          <li className="p-4 hover:text-gray-500">
          <Link 
            href="/about"
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
            >
              About
            </Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link 
            href="/services"
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
            href="/industries"
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
            >
              Industries
            </Link>

          </li>
          
          <li className="bg-skin-fill p-4 hover:text-gray-500">
          <Link 
            href="/quote"
            className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
            >
              Instant Quote
            </Link>
          </li>
        </ul>
        </div>

        
        
      
        <div className="block sm:hidden z-10">
          {showMobileMenu ? (
            <AiOutlineClose onClick={toggleMobileMenu} size={32} />
          ) : (
            <AiOutlineMenu onClick={toggleMobileMenu} size={32} />
          )}
        </div>
      </div>
     
      {showMobileMenu && (
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-100">
           <Link href="/" className="flex items-center">
          <img
          src="/favicon.ico"
          className="h-8 mr-3"
          alt="Ethiostar Logo"
          />
        
        </Link>
          <ul className="flex flex-col items-center text-white font-bold">
            <li className="p-4 hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/quote">Instant Quote</Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center">
      <img
        src="/favicon.ico"
        className="h-8 mr-3"
        alt="Ethiostar Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Ethiostar America
      </span>
    </Link>
    <div className="flex md:order-2">
      <ul>
        <li>
        <Link
        href="/quote"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Instant Quote
      </Link>
        </li>
      </ul>
      
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/industries"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Industries
          </Link>
        </li>
        <li>
          <Link
          href="/quote"
          className="block pl-3 pr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Instant Quote
          </Link>
        </li>
      </ul>
    </div>
  </div> */}
  
  <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       {/* <img src="/logoethioameric1.png" className="w-100 h-10 mr-2" alt="Logo" />
       <span className="self-center text-2xl font-semibold whitespace-nowrap text-white
       ">
        Ethiostar America
      </span> */}
       <Link href="/" className="flex items-center">
      <img
        src="/favicon.ico"
        className="h-8 mr-3"
        alt="Ethiostar Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
        Ethiostar America
      </span>
    </Link>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
         <Link href="/" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
           Home
         </Link>
         <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
           About
         </Link>
         <Link href="/services" className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
           Services
         </Link>
         <Link href="/industries" className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
           Industries
         </Link>
         {/* <Link href="/quote" className="block py-2 pl-3 pr-4 text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
           Instant Quote
         </Link> */}
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
    
    
    </motion.nav>
    
  );
};

export default Navbar;