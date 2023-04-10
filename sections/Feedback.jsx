'use client';
import styles from '../styles';

const Feedback = () => (
  <div className="container px-6 py-12 mx-auto">
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
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
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
              (257) 563-7401
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
              acb@example.com
            </span>
          </p>
        </div>
        <div className="mt-6 w-80 md:mt-8">
          <h3 className="text-gray-300 ">Follow us</h3>
          <div className="flex mt-4 -mx-1.5 ">
            <a
              className="mx-1.5 transition-colors duration-300 transform hover:text-blue-500"
              href="#"
            >
              <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
              </svg>
            </a>
            <a
              className="mx-1.5 hover:text-blue-400 text-gray-400 transition-colors duration-300 transform"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                  fill="currentColor"
                />
                <path
                  d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                  fill="currentColor"
                />
                <path
                  d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="mx-1.5 hover:text-blue-400 text-gray-400 transition-colors duration-300 transform"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="mx-1.5 hover:text-blue-400 text-gray-400 transition-colors duration-300 transform"
              href="#"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:w-1/2 lg:mx-6">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl bg-[#B3FF17] lg:max-w-xl shadow-black/50">
          <h1 className="text-lg font-medium text-gray-900">
            Contact Form
          </h1>
          <form className="mt-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm  text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-900">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-900">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-skin-button-accent hover:bg-skin-button-accent-hover rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  // <section className={`${styles.paddings} theme-dark-blue relative bg-skin-fill`} id="contact">
  //    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  //     <h1 className='text-center justify-center text-3xl text-white mb-6'>Contact Us</h1>
  //     <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
  //       <div className="lg:col-span-2 lg:py-12">
          
  //         <p className="max-w-xl text-lg text-white">
  //           At the same time, the fact that we are wholly owned and totally
  //           independent from manufacturer and other group control gives you
  //           confidence that we will only recommend what is right for you.
  //         </p>
  //         <div className="mt-8">
  //           <a href="" className="text-2xl font-bold text-pink-600">
  //             0151 475 4450
  //           </a>
  //           <address className="mt-2 not-italic text-white">
  //             282 Kevin Brook, Imogeneborough, CA 58517
  //           </address>
  //         </div>
  //       </div>
  //       <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
  //         <form action="" className="space-y-4">
  //           <div>
  //             <label className="sr-only" htmlFor="name">
  //               Name
  //             </label>
  //             <input
  //               className="w-full rounded-lg border-gray-200 bg-slate-100 p-3 text-sm"
  //               placeholder="Name"
  //               type="text"
  //               id="name"
  //             />
  //           </div>
  //           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  //             <div>
  //               <label className="sr-only" htmlFor="email">
  //                 Email
  //               </label>
  //               <input
  //                 className="w-full rounded-lg border-gray-200  bg-slate-100 p-3 text-sm"
  //                 placeholder="Email address"
  //                 type="email"
  //                 id="email"
  //               />
  //             </div>
  //             <div>
  //               <label className="sr-only" htmlFor="phone">
  //                 Phone
  //               </label>
  //               <input
  //                 className="w-full rounded-lg border-gray-200  bg-slate-100 p-3 text-sm"
  //                 placeholder="Phone Number"
  //                 type="tel"
  //                 id="phone"
  //               />
  //             </div>
  //           </div>
            
             
  //           <div>
  //             <label className="sr-only" htmlFor="message">
  //               Message
  //             </label>
  //             <textarea
  //               className="w-full rounded-lg border-gray-200  bg-slate-100 p-3 text-sm"
  //               placeholder="Message"
  //               rows={8}
  //               id="message"
  //               defaultValue={""}
  //             />
  //           </div>
  //           <div className="mt-4">
  //             <button
  //               type="submit"
  //               className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 font-medium text-white sm:w-auto"
  //             >
  //               Send Enquiry
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
     

  // </section>
/* <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="text-gray-200">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
	</form>
</div> */
/* <section className={`${styles.paddings} theme-dark-blue relative bg-skin-fill`} id="contact">
  
</section> */

);

export default Feedback;
