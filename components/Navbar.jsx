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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 px-4 sticky top-0 bg- bg-opacity-50 md:pr-32 md:py-0 z-50`}
    >
      {/* <div className={`${styles.innerWidth}  flex justify-between gap-8 text-white font-bold py-2 px-4 rounded-l`}> */}
       <div className={`${styles.innerWidth}  flex items-center space-x-2 md:space-x-10 text-white`}>
        <Link href="/">
          <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          priority
          />
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-gray-500 md:text-[14px]">
            <Link href="/home">Home</Link>
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
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        
        {/* Mobile section */}
        <div className="block sm:hidden z-10">
          {showMobileMenu ? (
            <AiOutlineClose onClick={toggleMobileMenu} size={32} />
          ) : (
            <AiOutlineMenu onClick={toggleMobileMenu} size={32} />
          )}
        </div>
      </div>
      <div className="mb-[50px] h-[2px] w-screen  bg-white opacity-50" />

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-100">
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
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
    
  );
};

export default Navbar;