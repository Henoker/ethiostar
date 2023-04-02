'use client';

const ServicesHero = () => (
    <section className="overflow-hidden mt-8 bg-dark-blue sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center sm:text-left">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Enabling customer experiences in every language
      </h2>
      <p className="hidden text-gray-100 md:mt-4 md:block">
        Ethiostar America has extensive experience operating in all industries materials and 
        if you want to specialized Middle Eastern and Africa languages translation and localization,
        services, we offer reliable solutions for your organization.
      </p>
      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-[#B3FF17] px-12 py-3 text-sm font-medium text-black transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
  <img
    alt="Student"
    src="https://images.unsplash.com/photo-1630135485071-ecbd06865017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>

)

export default ServicesHero