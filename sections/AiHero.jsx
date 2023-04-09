'use client';

import AiLottie from "./AiLottie";

const AiHero = () => (
    <div className="container px-6 py-16 mx-auto">
  <div className="items-center lg:flex">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-white lg:text-4xl">
          Overcome the language barrier with  <span className="text-blue-500">Machine Translation</span>
        </h1>
        <p className="mt-3 text-gray-100">
        Ethistar America uses a neural machine translation service that delivers, {" "}
          <span className="font-medium text-blue-500">fast, high-quality, affordable, and customizable</span> language translation service.
        </p>
     
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
      {/* <img
        className="w-full h-full max-w-md"
        src="https://merakiui.com/images/components/Email-campaign-bro.svg"
        alt="email illustration vector art"
      /> */}
      <AiLottie/>
    </div>
  </div>
</div>

   
);

export default AiHero;