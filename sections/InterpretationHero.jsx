'use client';

const InterpretationHero = () => (
  <section className="dark:bg-gray-800 text-gray-100">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-4xl mt-12 font-bold leading-none sm:text-5xl">
          Ethiostar<span className="text-violet-400"> Interpreting</span> Services
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">At Ethiostar, our professional interpretation services
          <br className="hidden md:inline lg:hidden" /> cater to diverse client needs. Our skilled interpreters
          <br className="hidden md:inline lg:hidden" /> excel in various languages, ensuring precise communication.
          <br className="hidden md:inline lg:hidden" /> Whether for conferences, interviews, presentations,
          <br className="hidden md:inline lg:hidden" />  or one-on-one interactions, we provide accurate,
          <br className="hidden md:inline lg:hidden" /> simultaneous, consecutive, or whispered interpretation.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Contact Us</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:py-24 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://images.unsplash.com/photo-1459499362902-55a20553e082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
      </div>
    </div>
  </section>
);

export default InterpretationHero;

