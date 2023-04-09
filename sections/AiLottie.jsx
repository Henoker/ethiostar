'use client';
import React from 'react';
import Lottie from "lottie-react";
import ailottie from "../constants/ailottie.json";


const AiLottie = () => {
    return <main className="bg-gray-50 dark:bg-gray-900">
    <div className="mx-auto container p-6 lg:flex lg:items-center lg:justify-between">
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-6">
          <Lottie animationData={ailottie}  />
        </div>
      </div>
    </main>
}
      
       

export default AiLottie;