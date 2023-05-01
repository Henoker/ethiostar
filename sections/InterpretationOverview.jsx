' use client';

const InterpretationOverview = () => (
  <div className=" text-gray-100">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">All the Services you want</h2>
        <p className="mt-4 text-lg dark:text-gray-400">No matter what type of interpretation services you need, our team of experienced interpreters is here to help. Contact us today to learn more about how we can assist you with your interpretation needs.</p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">On-site interpretation</dt>
            <dd className="mt-2 dark:text-gray-400">Our experienced interpreters will accompany you to your event or meeting and provide accurate interpretation in real-time. We offer on-site interpretation for a wide range of events, including conferences, seminars, and business meetings.</dd>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Remote interpretation</dt>
            <dd className="mt-2 dark:text-gray-400">With our remote interpretation services, you can connect with an interpreter from anywhere in the world. Our interpreters are skilled in teleconferencing and videoconferencing, so you can get the interpretation you need no matter where you are.</dd>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Simultaneous interpretation:</dt>
            <dd className="mt-2 dark:text-gray-400">Our interpreters are skilled in simultaneous interpretation, which means they can interpret while the speaker is still speaking. This type of interpretation is commonly used in large events and conferences, where multiple languages are spoken.</dd>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Consecutive interpretation:</dt>
            <dd className="mt-2 dark:text-gray-400">Our interpreters are also skilled in consecutive interpretation, which means they interpret after the speaker has finished speaking. This type of interpretation is commonly used in smaller settings, such as business meetings or negotiations.</dd>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Escort interpretation:</dt>
            <dd className="mt-2 dark:text-gray-400">Our interpreters can accompany you to appointments or meetings where you need interpretation services. This service is ideal for medical appointments, legal meetings, or other one-on-one settings.</dd>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Phone interpretation:</dt>
            <dd className="mt-2 dark:text-gray-400">Our phone interpretation services allow you to connect with an interpreter quickly and easily. This service is ideal for situations where you need interpretation services on short notice.</dd>
          </div>
        </div>

        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div className="ml-3">
            <dt className="text-lg font-medium">Video interpretation:</dt>
            <dd className="mt-2 dark:text-gray-400">Our video interpretation services allow you to connect with an interpreter face-to-face, even if you're in different parts of the world. This service is ideal for situations where you need visual cues and body language to understand the conversation.</dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
);

export default InterpretationOverview;
