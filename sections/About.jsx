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
        <span className="font-extrabold text-gray-900">Ethiostar </span> team inspired by a shared goal
        to achieve excellence; we are a group of translators and interpreters working together as partners.
        we&apos;ve been at the forefront of the translation sector, adopting inventive and forward-thinking
        technology to ensure our standards always remain high. We use the latest versions of quality assurance
        and project management tools, keeping our projects on {' '}
        <span className="font-extrabold text-gray-900">
          track and meeting customer expectations
        </span>{' '}
        every time. we have integrated{' '}
        <span className="font-extrabold text-gray-900">ISO 17100</span> into our operations so as to fulfill our
        committement to providing the {' '}
        <span className="font-extrabold text-gray-900">highest standard of translation and localization </span> to our clients.
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
