'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import {navVariants} from '../utils/motion';
import Link from 'next/link';



const Navbar = () => (
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
  >
    {/* <div className='fixed top-0 left-0 w-full z-50'/>

    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src='/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain fill-inherit'
      />
      <img
      src='/logo-horizontal-preta.png'
      alt='logo'
      className='w-[180px] h-[80px] object-contain'
      />
      <img 
      src='/menu.svg'
      alt='menu'
      className='w-[24px] h-[24px] object-contain'
      />
    </div> */}
    <div>
      <div>
        {/* <Link href='/'>
        <h1>Ethiostar</h1>
        </Link> */}
        
      
      <ul>
      
        <li>
        <Link href="/about">About Us</Link>
        </li>
        <li>
        <Link href="/services">Services</Link>
        </li>
        <li>
        <Link href="/industries">industries</Link>
        </li>
        <li>
        <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
