/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

const SplitSection = () => (
  <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl text-white font-bold">Document Translation</h2>
      </div>
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src="https://images.unsplash.com/photo-1589395937658-0557e7d89fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative flex items-center bg-[#B3FF17]">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-[#B3FF17]" />
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Different languages. One reliable solution.
            </h2>
            <p className="mt-4 text-gray-800">
              By using our document translation services you can be able to communicate with your target
              market efficiently. Ethiostar America is a translation company that can handle any kind of job,
              whether you need a technical paper translated or a marketing campaign localized.

              We work with various clients across a wide range of sectors to provide a professional
              and dependable translation service. Using our vetted network of industry-specialized
              linguists and best-in-class translation technology, we provide consistent and reliable
              african languages translation and localization services.
            </p>
            <a
              href="/quote"
              className="mt-8 inline-block rounded border border-teal-100text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover px-12 py-3 text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:ring active:text-indigo-500"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default SplitSection;
