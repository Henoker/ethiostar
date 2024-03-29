/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

const IndustriesHero = () => (
  <section
    className=" mt-0 sm:grid sm:grid-cols-2 sm:items-center"
  >
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto mt-16 max-w-xl text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-100 md:text-3xl">
          Industry specific solutions for every sector
        </h2>

        <p className="hidden text-gray-100 md:mt-4 md:block">

          As we only collaborate with industry experts, you can be sure that our solutions
          have been developed specifically to address the problems that your customers experience.
          Ethiostar America has earned its name on providing top-notch content for a wide range of
          international sectors. Find out how we can assist you.
        </p>

        <div className="mt-4 md:mt-8">
          <a
            href="#"
            className="inline-block rounded bg-[#9fe218] px-12 py-3 text-sm font-medium text-black transition hover:bg-[#B3FF61] focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>

    <img
      alt="Violin"
      src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
      className="h-full w-full p-9 object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
    />
  </section>

);

export default IndustriesHero;
