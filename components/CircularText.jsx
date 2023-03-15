import React from 'react';

const CircularText = () => {
  return (
    <div className="relative">
      {/* <img src="/image.jpg" alt="image" className="w-full h-auto" /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"> */}
        <div className="relative">
          <svg viewBox="0 0 150 150">
            <defs>
              <path
                id="circlePath"
                d="M250,10
                  a240,240 0 1,0 0,480
                  a240,240 0 1,0 0,-480"
              />
            </defs>
            <text
              className="text-transparent stroke-current stroke-2 animate-spin-slow"
              textLength="1500"
            >
              <textPath xlinkHref="#circlePath">
                Your circular text goes here
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    // </div>
  );
};

export default CircularText;
