'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles';

const images = [
  {
    src: '/translation4.jpg',
    alt: 'Image 1',
    text: 'Helping you to speak to the world. We deliver what you mean.',
  },
  {
    src: '/translation3.jpg',
    alt: 'Image 2',
    text: ' With our Language specialists, We serve your business.',
  },
  {
    src: '/GoldenGate.jpg',
    alt: 'Image 3',
    text: 'Bridging success by providing best translation services.',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const currentImage = images[currentIndex];
  const currentText = currentImage.text;

  return (
    <section className={`${styles.yPaddings} overflow-hidden flex flex-col w-full h-screen space-y-2 py-16 md:space-y-4 lg:justify-end lg:pb-12`}>
      <div className="absolute top-0 left-0 right-0 w-full h-screen">
        <div className="absolute inset-0 h-screen w-full">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gray-900 opacity-75" />

        <div className="absolute inset-0 flex justify-center items-center">
          {/* <div className="max-w-7xl mt-12 mx-auto pb-4 px-4 sm:px-6 lg:px-8"> */}
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <div className="text-center">
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 lg:text-[60px] md:text-[40px] sm:text-[33px] text-[30px] lg:leading-[60px] md:leading-[60px] sm:leading-[54.4px] leading-[44.4px] mx-auto">
                <span className="text-4xl xs:text-5xl md:text-6xl mt-8">{currentText}</span>

              </h1>

              <div className="flex space-x-3 justify-center mt-4">
                <a href="#explore">
                  <button type="button" className="bannerButton rounded-[32px] text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:from-pink-500 hover:to-purple-500 focus:from-pink-500 focus:to-purple-500">
                    <img
                      src="/headset.svg"
                      alt="headset"
                      className="w-[24px] h-[24px] object-contain"
                    />
                    <span className="font-normal text-[16px]">Learn More</span>
                  </button>
                </a>
                <a href="#contact">
                  <button type="button" className="bannerButton bg-gradient-to-r from-green-400 to-blue-600 focus:outline-none rounded-[32px] hover:from-blue-600 hover:to-green-400 focus:from-blue-600 focus:to-green-400">
                    <img
                      src="/headset.svg"
                      alt="headset"
                      className="w-[24px] h-[24px] object-contain"
                    />
                    <span className="font-normal text-[16px] text-white">Contact Us</span>
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    /* <div */
    /* //   className="w-full h-[38rem]
    //   bg-[url(https://i0.wp.com/www.ethiostarlocalization.com/wp-content/uploads/2023/02/IMG_1556-scaled.jpg?fit=2560%2C1707&ssl=1)] bg-cover bg-center bg-no-repeat"
    // >
    //   <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
    //     <div className="text-center">
    //       <h1 className="text-3xl font-semibold text-white lg:text-4xl">
    //         Build your new <span className="text-blue-400">Saas</span> Project
    //       </h1>
    //       <button type="button" className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
    //         Start project
    //       </button>
    //     </div>
    //   </div>
    // </div> */

  );
};

export default Hero;
