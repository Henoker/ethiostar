/* eslint-disable jsx-a11y/anchor-is-valid */

const OurServices = ({ imgUrl, title, subtitle }) => (

  <div className="p-6 bg-[#F8F8F8] border-solid rounded-lg shadow-sm border-2 border-gray-200 transition hover:border-teal-700/10 hover:shadow-teal-100/10">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-blue-500  rounded-full bg-[#B3FF17]">
      <img className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" src={imgUrl} />

    </div>
    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl">{title}</h1>
    <p className="mx-auto text-base leading-relaxed text-gray-900">{subtitle}</p>

    <div className="mt-4">
      <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
    </div>
  </div>
);

export default OurServices;
