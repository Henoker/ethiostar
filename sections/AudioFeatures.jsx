'use client';

const AudioFeatures = () => (
  <section className="p-4 lg:p-8 text-gray-100">
    <div className="container mx-auto space-y-12">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="h-80 bg-gray-500 aspect-video" />
        <div className="flex flex-col justify-center flex-1 p-6 bg-[#9fe218] ">
          <span className="text-xs uppercase text-gray-900">Conatct us Now</span>
          <h3 className="text-3xl font-bold text-black">Transcription Services</h3>
          <p className="my-6 text-gray-900">Our transcription services are designed to help you accurately and efficiently transcribe audio and video content in any language. With our cutting-edge technology and experienced transcriptionists, we can deliver high-quality transcriptions that are accurate, clear, and easy to read. We specialize in a variety of transcription services, including legal, medical, academic, and more.</p>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
        <img src="https://images.unsplash.com/photo-1633933304466-2ef96bef43b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
        <div className="flex flex-col justify-center flex-1 p-6 bg-[#9fe218] ">
          <span className="text-xs uppercase text-gray-900">Contact us Now</span>
          <h3 className="text-3xl font-bold text-black">Voiceover services </h3>
          <p className="my-6 text-gray-900">Our voiceover services are perfect for businesses and individuals looking to take their message to a global audience. With our professional voiceover artists, we can provide voiceovers in any language, from English to Mandarin to Arabic. We work closely with you to understand your goals and deliver a voiceover that perfectly captures your message and brand.</p>
        </div>
      </div>
      <div className="container text-white mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">Something totally different</h1>
        <p className="pt-2 pb-8 text-xl font-medium text-center">At our translation company, we
          pride ourselves on delivering exceptional quality and unparalleled customer service. We
          are committed to exceeding your expectations and delivering the best possible service.
          Our team is available around the clock to answer any questions you may have and ensure
          that your project is completed on time and within budget. So why wait? <br /> {' '}
          Contact us today to learn more about our voiceover and transcription services and how
          we can help you take your business to the next level. Our team is standing by to assist
          you and provide you with the highest quality translation services available anywhere.
        </p>
        <a href="#contact">
          <button type="button" className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Order Now</button>
        </a>

      </div>
    </div>
  </section>
);

export default AudioFeatures;
