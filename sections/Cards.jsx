import React from 'react'

const Cards = () => (
  <div className="relative bg-skin-fill max-w-7xl mx-auto overflow-hidden sm:rounded-2xl mb-10">
    <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
    <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
    <div className="relative max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
        <span className="block mb-4">Our Services.</span>
      </h2>
    </div>
    <div className=" relative grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 gap-2 md:mb-12 md:grid-cols-4">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption> 
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption>    
    </figure>
    </div>
      
          
          
          {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img clasNames="rounded-t-lg" src="/language.png" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Document Translation</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> We provide official and non-official document translation services for businesses and individual purposes.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div> */}
        </div>
      
      

    
 
);
export default Cards