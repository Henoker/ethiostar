'use client';


const IndustriesOverview = () => (
    <section className= "text-gray-200 top-8">
		<div className="container p-4 mt-12 mx-auto text-center">
			<h2 className="text-4xl font-bold">Curated Language Solution for Every Industry</h2>
	    </div>
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className=" block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Legal Translation</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>Our legal translation services include critical documents such as Court Orders, Contracts, Legal disclaimers,
					Agreements, Affidavits, Registration documentation, Certifications, Arbitration, among others.
				</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className=" bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Legal</h3>
					{/* <span className="text-x text-gray-800">January 21, 2021</span> */}
					<p>Our legal translation services include critical documents such as Court Orders, Contracts, Legal disclaimers,
					Agreements, Affidavits, Registration documentation, Certifications, Arbitration, among others.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="  bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1575320181282-9afab399332c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Government & NGO's</h3>
					
					<p>we translate government content such as policies, records, correspondence, texts of laws, regulations, statistics, and scientific and technical information more locally relevant and up-to-date with our end-to-end content and translation management solutions. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className=" bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Health Sector</h3>
					<p>We offer medical translation on medical reports, research papers, patents, medical product documentation, publicity, marketing material, case reports, clinical trials, medical Studies, contracts, training materials, scientific articles.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className=" bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
				<div className="p-6 space-y-2  text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">IT & Software</h3>
					<p>
					We provide Content and language solutions for the high-tech industry. Our specialized services includes in software, game, electronics appliances, and mobile app localization. we offer integrated localization services using our agile technologies.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className=" bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Education</h3>
					<p> We provide language translation and localization services for online learning, eLearning and mobile learning, content and courseware for global enterprises and government agencies, as well as educational institutions.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className=" bg-[#B3FF17] max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Other Sectors</h3>
					<p>We also offer translation services in Media & Entertainment, Oil & Gas, Finance and Banking, Life Science, Travel and Hospitality, Manufacturing, Agriculture, Media & Publishing and many more. </p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
</section>
);


export default IndustriesOverview;