/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

// import CookiesPolicy from './CookiesPolicy';

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
              (669) 842-1147
            </a>
          </p>
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
                    href="/services/audioservices"
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
                    href="/services/machine"
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
                    href="/"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Home
                  </a>
                </li>
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
                <li>
                  <a
                    href="/quote"
                    className="text-gray-100 transition hover:opacity-75"
                  >
                    Get Instant Quote
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
                <a href="Terms&conditions.pdf" download className="text-gray-300 transition hover:opacity-75">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="ethiostarPolicy.pdf" download className="text-gray-300 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://facebook.com/ethiostaramerica" target="_blank" aria-label="facebook" className="rounded-md text-gray-100 hover:text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook" className="w-6 h-6 fill-current"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" /></svg>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://linkedin.com/company/ethiostaramerica" target="_blank" aria-label="linkedin" className="rounded-md text-gray-100 hover:text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin" className="w-6 h-6 fill-current"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" /></svg>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://twitter.com/ethiostarusa" target="_blank" aria-label="Twitter" className="rounded-md text-gray-100 hover:text-violet-400">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="https://instagram.com/ethiostaramerica" target="_blank" aria-label="instagram" className="rounded-md text-gray-100 hover:text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram" className="w-6 h-6 fill-current">
                    <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,
                    .42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,
                    .35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <p className="mt-8 text-xs text-gray-300 sm:mt-0">
            © 2022. Ethiostar LLC. All rights reserved.
          </p>
          {/* <CookiesPolicy /> */}
        </div>
      </div>
    </div>
  </footer>

);

Footer.getInitialProps = async ({ req }) => ({ req });

export default Footer;
