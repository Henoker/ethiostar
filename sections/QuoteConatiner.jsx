'use client';
import styles from '../styles';

const QuoteContainer = () => {
 
  return (
    <section className={`${styles.paddings}`} id="quote">
    <div className="theme-neon relative bg-skin-fill max-w-6xl mx-auto overflow-hidden sm:rounded-2xl">
   <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
   <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
   <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
     <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
       <span className="block">Professional translations made easy.</span>
     </h2>
     <p className="mt-4 text-md leading-6 text-skin-muted">
       <span className='font-extrabold text-gray-300'></span> In a few clicks, input your order and receive your quote right away.</p>
     
     <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
     </div>
    </div>
  </div>
  </section>

)};


    // const products = [  { id: 1, name: "Product 1" },  { id: 2, name: "Product 2" },  { id: 3, name: "Product 3" },  { id: 4, name: "Product 4" },];

    // const languages = ["English", "Spanish", "French"];
    
    
    //   const [selectedProduct, setSelectedProduct] = useState(null);
    //   const [wordCount, setWordCount] = useState("");
    //   const [sourceLanguage, setSourceLanguage] = useState("");
    //   const [targetLanguage, setTargetLanguage] = useState("");
    //   const [totalPrice, setTotalPrice] = useState("");
    
    //   const handleProductSelection = (productId) => {
    //     setSelectedProduct(productId);
    //   };
    
    //   const handleWordCountChange = (event) => {
    //     setWordCount(event.target.value);
    //   };
    
    //   const handleSourceLanguageChange = (event) => {
    //     setSourceLanguage(event.target.value);
    //   };
    
    //   const handleTargetLanguageChange = (event) => {
    //     setTargetLanguage(event.target.value);
    //   };
    
    //   const handleCalculatePrice = () => {
    //     const price = Number(wordCount) * 0.05;
    //     setTotalPrice(price.toFixed(2));
    //   };
  
     
        {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-4 sm:gap-5">
          
          
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
        </div> */}


  {/* return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to the Price Generator App
        </h1>
        <p className="mt-3 text-xl">
          Please select a product and enter the word count to get a price quote.
        </p>
        <div className="flex justify-center mt-6">
          {products.map((product) => (
            <button
              key={product.id}
              className={`${
                selectedProduct === product.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 mr-4 rounded`}
              onClick={() => handleProductSelection(product.id)}
            >
              {product.name}
            </button>
          ))}
        </div>
        {selectedProduct && (
          <div className="flex flex-col items-center mt-6">
            <div className="flex flex-col items-center">
              <label className="block text-gray-700 font-bold mb-2">
                Word Count
              </label>
              <input
                type="number"
                value={wordCount}
                onChange={handleWordCountChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the word count"
              />
            </div>
            <div className="flex flex-col items-center mt-6">
              <label className="block text-gray-700 font-bold mb-2">
                Source Language
              </label>
              <select
                value={sourceLanguage}
                onChange={handleSourceLanguageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select the source language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center mt-6">
              <label className="block text-gray-700 font-bold mb-2">
                Target Language
              </label>
              <select
                value={targetLanguage}
                onChange={handleTargetLanguageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select the target language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleCalculatePrice}
            >
              Calculate Price
            </button>
            {totalPrice && (
              <p className="mt-6 text-xl font-bold">
                Total Price: ${totalPrice}
              </p>
            )}
          </div>
        )}
      </main>
    </div> */}
    


export default QuoteContainer;
