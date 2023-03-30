'use client';
import Image from "next/image";
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
    // <section className={`${styles.yPaddings} sm:pl-0 pl-6`}>
    <section className={`${styles.yPaddings} flex flex-col w-full h-screen space-y-2 py-16 md:space-y-4   lg:justify-end lg:pb-12`}>
     <div className="absolute top-6 left-0 w-full h-screen">
     {/* <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen"> */}
        <div className="absolute inset-0 h-screen">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0' 
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="max-w-7xl mx-auto pb-4 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 lg:text-[60px] md:text-[40px] sm:text-[33px] text-[30px] lg:leading-[60px] md:leading-[60px] sm:leading-[54.4px] leading-[44.4px] mx-auto">
                {/* <span className="block xl:inline px-4 mt-8">{currentText}</span>  */}
                <span className="text-2xl font-bold md:text-4xl lg:text-7xl">{currentText}</span> 
               
              </h1>
             
              {/* <div className="flex space-x-4 justify-center mt-4"> */}
            <div className="flex space-x-3 justify-center mt-4">
              <a href="#explore">
                {/* <button type="button" className="flex items-center h-fit text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-[32px] text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 text-center gap-[12px] mr-2 mb-2 hover:from-pink-500 hover:to-purple-500 focus:from-pink-500 focus:to-purple-500"> */}
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

  )
  
};

export default Hero;
