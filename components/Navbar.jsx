'use client'
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/ethiostar.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-2 relative sticky top-0 bg-gray-900 bg-opacity-50 z-50`}
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 text-white font-bold py-2 px-4 rounded-l`}>
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
          <li className="p-4 hover:text-gray-500">
            <Link href="/home">Home</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/about">About Us</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/industries">Industries</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/contact">Contact Us</Link>
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

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-100">
          <ul className="flex flex-col items-center text-white font-bold">
            <li className="p-4 hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/about">About Us</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="p-4 hover:text-gray-500">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;