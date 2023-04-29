/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

const AboutHero = () => (

  <section className="overflow-hidden mt-0 bg-[url('/aboutcover.jpg')] bg-cover bg-center bg-no-repeat">
    <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl mt-14 font-bold text-white sm:text-3xl md:text-5xl">
          Ethiostar America
        </h2>
        <p className="hidden max-w-lg text-white mt-4 md:mt-6 md:block md:text-lg md:leading-relaxed">
          Our people are our greatest asset, and we are not merely a translation company.
          We are a group of passionate individuals who consider ourselves a family and strive to become
          the foremost facilitator of global communication.
        </p>
        <div className="mt-4 sm:mt-8">
          <a
            href="#"
            className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Yours Today
          </a>
        </div>
      </div>
    </div>
  </section>

);

export default AboutHero;
