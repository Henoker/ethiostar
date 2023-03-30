import styles from "../styles";

const OurServices = ({ imgUrl, title, subtitle}) => (
    
    // <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //     <figcaption className="flex items-center justify-center space-x-3">
    //         <img className="rounded-full w-9 h-9 theme-neon bg-skin-fill" src={imgUrl}/>
    //         <div className="space-y-0.5 font-medium dark:text-white text-left">
    //             <div>{title}</div>
    //             {/* <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div> */}
    //         </div>
    //     </figcaption> 
    //     <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //         {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3> */}
    //         <p className="my-4 font-light">{subtitle}</p>
    //     </blockquote>
        
    // </figure>
    <div class="p-6 border-solid border-2 border-gray-200">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-600  rounded-full bg-blue-50">
      <img  class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" src={imgUrl}  />
       
    </div>
    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-200 lg:text-3xl">{title}</h1>
    <p class="mx-auto text-base leading-relaxed text-gray-100">{subtitle}</p>

    <div class="mt-4">
      <a href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
    </div>
  </div>
);

export default OurServices;