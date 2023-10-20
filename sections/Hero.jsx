'use client';

// import Image from 'next/image';
import { useState, useEffect } from 'react';
// import styles from '../styles';

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
    text: 'Connecting success through exceptional translation services',
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
    <section>
      <div className="w-full bg-center bg-cover h-[38rem] filter brightness-50" style={{ backgroundImage: `url(${currentImage.src})` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-purple-200 to-green-300 ">
              <span className="text-4xl mx-2 justify-center mt-8 xs:text-5xl md:text-6xl">{currentText}</span>
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
    </section>

  );
};

export default Hero;
