'use client';

const AudioHero = () => (
  <section>
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="mt-12 text-3xl font-semibold text-white lg:text-4xl">
              we offer the <br /> best{' '}
              <span className="text-blue-500 ">voiceover</span> and <br /> {' '}
              <span className="text-blue-500 ">transcription</span> services

            </h1>
            <p className="mt-3 text-gray-200">
              Our team of expert linguists and audio specialists is dedicated to providing
              top-quality services to meet all your needs. Whether you are looking
              to transcribe a legal document or voiceover a commercial video, we have the skills
              and experience necessary to get the job done right.
            </p>
            <a href="#contact">
              <button type="button" className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Contact us Now
              </button>
            </a>

          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl"
            src="/podcast.svg"
            alt="audio.svg"
          />
        </div>
      </div>
    </div>

  </section>

);

export default AudioHero;
