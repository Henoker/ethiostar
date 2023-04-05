'use client';
import React from 'react';
import { useLottie } from "lottie-react";
import languages from '../constants/languages.json';


const LottieAnimation = () => {
    const options = {
        animationData: languages,
        loop: true

      };
    
      const { View } = useLottie(options);
    
      return <div className="flex flex-col  mx-auto overflow-hidden rounded">
            <div className='h-full w-full'>{View}</div>;
      </div>
      

};

export default LottieAnimation;