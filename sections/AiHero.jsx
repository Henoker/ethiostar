'use client';

const AiHero = () => (
  <div className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="mt-12 text-3xl font-semibold text-white lg:text-4xl">
            Overcome the language barrier with  <span className="text-blue-500">Machine Translation</span>
          </h1>
          <p className="mt-3 text-gray-100">
            Ethiostar America provides machine translation service that delivers, {' '}
            <span className="font-medium text-blue-500">fast, high-quality, affordable, and customizable</span> language translation service.
          </p>

        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6 lg:mt-5 lg:w-1/2">
        <img
          className="w-full h-full max-w-md"
          src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="email illustration vector art"
        />
      </div>
    </div>
  </div>

);

export default AiHero;
