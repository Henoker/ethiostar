'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} theme-neon bg-skin-fill z-10`} id="explore">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Who We are" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[20px] text-center text-black"
      >
        <span className="font-extrabold text-gray-900">Ethiostar </span> is powered by a team of passionate translators driven by a common pursuit of excellence. As a collective of dedicated professionals, we have established ourselves as leaders in the translation industry across sub-Saharan Africa.{' '}
        <span className="font-extrabold text-gray-900">
          Embracing innovative and progressive technologies,
        </span>{' '}
        we maintain the highest standards in our work. Utilizing cutting-edge quality assurance and project management tools, we ensure that our projects stay on schedule and consistently meet our clients' expectations.{' '}
        With <span className="font-extrabold text-gray-900">ISO 9001 and ISO 17100</span> certifications,
        we are fully committed to delivering {' '}
        <span className="font-extrabold text-gray-900">the utmost quality in translation and localization services </span> to our valued clients.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
