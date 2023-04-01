'use client';

const ServicesSummary = () => (
//     <section className=" bg-white dark:bg-gray-200 dark:text-gray-100">
// 	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
// 		<div className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-900">
// 			<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
// 			<div className="p-6 space-y-2 lg:col-span-5">
// 				<h3 className="text-2xl font-semibold sm:text-4xl">
//                     Our Language Services and Solutions
//                 </h3>
// 				<p>Ethiostar America offers high-quality language services using our cutting-edge technology solutions to improve efficiency and reduce costs.</p>
// 			</div>
// 		</div>
// 		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
// 				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
// 				<div className="p-6 space-y-2">
// 					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                         Document Translation</h3>
// 					<p className="text-justify flex-wrap">
//                     Connect your customers to your products and services through documentation in their
//                     language. Our thorough translation process, from project analysis to production and 
//                     post-production, as well as our ISO certifications, ensure the highest level of 
//                     accuracy.
//                     </p>
// 				</div>
// 			</a>
// 		</div>
// 		<div className="flex justify-center">
// 			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
// 		</div>
// 	</div>
// </section>
<section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-2xl text-white font-bold leading-none sm:text-5xl">Our Services and Solutions</h3>
			<p className="max-w-2xl text-white">Ethiostar America offers high-quality language services using our cutting-edge technology solutions to improve efficiency and reduce costs.!</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl text-white font-semibold">Document Translations</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">Website Localization</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">Intrepretation</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">Software Localization</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1572028412480-0a75271c6bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">Desktop Publishing</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">AI and Machine Translation</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">Voiceovers Services</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 w-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
				<div className="flex flex-col items-center">
                <h4 className="text-xl text-white font-semibold">TRANSCRIPTION SERVICES</h4>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Document Translation" className="dark:text-gray-400">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">
                            Read More
                        </button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
);

export default ServicesSummary