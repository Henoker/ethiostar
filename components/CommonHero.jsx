

const CommonHero = () => (
    <section className="dark:bg-gray-800 text-gray-100">
		<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 className="text-5xl font-bold leading-none sm:text-6xl">
					Ethiostar<span className="text-violet-400"> Interpreting</span> Services
			    </h1>
				<p className="mt-6 mb-8 text-lg sm:mb-12">Contact us today to learn more about how we can 
				<br className="hidden md:inline lg:hidden"/> assist you with your interpretation needs.
			    </p>
				<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a rel="noopener noreferrer" href="#contact" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Contact Us</a>
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Malesuada</a> */}
			    </div>
		    </div>
			<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHpvb20lMjBtZWV0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		    </div>
	    </div>
    </section>   
);

export default CommonHero;

