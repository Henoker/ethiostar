'use client';

const SplitSection = () => (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
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
      <div className="relative flex items-center bg-gray-100">
        <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100" />
        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Enabling customer experiences in every language
          </h2>
          <p className="mt-4 text-gray-600">
        Ethiostar America has extensive experience operating in all industries materials and 
        if you want to specialized Middle Eastern and Africa languages translation and localization,
        services, we offer reliable solutions for your organization.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


);

export default SplitSection