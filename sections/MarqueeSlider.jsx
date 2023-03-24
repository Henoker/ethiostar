'use client';

import Marquee from "../components/MarqueeSlider";


const MarqueeSlider = () => {
 
  return (
    <div className="bg-white h-[160px] overflow-hidden">
    <Marquee>
      <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-gray-800">Our Clients</span>
        <img src="/fifa.svg" alt="logo" className="w-[100px] h-[100px]"/>
      </div>
      {/* Repeat the content for infinite scrolling */}
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/International_Rescue_Committee_Logo.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Ethiopian_Airlines_Logo.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/UNDP_logo.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_ILO.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/UNESCO_logo_English.svg" alt="logo" className="w-[150px] h-[150px]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/CURE_International_Logo.png" alt="logo" className="w-[150px] h-[150px]" />
      </div>
    </Marquee>
  </div>

  );
};

export default MarqueeSlider;
