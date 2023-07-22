'use client';

const IndustryStats = () => (
  <section className="p-4 my-6 text-gray-100">
    <div className="container flex flex-row flex-wrap-reverse items-center gap-4 justify-center p-4 mx-auto sm:p-10">
      {/* <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-700 bg-[url('/atalogo.png')] bg-center bg-no-repeat" />
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Proud member of ATA</h3>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">2023</span>
            <button type="button" className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              <img
                src="/ata_logo_footer.png"
                alt="headset"
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-700 bg-[url('/isomix.png')] bg-contain bg-no-repeat" />
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">ISO 17100 certified</h3>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">2023</span>
            <button type="button" className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              <img
                src="/ISO_logo.png"
                alt="headset"
                className="w-[44px] h-[44px] object-contain"
              />
            </button>
          </div>
        </div>
      </div> */}
      <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
              <div className="text-gray-100">
                <p>Proud Member of</p>
              </div>
              <img
                src="/ata.png"
                alt="headset"
                className="w-[144px] h-[144px] object-contain"
              />
              <img
                src="/ISO_logo.png"
                alt="headset"
                className="w-[124px] h-[124px] object-contain"
              />
              <img
                src="/iso9100.png"
                alt="headset"
                className="w-[144px] h-[144px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)' }} />
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
            <button type="button" className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[44px] h-[24px] object-contain"
              />
            </button>
          </div>
        </div>
      </div> */}

    </div>

  </section>
);

export default IndustryStats;
