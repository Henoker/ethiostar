'use client';

import Link from 'next/link';
import { useState } from 'react';

// import styles from '../styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
  // <nav
  //   className={`${styles.xPaddings} bg-gray-900 bg-opacity-50 z-50 fixed w-full flex items-center justify-between flex-wrap top-0 left-0 md:py-0 overflow-x-auto`}
  // >
  //   <div className="flex items-center top-0 flex-shrink-1 text-white mr-6 lg:mr-72">
  //     <Link href="/" className="flex items-center">
  //       <img
  //         src="/logo5.svg"
  //         className=" h-14 w-auto mr-3"
  //         alt="Ethiostar Logo"
  //       />
  //     </Link>
  //   </div>
  //   <div className="block lg:hidden">
  //     <button
  //       onClick={() => setIsOpen(!isOpen)}
  //       className="flex items-center px-3 py-2 rounded text-white hover:text-gray-200"
  //       type="button"
  //     >
  //       <svg
  //         className={`fill-current h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
  //         viewBox="0 0 20 20"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  //       </svg>
  //       <svg
  //         className={`fill-current h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
  //         viewBox="0 0 20 20"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
  //       </svg>
  //     </button>
  //   </div>
  //   <div
  //     className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'} mt-12 lg:mt-0`}
  //   >
  //     <div className="flex flex-col p-2 md:p-0 mt-2 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white md:bg-transparent border-gray-700">
  //       <Link href="/" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
  //         Home
  //       </Link>
  //       <Link href="/about" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
  //         About
  //       </Link>
  //       <Link href="/services" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
  //         Services
  //       </Link>
  //       <Link href="/industries" className="block py-2 pl-3 pr-4 text-blue-700  rounded md:bg-transparent md:text-blue-100 md:p-0 md:dark:text-blue-500">
  //         Industries
  //       </Link>
  //       <div>
  //         <Link
  //           href="/quote"
  //           className="inline-flex items-center bg-amber-500 border-0 py-2 px-3 text-white"
  //         >
  //           Instant Quote
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
    <nav className="flex items-center justify-between flex-wrap p-2 bg-gray-900 bg-opacity-50 fixed z-50 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-3 lg:mr-72">
        <img src="/logo5.svg" className="w-100 h-10" alt="Logo" />
      </div>
      <div className="flex lg:hidden w-full">
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
  //   <div className="flex items-center justify-between bg-transparent fixed z-50 py-8">
  //     <Link href="/">
  //       <img
  //         src="/logo5.svg"
  //         alt="logo"
  //         className="w-auto h-12 mx-4"
  //       />
  //     </Link>
  //     <nav>
  //       <section className="MOBILE-MENU flex lg:hidden">
  //         <div
  //           className="HAMBURGER-ICON space-y-2"
  //           onClick={() => setIsNavOpen((prev) => !prev)}
  //         >
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-200" />
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-200" />
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-200" />
  //         </div>

  //         <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
  //           <div
  //             className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
  //             onClick={() => setIsNavOpen(false)}
  //           >
  //             <svg
  //               className="h-8 w-8 text-gray-600"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth="2"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             >
  //               <line x1="18" y1="6" x2="6" y2="18" />
  //               <line x1="6" y1="6" x2="18" y2="18" />
  //             </svg>
  //           </div>
  //           <ul className="MENU-LINK-MOBILE-OPEN flex flex-col my-6 items-center justify-between min-h-[250px]">
  //             <li className="border-b border-gray-400 my-8 uppercase">
  //               <Link href="/">Home</Link>
  //             </li>
  //             <li className="border-b border-gray-400 my-8 uppercase">
  //               <Link href="/about">About</Link>
  //             </li>
  //             <li className="border-b border-gray-400 my-8 uppercase">
  //               <Link href="/services">Services</Link>
  //             </li>
  //             <li className="border-b border-gray-400 my-8 uppercase">
  //               <Link href="/industries">Industries</Link>
  //             </li>
  //             <li className="border-b border-gray-400 my-8 uppercase">
  //               <Link href="/quote">Instant Quote</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </section>

  //       <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
  //         <li>
  //           <Link className="text-blue-700 md:text-blue-400 hover:text-blue-700 hover:underline" href="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link className="text-blue-700 md:text-blue-400 hover:text-blue-700 hover:underline" href="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link className="text-blue-700 md:text-blue-400 hover:text-blue-500 hover:underline" href="/services">Services</Link>
  //         </li>
  //         <li>
  //           <Link className="text-blue-700 md:text-blue-400 hover:text-blue-500 hover:underline" href="/industries">Industries</Link>
  //         </li>
  //         <li>
  //           <Link className="text-blue-700 md:text-blue-400 hover:text-blue-500 hover:underline" href="/quote">Instant Quote</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <style>{`
  //   .hideMenuNav {
  //     display: none;
  //   }
  //   .showMenuNav {
  //     display: block;
  //     position: absolute;
  //     width: 100%;
  //     height: 100vh;
  //     top: 0;
  //     left: 0;
  //     background: white;
  //     z-index: 10;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-evenly;
  //     align-items: center;
  //   }
  // `}
  //     </style>
  //   </div>
  );
};

export default Navbar;
