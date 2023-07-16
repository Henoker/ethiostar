
const TestimonialSolo = () => (
  <div className="mx-auto max-w-5xl px-4 py-8">
    <section className="rounded-lg bg-gray-100 p-8">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
        <img
          alt="Man"
          src="https://upload.wikimedia.org/wikipedia/en/e/ef/International_Organization_for_Migration_logo.png"
          className="aspect-square w-full rounded-lg object-fit"
        />
        <blockquote className="sm:col-span-2">
          <p className="text-xl font-medium sm:text-2xl">
            I would like to write a few words to also express my appreciation to you and your colleagues at Ethiostar Translation PLC.
            We are happy and satisfied with the various translations of our Canadian Orientation Abroad (COA) programme materials.
            You have, no doubt, learned a great deal about Canada in that process!
          </p>
          <cite className="mt-8 inline-flex items-center not-italic">
            <span className="hidden h-px w-6 bg-gray-400 sm:inline-block" />
            <p className="text-sm uppercase text-gray-500 sm:ml-3">
              <strong>International Organization for Migration</strong>,swizerland.
            </p>
          </cite>
        </blockquote>
      </div>
    </section>
  </div>

);

export default TestimonialSolo;
