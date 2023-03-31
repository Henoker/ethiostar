'use client';

import Marquee from "../components/MarqueeSlider";


const MarqueeSlider = () => {
 
  return (
    <section className="w-full dark:bg-wickeddark">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="pb-12 text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
             Leading organizations around the world <br className="hidden lg:block" />
              Trust Ethiostar America
            </h1>
          </div>
        </div>
      </div>
    </div>
    <section className="bg-neutral-50">
    <div className=" px-5 py-12 mx-auto lg:px-16">
      <div className="flex flex-col w-full mb-8 text-center">
        <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
        We work with clients to support their goals of gaining access to Africa languages through our translation and localization services. 
        </span>
      </div>
      <Marquee>
      <div className="mx-auto text-center">
        <div className="flex items-center space-x-3">
          <div>
            <img
              className="h-8 ml-2 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/International_Rescue_Committee_Logo.svg"
              alt="Figma"
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Ethiopian_Airlines_Logo.svg"
              alt="Framer"
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
              alt="Sketch "
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/UNDP_logo.svg"
              alt="Sketch "
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_ILO.svg"
              alt="Invision"
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b0/UNESCO_logo_English.svg"
              alt="Invision"
            />
          </div>
          <div>
            <img
              className="h-8 lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/CURE_International_Logo.png"
              alt="Invision"
            />
          </div>
          <div>
            <img
              className="h-8 mx-auto lg:h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/FIFA_logo_without_slogan.svg"
              alt="Invision"
            />
          </div>
        </div>
      </div>
      </Marquee>
    </div>
  </section>
  </section>
  //   <div className="bg-white h-[160px] overflow-hidden">
  //   <Marquee>
  //     <div className="flex items-center space-x-2">
  //     <span className="text-lg font-bold text-gray-800">Our Clients</span>
  //       <img src="/fifa.svg" alt="logo" className="w-[100px] h-[100px]"/>
  //     </div>
      
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/International_Rescue_Committee_Logo.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Ethiopian_Airlines_Logo.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/UNDP_logo.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_ILO.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/UNESCO_logo_English.svg" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //     <div className="flex items-center space-x-2 mt-2">
  //       <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/CURE_International_Logo.png" alt="logo" className="w-[150px] h-[150px]" />
  //     </div>
  //   </Marquee>
  // </div>

  );
};

export default MarqueeSlider;
