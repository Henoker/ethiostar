/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */

'use client';

import { useState } from 'react';
import styles from '../styles';
import { allLanguages } from '../constants';

const QuoteContainer = () => {
  const [wordCount, setWordCount] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const handleWordCountChange = (event) => {
    setWordCount(event.target.value);
  };

  const handleSourceLanguageChange = (event) => {
    setSourceLanguage(event.target.value);
  };

  const handleTargetLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleCalculatePrice = () => {
    const price = Number(wordCount) * 0.05;
    setTotalPrice(price.toFixed(2));
  };

  return (
    <section className={`${styles.paddings} mt-0`} id="quote">
      <div className="theme-neon relative bg-skin-fill max-w-6xl mt-12 mx-auto overflow-hidden sm:rounded-2xl">
        <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90" />
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
            <span className="block">Professional translations made easy.</span>
          </h2>
          <p className="mt-4 text-md leading-6 text-skin-muted">
            <span className="font-extrabold text-gray-300" /> In a few clicks, input your order and receive your quote right away.
          </p>
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-col w-full mt-6 items-center justify-center text-left">
              <div className="flex flex-row w-full">
                <div className="mt-12 flex flex-col w-full">
                  <div className="flex flex-row">
                    <div className="w-full mr-4 ml-0">
                      <label htmlFor="InstantQuoteSourceLanguages" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Source Language</label>
                      <div className="flex relative z-[1]">

                        <select
                          required id="InstantQuoteSourceLanguages"
                          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={sourceLanguage}
                          onChange={handleSourceLanguageChange}
                        >
                          <option value="" disabled>From</option>
                          {allLanguages
                          && allLanguages.map((language) => (
                            <option
                              key={`${language.name}-matrix`}
                              value={[language.group.toString(), language.name]}
                            >
                              {language.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full mr-4 ml-0 ">
                      <label htmlFor="InstantQuoteTargetLanguages" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Target Language</label>
                      <div className="flex relative z-[1]">
                        <select
                          required id="InstantQuoteTargetLanguages"
                          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={targetLanguage}
                          onChange={handleTargetLanguageChange}
                        >
                          <option value="" disabled>To</option>
                          {allLanguages
                          && allLanguages.map((language) => (
                            <option
                              key={language.name}
                              value={[language.group.toString(), language.name]}
                            >
                              {language.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="relative flex flex-col ml-0 mt-4 w-full self-end min-w-0">
                    <label htmlFor="InstantQuoteWordCount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Word count</label>
                    <input
                      id="InstantQuoteWordCount"
                      value={wordCount}
                      onChange={handleWordCountChange}
                      type="text"
                      placeholder="write the word count in numbers"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="realatie flex flex-col flex-[1] self-end min-w-0 mx-4 my-0">

                    <input
                      type="submit"
                      className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
                      value="Show prices"
                      onClick={handleCalculatePrice}
                    />
                  </div>
                </div>

              </div>
              <div className="relative flex-[1] flex flex-col items-center  mt-6 pt-2 pb-6 px-4">
                {totalPrice && (

                <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                  <h2 className="text-2xl font-semibold">Quote Summary</h2>
                  <ul className="flex flex-col pt-4 space-y-2">
                    <li className="flex items-start justify-between">
                      <h3>Language:
                        <span className="text-sm dark:text-violet-400">Source</span>
                      </h3>
                      <div className="text-right">
                        <span className="block">{sourceLanguage}</span>

                      </div>
                    </li>
                    <li className="flex items-start justify-between">
                      <h3>Language:
                        <span className="text-sm dark:text-violet-400">Target</span>
                      </h3>
                      <div className="text-right">
                        <span className="block">{targetLanguage}</span>
                      </div>
                    </li>
                    <li className="flex items-start justify-between">
                      <h3>Word Count
                        <span className="text-sm dark:text-violet-400">#</span>
                      </h3>
                      <div className="text-right">
                        <span className="block">{wordCount}</span>

                      </div>
                    </li>
                  </ul>
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Rate</span>
                      <span>$0.50</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mt-1 fill-current dark:text-violet-400">
                        <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z" />
                        <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z" />
                      </svg>
                      <span className="dark:text-gray-400">Order until August 31, 2023, get 20% off</span>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between">
                        <span>Total</span>
                        <span className="font-semibold">{totalPrice}</span>
                      </div>
                      <button type="button" className="w-full py-2 font-semibold border rounded text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover">Order Now</button>
                    </div>
                  </div>
                </div>
                )}

              </div>
              <div className="text-sm leading-[26px] mt-[30px]">
                <span className="text-lg leading-5 font-medium text-blue-700 align-middle m-0 px-3 py-1.5 rounded-2xl bg-skin-button-accent;">Pay after delivery</span> We trust you: feel free to pay within 5 days from delivery via bank transfer, credit card, or PayPal.  <a href="frequently-asked-questions#payments">Learn more</a>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Why choose us
          </h2>
          <p className="mt-4 text-gray-300 text-justify">
            We proudly provide over 200 languages by specializing in african languages.
            We serve Governments, international NGO's, young innovative startups and large global enterprises from varying industries.
            We have optimized our processes to meet their unique needs, adapting from small, on-demand tasks to high-touch, fully managed solutions.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              className="h-10 w-10 text-[#B3FF17]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">
              Guaranteed Quality
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              We support the world&apos;s best translators with advanced quality assurance processes. And that&apos;s not all: we provide a free comprehensive translation review if you happen to be unsatisfied.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              className="h-10 w-10 text-[#B3FF17]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">
              Pay After Delivery
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              We genuinely trust our clients, which is why we have created the Pay After Delivery model. With Pay After Delivery, you can pay within five days of the translation&apos;s delivery via credit card, bank transfer or Paypal.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
            href="/services/digital-campaigns"
          >
            <svg
              className="h-10 w-10 text-[#B3FF17]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-white">
              On-Time Delivery
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              We offer the best performance levels in the industry, with an optimized workflow that guarantees over 95% of deliveries on time.
              Plus, in the unlikely event we miss a deadline, we will refund the translation up to its full cost.
            </p>
          </a>

        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-[#B3FF17] px-12 py-3 text-sm font-medium text-black transition hover:bg-teal-100 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Order Today
          </a>
        </div>
      </div>
      {/* <div className='w-full max-w-6xl mx-auto overflow-hidden sm:rounded-2xl'>
    <div className="bg-white py-24 sm:py-32 mt-4">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              Push to deploy
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Morbi viverra dui mi arcu sed. Tellus semper adipiscing
              suspendisse semper morbi. Odio urna massa nunc massa.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              SSL certificates
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget. Sem sodales gravida quam turpis enim lacus amet.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              Simple queues
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
              Lobortis auctor congue commodo diam neque.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              Advanced security
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
              aliquet hac quis. Id hac maecenas ac donec pharetra eget.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  </div> */}
    </section>

  );
};

export default QuoteContainer;
