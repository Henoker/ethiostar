'use client';

import Link from 'next/link';

const ServicesSummary = () => (

  <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
    <div className="container p-4 mx-auto space-y-16 sm:p-10">
      <div className="space-y-4">
        <h3 className="text-2xl text-white font-bold leading-none sm:text-5xl">Our Services and Solutions</h3>
        <p className="max-w-2xl text-white">Ethiostar America offers high-quality language services using our cutting-edge technology solutions to improve efficiency and reduce costs.!</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 hover:scale-125 ease-in duration-500 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Document Translations</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">Through a rigorous recruitment process and ongoing training, our network of linguists, reviewers, and subject matter experts (SME) ensure that we have the capacity to handle any volume and speed.</p>
            <div className="flex mt-2 space-x-2 pb-4">
              <Link rel="noopener noreferrer" href="/services/translation" title="Document Translation" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 hover:scale-125 ease-in duration-500 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Website Localization</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">Our specialized website localization services combined with visual, cloud-based, and integrated localization tools enable us to be as agile as our clients in this fast faced digital world.</p>
            <div className="flex mt-2 space-x-2 pb-4">
              <a rel="noopener noreferrer" href="/services/localization" title="Website Localization" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 hover:scale-125 ease-in duration-500 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Interpretation</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">We provide certified, professional interpreters with technical and subject matter expertise, allowing you to communicate effectively in more than 125 african and other languages.</p>
            <div className="flex mt-2 space-x-2 pb-4">
              <a rel="noopener noreferrer" href="/services/interpretation" title="Interpretation" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 mx-auto hover:scale-125 ease-in duration-500 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Software Localization</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">Your localization business process is fully managed by our resources specialized in localization as well as other skills such as project management, project engineering and desktop publishing (DTP).</p>
            <div className="flex mt-2 space-x-2 pb-4">
              <a rel="noopener noreferrer" href="/services/localization" title="Software Localization" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center hover:scale-125 ease-in duration-500 rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1572028412480-0a75271c6bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Desktop Publishing</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">Our proofreaders help you to find out if anything goes wrong during typesetting by the printing press or your reviewer and you skipped during your review before sending the document for translation. </p>
            <div className="flex mt-2 space-x-2 pb-4">
              <a rel="noopener noreferrer" href="services/dtp" title="Desktop Publishing" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 mx-auto mb-4 hover:scale-125 ease-in duration-500 bg-center rounded-sm dark:bg-gray-500" src="https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">AI and Machine Translation</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">We employ artificial intelligence and machine learning capabilities to help our clients meet their growing content goals by combining neural machine translation (NMT) with best-practice approaches. </p>
            <div className="flex mt-2 space-x-2 pb-4">
              <Link rel="noopener noreferrer" href="/services/ai-and-machine-translation" title="AI and Machine Translation" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4  bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 mx-auto mb-4 hover:scale-125 ease-in duration-500 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Voiceover Services</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">From television, film, audio-only, and online content to training and e-learning materials, our voiceover actors have the expertise and experience to convey your message to your audiences.</p>
            <div className="flex mt-2 space-x-2 pb-4">
              <a rel="noopener noreferrer" href="/services/audio-services" title="Voiceovers Services" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-[#9fe218] pt-4 overflow-hidden rounded-lg border border-gray-100 shadow-sm">
          <img alt="" className="object-cover h-56 w-56 mx-auto hover:scale-125 ease-in duration-500 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-black font-semibold">Transcription Services</h4>
            <p className="ml-4 mr-4 justify-center text-base leading-relaxed text-gray-900">Ethiostar America uses state of the art platform, AI-based workflow solutions, and a global transcription team to assist organizations with script prep, accessibility needs, legal requests, and other needs.</p>
            <div className="flex mt-2 pb-4 space-x-2">
              <a rel="noopener noreferrer" href="/services/audio-services" title="Transcription Services" className="dark:text-gray-400">
                <button type="button" className="px-8 py-3 font-semibold rounded bg-skin-button-accent hover:bg-skin-button-accent-hover text-gray-100">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSummary;
