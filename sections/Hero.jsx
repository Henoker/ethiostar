'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import CircularText from "../components/CircularText";
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

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const currentImage = images[currentIndex];
  const currentText = currentImage.text;

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
     <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
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
              <h1 className="font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
                <span className="block xl:inline">{currentText}</span> 
                {/* <CircularText/> */}
              </h1>
              {/* <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 mr-2 mb-2">Learn More</button> */}
              <div class="space-y-8 sm:space-y-0 mt-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 relative z-15">
              <a href="#explore">
              <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] bg-[#25618B]:hover:bg-[#25608B] rounded-[32px] gap-[12px]">
              <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Learn More
              </span>
              </button>
              </a>
              <a href="#explore">
              <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
              <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Contact Us
              </span>
              </button>

              </a>
              
                
              </div>
            </div>
          </div>
        </div>
        
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] sm:pt-[350px] pt-[400px] relative z-10">
            <img
              src="/Certification.jpg"
              alt="stamp"
              className="sm:w-[455px] w-[300px] sm:h-[455px] h-[300px] object-contain"
            />
          </div>
       
      
      </div>
  </section>

  )
  
};

export default Hero;
