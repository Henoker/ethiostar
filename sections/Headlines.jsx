'use client';

const Headlines = () => (
  <section className="w-full bg-white dark:bg-wickeddark">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="pb-12 text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Long headline to turn <br className="hidden lg:block" />
              your visitors into users
            </h1>
            <form
              action=""
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
              className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex"
            >
              <div className="flex-1 min-w-0 revue-form-group">
                <label htmlFor="member_email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  placeholder="Enter your email  "
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                <button
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                  className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </form>
            <div className="sm:max-w-lg sm:flex md:mx-auto">
              <p className="mt-3 text-xs text-gray-500">
                By subscribing, you agree with Revue’s
                <a target="_blank" href="https://www.getrevue.co/terms" rel="noreferrer">
                  Terms of Service
                </a>
                and
                <a target="_blank" href="https://www.getrevue.co/privacy" rel="noreferrer">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="bg-neutral-50">
      <div className=" px-5 py-12 mx-auto lg:px-16">
        <div className="flex flex-col w-full mb-8 text-center">
          <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
            The best front end teams use Wickedtemplates to state their presence.
            <a
              href="https://www.wickedtemplates.com/expo.html"
              className="font-semibold text-blue-600 lg:mb-0 hover:text-blue-500"
            >
              Our customers »
            </a>
          </span>
        </div>
        <div className="mx-auto text-center">
          <div className="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg"
                alt="Figma"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg"
                alt="Framer"
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg"
                alt="Sketch "
              />
            </div>
            <div>
              <img
                className="h-4 mx-auto lg:h-12"
                src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
                alt="Invision"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

);

export default Headlines;
