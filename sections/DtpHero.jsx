'use client';

const DtpHero = () => (
  <section>
    <div className="bg-[#B3FF17]">
      <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Looking to enhance the visual appeal and professionalism of your translated documents? </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">At Ethiostar America, we understand the importance of delivering high-quality translations that not only convey accurate information, but also make a positive impression on your target audience. That's why we offer desktop publishing services that can take your translated documents to the next level.</p>
        <div className="flex flex-wrap justify-center">
          <a href="#contact">
            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Conatct us</button>
          </a>
          <a href="#learn">
            <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
          </a>

        </div>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
  </section>
);

export default DtpHero;
