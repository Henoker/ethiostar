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
              </h1>
            </div>
          </div>
        </div>

      
      </div>
  </section>

  )
  
};

export default Hero;
