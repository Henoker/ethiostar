/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

const Footer = () => (

  <footer aria-label="Site Footer" className="theme-dark-blue bg-skin-fill lg:grid lg:grid-cols-5">
    <div className="relative block h-32 lg:col-span-2 lg:h-full">
      <img
        src="https://images.unsplash.com/photo-1601520525445-1039c1fa232b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
    <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span className="text-xs tracking-wide text-gray-100 uppercase">
              Call us
            </span>
            <a
              href="#"
              className="block text-2xl font-medium text-gray-200 hover:opacity-75 sm:text-3xl"
            >
              0123456789
            </a>
          </p>
          <ul className="mt-8 space-y-1 text-sm text-gray-100">
            <li>Monday to Friday: 10am - 5pm</li>
            <li>Weekend: 10am - 3pm</li>
          </ul>
          <ul className="flex gap-6 mt-8">

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-100 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <img
                  src="/logoetam.png"
                  alt="logo"
                  className="w-36 h-36"
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-100 transition hover:opacity-75"
              />
            </li>

          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium text-gray-200">Services</p>
            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/services/translation"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Translation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/localization"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Localization
                  </a>
                </li>
                <li>
                  <a
                    href="/services/interpretation"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Interpretation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/audio-services"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Audio Services
                  </a>
                </li>
                <li>
                  <a
                    href="/services/dtp"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    DTP
                  </a>
                </li>
                <li>
                  <a
                    href="/services/ai-and-machine-translation"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Machine Traslation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="font-medium text-gray-200">Company</p>
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/industries"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-12 mt-12 border-t border-gray-100">
        <div className="sm:flex sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="text-gray-300 transition hover:opacity-75">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
          <p className="mt-8 text-xs text-gray-300 sm:mt-0">
            © 2022. Ethiostar LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>

);

export default Footer;
