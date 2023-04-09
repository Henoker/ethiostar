'use client';

import AiLottie from "./AiLottie";

const AiFeature = () => (
    <section className="bg-white">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 text-center capitalize lg:text-3xl">
      Our Machine Translation Services
    </h1>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      {/* <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      /> */}
      <AiLottie/>
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        {/* <p className="text-sm text-blue-500 uppercase">category</p> */}
        <a
          href="#"
          className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
        >
          All the features you want to know
        </a>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
        At Ethisotar America, where we believe that communication should never
        be a barrier. With the help of AI and machine translation, we provide accurate and timely 
        translations that will allow you to connect with the world in a whole new way. With our 
        cutting-edge software, we can translate text, audio, and video content with unparalleled accuracy.
        Whether you're a business looking to expand your global reach or an individual seeking to 
        communicate with friends and family abroad, our AI and machine translation technology can help 
        you do so with ease. Our team of skilled translators and AI technology work together to ensure 
        that your content is translated accurately and in a timely manner.
        Don't let language barriers hold you back any longer. With our AI and machine translation 
        technology, you can communicate with the world in a whole new way. Contact us today to 
        learn more about how we can help you achieve your communication goals.
        </p>
      </div>
    </div>
  </div>
</section>

);

export default AiFeature;