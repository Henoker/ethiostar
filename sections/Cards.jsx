/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { OurServices } from '../components';
import { ourServices } from '../constants';

const Cards = () => (
  // <div className="relative bg-skin-fill max-w-7xl mx-auto overflow-hidden sm:rounded-2xl mb-10">
  //   <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
  //   <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
  //   <div className="relative max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
  //     <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
  //       <span className="block mb-4">Our Services.</span>
  //     </h2>
  //   </div>
  //   <div className=" relative grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 gap-2 md:mb-12 md:grid-cols-4">
  //   {ourServices.map((service) => (
  //           <OurServices key={service.title} {...service} />
  //         ))}
  //   </div>

  // </div>
  <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="relative max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
          <span className="block mb-4">Our Services.</span>
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
        {ourServices.map((service) => (
          <OurServices key={service.title} {...service} />
        ))}

      </div>
    </div>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Why choose us
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          We proudly provide over 200 languages by specializing in african languages.
          We serve Governments, international NGO's, young innovative startups and large global enterprises from varying industries.
          We have optimized our processes to meet their unique needs, adapting from small, on-demand tasks to high-touch, fully managed solutions.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
          <svg
            className="h-10 w-10 text-[#9fe218]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
            Guaranteed Quality
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            We support the world&apos;s best translators with advanced quality assurance processes. And that&apos;s not all: we provide a free comprehensive translation review if you happen to be unsatisfied.
          </p>
        </a>
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
          <svg
            className="h-10 w-10 text-[#9fe218]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
            Pay After Delivery
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            We genuinely trust our clients, which is why we have created the Pay After Delivery model. With Pay After Delivery, you can pay within five days of the translation&apos;s delivery via credit card, bank transfer or Paypal.
          </p>
        </a>
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
          <svg
            className="h-10 w-10 text-[#9fe218]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
            On-Time Delivery
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            We offer the best performance levels in the industry, with an optimized workflow that guarantees over 95% of deliveries on time.
            Plus, in the unlikely event we miss a deadline, we will refund the translation up to its full cost.
          </p>
        </a>

      </div>
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded bg-[#9fe218] px-12 py-3 text-sm font-medium text-black transition hover:bg-teal-100 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Order Today
        </a>
      </div>
    </div>
  </section>

);
export default Cards;
