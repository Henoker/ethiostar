import styles from "../styles";

const TestimonialSolo = () => (
    <div className="mx-auto max-w-5xl px-4 py-8">
  <section className="rounded-lg bg-gray-100 p-8">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="aspect-square w-full rounded-lg object-cover"
      />
      <blockquote className="sm:col-span-2">
        <p className="text-xl font-medium sm:text-2xl">
        I needed to translate a complex legal document into several languages, and I was blown away by the quality 
        and professionalism of the translation services provided by this company. 
        They delivered the translations on time. 
        </p>
        <cite className="mt-8 inline-flex items-center not-italic">
          <span className="hidden h-px w-6 bg-gray-400 sm:inline-block" />
          <p className="text-sm uppercase text-gray-500 sm:ml-3">
            <strong>Justin Harrison</strong>, Beatle Inc.
          </p>
        </cite>
      </blockquote>
    </div>
  </section>
</div>


);

export default TestimonialSolo