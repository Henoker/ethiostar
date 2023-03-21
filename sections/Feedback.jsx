'use client';
import styles from '../styles';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
     <div className="theme-swiss relative bg-skin-fill max-w-6xl mx-auto overflow-hidden sm:rounded-2xl">
    <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
    <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
    <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
        <span className="block">Tell us what you think.</span>
        {/* <span className="block">We handle the distribution.</span> */}
      </h2>
      <p className="mt-4 text-md leading-6 text-skin-muted"><span className='font-extrabold text-gray-300'>Note:</span> Sending us your contact details means we can respond to your enquiry. We will use your contact details only for the purpose for which you provided it. We promise not give your contact details to anyone else without your consent.</p>
      <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md mt-8">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                  <input type="text" name="phone-number" id="last-name" autocomplete="Phone" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div class="col-span-6">
                  <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                  <textarea id="message" name="message" rows="3" className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="message"></textarea>
                </div>

              {/* <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div> */}
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center text-skin-base bg-skin-button-muted items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-90 hover:bg-opacity-100 sm:px-8">Send Message</button>
            </div>
          </div>
          </form>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
     
        {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          
          
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
        </div> */}
      </div>
    </div>
  </div>
  </section>
);

export default Feedback;
