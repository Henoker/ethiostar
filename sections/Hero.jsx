'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

const images = [
  {
    src: '/planet-07.png',
    alt: 'Image 1',
  },
  {
    src: '/planet-08.png',
    alt: 'Image 2',
  },
  {
    src: '/planet-09.png',
    alt: 'Image 3',
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
  return (
    <section>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to our website</span>
                <span className="block text-indigo-600 xl:inline">
                  Start exploring now!
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
  </section>

  )
  
};

export default Hero;
