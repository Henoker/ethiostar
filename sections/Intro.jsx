'use client';

import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import styles from '../styles';

const Intro = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <div className="theme-black-pearl relative bg-skin-fill max-w-6xl overflow-hidden sm:rounded-2xl">
        <img className="absolute inset-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="People working on laptops" />
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90" />
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="text-gray-100 text-1xl font-bold mr-4">Our Track Record</div>
            <div className="border-l border-gray-400 h-8" />
          </div>
          <div className="text-gray-100 text-3xl font-bold ml-0 mt-4 mb-6">Trusted by Many Organizations Throughout the World</div>
          <div className="text-gray-100 text-lg mb-8 max-w-md text-justify">We offer a comprehensive range of language services to meet your global communication needs. With a team of expert translators and state-of-the-art technology, we provide accurate and culturally sensitive translations for all types of content. From document translation to website localization, we are committed to helping you connect with the world.</div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-[#94E958] rounded-lg p-6">
                <div className="text-gray-900">More than</div>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="text-4xl font-bold text-gray-900">
                    {counterOn && <CountUp start={0} end={30} duration={2} delay={0} /> }
                  </div>
                </ScrollTrigger>

                <div className="text-gray-900">Languages Served</div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-[#F1A321] rounded-lg p-6">
                <div className="text-gray-900">More than</div>
                <div className="text-4xl font-bold text-gray-900"> {counterOn && <CountUp start={0} end={150} duration={2} delay={1} /> }</div>
                <div className="text-gray-900">Projects Completed</div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <div className="bg-[#D15D42] rounded-lg p-6">
                <div className="text-gray-900">More than</div>
                <div className="text-4xl font-bold text-gray-900"> {counterOn && <CountUp start={0} end={6} duration={2} delay={2} /> }</div>
                <div className="text-gray-900">MM Words Translated </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Intro;
