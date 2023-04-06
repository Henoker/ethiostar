'use client';
import React from 'react';
import { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import languages from '../constants/languages.json';


const LottieAnimation = () => {
      return <main className="bg-gray-50 dark:bg-gray-900">
      
  
      <div className="mx-auto container p-6 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Your messages.</span>
          <span className="block text-amber-500">Purely delivered.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-6">
          <Lottie animationData={languages}  />
        </div>
      </div>
      </main>
//     const options = {
//         animationData: languages,
//         loop: true

//       };
    
//       const { View } = useLottie(options);
    
//       return <div className="flex flex-col  mx-auto overflow-hidden rounded">
//             <div className='lg:flex-shrink-0'>{View}</div>;
//       </div>
      

};

export default LottieAnimation;