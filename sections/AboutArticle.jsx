'use client';

const AboutArticle = () => (
    <div className="p-5 mx-auto mt-6 sm:p-10 md:p-1 text-gray-100">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Who We Are</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find about our core values ad ethos</p>
	</div>
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Experience the power of African language translations in the heart of America</a>
				{/* <p className="text-xs  text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p> */}
			</div>
			<div className=" text-gray-100">
				<p>Our expert African language translators are dedicated to translating Africa for America, and America for Africa. With our sister comapany that resides in Addis Ababa, Ethiopia, we bridge cultures and unlock the potential of African languages for global success.
                  We understand that accurate translations are essential for effective communication, and we are committed to providing high-quality African language translations for a diverse and connected world.</p>
			</div>
		</div>
	</div>
</div>
);

export default AboutArticle;