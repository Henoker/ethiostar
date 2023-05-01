/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-multi-spaces */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Feedback() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  async function submitHandler(data) {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setAlertMessage('message sent successfully');
        reset();
      } else {
        setError('Failed to submit form.');
      }
    } catch (e) {
      console.error(e);
      setError('Failed to submit form.');
    } finally {
      setLoading(false);
    }
  }

  // function handleResponse(response) {
  //   if (!response.headersSent) {
  //     response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  //   }
  // }
  return (
    <div className="container px-6 py-12 mx-auto" id="contact">
      <div className="lg:flex lg:items-center lg:-mx-6">
        <div className="lg:w-1/2 lg:mx-6">

          <h1 className="text-2xl font-semibold capitalize text-white lg:text-3xl">
            Contact us for <br /> more info
          </h1>
          <div className="mt-6 space-y-8 md:mt-8">
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-400 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="mx-2 text-gray-400 truncate w-72 ">
                Fremont, California
              </span>
            </p>
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="mx-2  truncate w-72 text-gray-400">
                (669) 842-1147
              </span>
            </p>
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="mx-2 truncate w-72 text-gray-400">
                info@ethiostarlocalization.com
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8 lg:w-1/2 lg:mx-6">

          <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl bg-[#B3FF17] lg:max-w-xl shadow-black/50">
            {alertMessage && (

            <div className="flex bg-green-lighter max-w-sm mb-4">
              <div className="w-16 bg-green">
                <div className="p-4">
                  <svg className="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z" /><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z" /></svg>
                </div>
              </div>
              <div className="w-auto text-grey-darker items-center p-4">
                <span className="text-lg font-bold pb-4">
                  Thank you!
                </span>
                <p className="leading-tight">
                  {alertMessage}
                </p>
              </div>
            </div>

            )}
            <h1 className="text-lg font-medium text-gray-900">
              Contact Form
            </h1>
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="mt-6"
              action="/api/submit"
              method="POST"
              // onSubmitCapture={handleResponse}
            >
              <div className="flex-1">
                <label className="block mb-2 text-sm  text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  {...register('Name', { required: 'Please Enter Name' })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {error && <p className="text-red">{error}</p>}
              </div>
              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  {...register('Email', { required: 'Please enter valid email' })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {error && <p className="text-red">{error}</p>}
              </div>
              <div className="w-full mt-6">
                <label className="block mb-2 text-sm text-gray-900">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="message"
                  placeholder="Message"
                  autoComplete="off"
                  {...register('Message', { required: 'Please enter message details' })}
                />
                {error && <p className="text-red">{error}</p>}
              </div>
              <button type="submit" disabled={loading} className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-skin-button-accent hover:bg-skin-button-accent-hover rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
