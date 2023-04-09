'use client';

const DtpFeature = () => (
    <section className="m-4 md:m-8  text-gray-100">
	<div className="container p-4 mx-auto my-6 space-y-1 text-center">
		<span className="text-xs font-semibold tracking-wider uppercase text-violet-400">DTP Services</span>
		<h2 className="pb-3 text-3xl font-bold md:text-4xl">Take your translated documents to the next level</h2>
		<p>Our team of experienced designers and layout specialists are experts in their craft, 
            and have the skills and tools necessary to create visually stunning documents that 
            are tailored to your brand's unique style and tone. Whether you need a simple brochure
            or a complex technical manual, we can help. Here are just a few of the benefits of 
            partnering with us for your desktop publishing needs:
        </p>
	</div>
	<div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Attention to detail</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">We take great care to ensure that every aspect of your document is perfect, from the formatting and layout to the images and typography.</p>
			<a className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/components">
				
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Consistency</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">We work closely with you to ensure that your translated documents are consistent with your brand's existing materials and messaging.</p>
			<a className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/sections">
				
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Speed</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">We understand that time is of the essence, and we work quickly and efficiently to ensure that your documents are ready when you need them.</p>
			<a className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/templates">
				
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Quality</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">We take pride in delivering high-quality work that exceeds your expectations, and we're always willing to go the extra mile to ensure your satisfaction.</p>
			<a className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/docs">
				
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
		</div>
	</div>
</section>
);

export default DtpFeature;