'use client';
import styles from '../styles';
import { useState } from 'react';


const QuoteContainer = () => {
  // const products = [  { id: 1, name: "Product 1" },  { id: 2, name: "Product 2" },  { id: 3, name: "Product 3" },  { id: 4, name: "Product 4" },];

  // const languages = ["English", "Spanish", "French"];
  
  
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const [wordCount, setWordCount] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  // const handleProductSelection = (productId) => {
  //     setSelectedProduct(productId);
  //   };
  
  const handleWordCountChange = (event) => {
      setWordCount(event.target.value);
    };
  
  const handleSourceLanguageChange = (event) => {
      setSourceLanguage(event.target.value);
    };
  
  const handleTargetLanguageChange = (event) => {
      setTargetLanguage(event.target.value);
    };
  
  const handleCalculatePrice = () => {
      const price = Number(wordCount) * 0.05;
      setTotalPrice(price.toFixed(2));
    };
 
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
          <div class="flex flex-row w-full items-center justify-between">
            <div className='flex flex-col w-full mt-6 items-center justify-center text-left'>
              <div className='flex flex-row w-full'>
                <div className='mt-12 flex flex-col w-full'>
                  <div className='flex flex-row'>
                    <div className='w-full mr-4 ml-0'>
                      <label for="InstantQuoteSourceLanguages"  className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Source Language</label>
                      <div className='flex relative z-[1]'>
                        
                        <select
                         required id="InstantQuoteSourceLanguages" 
                         className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         value={sourceLanguage}
                         onChange={handleSourceLanguageChange}
                         >
                          <option value="" disabled>From</option><option value="acf-LC">Creole French (Saint Lucia)</option><option value="af-ZA">Afrikaans</option><option value="aig-AG">Creole English (Antigua and Barbuda)</option><option value="am-ET">Amharic</option><option value="ar-SA">Arabic</option><option value="az-AZ">Azerbaijani</option><option value="bah-BS">Creole English (Bahamas)</option><option value="be-BY">Belarusian</option><option value="bem-ZM">Bemba</option><option value="bg-BG">Bulgarian</option><option value="bi-VU">Bislama</option><option value="bjs-BB">Bajan</option><option value="bn-IN">Bengali</option><option value="bo-CN">Tibetan</option><option value="br-FR">Breton</option><option value="bs-BA">Bosnian</option><option value="ca-ES">Catalan</option><option value="cb-PH">Cebuano</option><option value="ch-GU">Chamorro</option><option value="crs-SC">Creole French (Seychelles)</option><option value="cs-CZ">Czech</option><option value="cy-GB">Welsh</option><option value="da-DK">Danish</option><option value="de-CH">German (Switzerland)</option><option value="de-DE">German</option><option value="dv-MV">Maldivian</option><option value="dz-BT">Dzongkha</option><option value="el-GR">Greek</option><option selected value="en-GB">English (GB)</option><option value="en-US">English (USA)</option><option value="eo-EU">Esperanto</option><option value="es-419">Spanish (Latin America)</option><option value="es-ES">Spanish (Spain)</option><option value="es-US">Spanish (US)</option><option value="et-EE">Estonian</option><option value="eu-ES">Basque (Euskara)</option><option value="fa-AF">Dari</option><option value="fa-IR">Farsi</option><option value="fi-FI">Finnish</option><option value="fo-FO">Faroese</option><option value="fr-CA">French (Canada)</option><option value="fr-FR">French (France)</option><option value="ga-IE">Irish Gaelic</option><option value="gcl-GD">Creole English (Grenada)</option><option value="gd-GB">Scots Gaelic</option><option value="gl-ES">Galician</option><option value="grc-GR">Classical Greek</option><option value="gu-IN">Gujarati</option><option value="gyn-GY">Creole English (Guyana)</option><option value="ha-NE">Hausa</option><option value="he-IL">Hebrew</option><option value="hi-IN">Hindi</option><option value="hr-HR">Croatian</option><option value="ht-HT">Creole English (Haiti)</option><option value="hu-HU">Hungarian</option><option value="hy-AM">Armenian</option><option value="id-ID">Indonesian</option><option value="is-IS">Icelandic</option><option value="it-CH">Italian (Switzerland)</option><option value="it-IT">Italian</option><option value="ja-JP">Japanese</option><option value="jam-JM">Creole English (Jamaican)</option><option value="jv-ID">Javanese</option><option value="ka-GE">Georgian</option><option value="kl-GL">Inuktitut, Greenlandic</option><option value="kea-CV">Kabuverdianu</option><option value="kk-KZ">Kazakh</option><option value="km-KH">Khmer</option><option value="kn-IN">Kannada</option><option value="ko-KR">Korean</option><option value="ckb-IQ">Kurdish Sorani (Arabic script)</option><option value="ku-TR">Kurdish Kurmanji (Latin script)</option><option value="ky-KG">Kyrgyz</option><option value="la-XN">Latin</option><option value="lb-LU">Luxembourgish</option><option value="ln-LIN">Lingala</option><option value="lo-LA">Lao</option><option value="lt-LT">Lithuanian</option><option value="lv-LV">Latvian</option><option value="mfe-MU">Morisyen</option><option value="mg-MG">Malagasy</option><option value="mi-NZ">Maori</option><option value="mk-MK">Macedonian</option><option value="ml-IN">Malayalam</option><option value="mn-MN">Mongolian</option><option value="mr-IN">Marathi</option><option value="ms-MY">Malay</option><option value="mt-MT">Maltese</option><option value="my-MM">Burmese</option><option value="nb-NO">Norwegian</option><option value="ne-NP">Nepali</option><option value="nl-BE">Dutch (Belgium)</option><option value="nl-NL">Dutch (Netherlands)</option><option value="nso-ZA">Sotho, Southern</option><option value="ny-MW">Nyanja</option><option value="pa-IN">Punjabi</option><option value="pap-CW">Papiamentu</option><option value="pau-PW">Palauan</option><option value="pl-PL">Polish</option><option value="ps-PK">Pashto</option><option value="pt-BR">Portuguese (Brazil)</option><option value="pt-PT">Portuguese (Portugal)</option><option value="qu-PE">Quechua</option><option value="ro-RO">Romanian</option><option value="ru-RU">Russian</option><option value="rn-BI">Kirundi</option><option value="rw-RW">Kinyarwanda</option><option value="si-LK">Sinhala</option><option value="sk-SK">Slovak</option><option value="sl-SI">Slovenian</option><option value="sm-WS">Samoan</option><option value="sn-ZW">Shona</option><option value="so-SO">Somali</option><option value="sq-AL">Albanian</option><option value="sr-Latn-RS">Serbian</option><option value="sr-ME">Montenegrin</option><option value="sv-SE">Swedish</option><option value="svc-VC">Creole English (Saint Vincent and the Grenadines)</option><option value="sw-KE">Swahili</option><option value="ta-LK">Tamil (Sri Lanka)</option><option value="te-IN">Telugu</option><option value="tg-TJ">Tajik</option><option value="th-TH">Thai</option><option value="ti-ET">Tigrinya</option><option value="tk-TM">Turkmen</option><option value="tl-PH">Filipino/Tagalog</option><option value="to-TO">Tongan</option><option value="tpi-PG">Tok Pisin</option><option value="tr-TR">Turkish</option><option value="tn-BW">Tswana</option><option value="uk-UA">Ukrainian</option><option value="ur-PK">Urdu</option><option value="haw-US">Hawaiian</option><option value="uz-UZ">Uzbek</option><option value="vi-VN">Vietnamese</option><option value="vic-US">Creole English (Virgin Islands)</option><option value="xh-ZA">Xhosa</option><option value="yo-NG">Yoruba</option><option value="zdj-KM">Comorian, Ngazidja</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-HK">Chinese (Traditional - Hong Kong)</option><option value="zh-TW">Chinese (Traditional - Taiwan)</option><option value="zu-ZA">Zulu</option><option value="zh-MO">Chinese (Traditional - Macau)</option><option value="fr-CH">French (Switzerland)</option><option value="ar-EG">Arabic (Egypt)</option><option value="ta-IN">Tamil (India)</option><option value="fr-BE">French (Belgium)</option><option value="ar-MA">Moroccan Arabic</option><option value="lg-UG">Ganda</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full mr-4 ml-0 ">
                      <label for="InstantQuoteTargetLanguages" className='block mb-2 text-base font-medium text-gray-900 dark:text-white'>Target Language</label>
                      <div class="flex relative z-[1]">
                        <select 
                        required id="InstantQuoteTargetLanguages" 
                        class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={targetLanguage}
                        onChange={handleTargetLanguageChange}
                        >
                          <option value="" disabled>To</option><option value="acf-LC">Creole French (Saint Lucia)</option><option value="af-ZA">Afrikaans</option><option value="aig-AG">Creole English (Antigua and Barbuda)</option><option value="am-ET">Amharic</option><option value="ar-SA">Arabic</option><option value="az-AZ">Azerbaijani</option><option value="bah-BS">Creole English (Bahamas)</option><option value="be-BY">Belarusian</option><option value="bem-ZM">Bemba</option><option value="bg-BG">Bulgarian</option><option value="bi-VU">Bislama</option><option value="bjs-BB">Bajan</option><option value="bn-IN">Bengali</option><option value="bo-CN">Tibetan</option><option value="br-FR">Breton</option><option value="bs-BA">Bosnian</option><option value="ca-ES">Catalan</option><option value="cb-PH">Cebuano</option><option value="ch-GU">Chamorro</option><option value="crs-SC">Creole French (Seychelles)</option><option value="cs-CZ">Czech</option><option value="cy-GB">Welsh</option><option value="da-DK">Danish</option><option value="de-CH">German (Switzerland)</option><option selected value="de-DE">German</option><option value="dv-MV">Maldivian</option><option value="dz-BT">Dzongkha</option><option value="el-GR">Greek</option><option value="en-GB">English (GB)</option><option value="en-US">English (USA)</option><option value="eo-EU">Esperanto</option><option value="es-419">Spanish (Latin America)</option><option value="es-ES">Spanish (Spain)</option><option value="es-US">Spanish (US)</option><option value="et-EE">Estonian</option><option value="eu-ES">Basque (Euskara)</option><option value="fa-AF">Dari</option><option value="fa-IR">Farsi</option><option value="fi-FI">Finnish</option><option value="fo-FO">Faroese</option><option value="fr-CA">French (Canada)</option><option value="fr-FR">French (France)</option><option value="ga-IE">Irish Gaelic</option><option value="gcl-GD">Creole English (Grenada)</option><option value="gd-GB">Scots Gaelic</option><option value="gl-ES">Galician</option><option value="grc-GR">Classical Greek</option><option value="gu-IN">Gujarati</option><option value="gyn-GY">Creole English (Guyana)</option><option value="ha-NE">Hausa</option><option value="he-IL">Hebrew</option><option value="hi-IN">Hindi</option><option value="hr-HR">Croatian</option><option value="ht-HT">Creole English (Haiti)</option><option value="hu-HU">Hungarian</option><option value="hy-AM">Armenian</option><option value="id-ID">Indonesian</option><option value="is-IS">Icelandic</option><option value="it-CH">Italian (Switzerland)</option><option value="it-IT">Italian</option><option value="ja-JP">Japanese</option><option value="jam-JM">Creole English (Jamaican)</option><option value="jv-ID">Javanese</option><option value="ka-GE">Georgian</option><option value="kl-GL">Inuktitut, Greenlandic</option><option value="kea-CV">Kabuverdianu</option><option value="kk-KZ">Kazakh</option><option value="km-KH">Khmer</option><option value="kn-IN">Kannada</option><option value="ko-KR">Korean</option><option value="ckb-IQ">Kurdish Sorani (Arabic script)</option><option value="ku-TR">Kurdish Kurmanji (Latin script)</option><option value="ky-KG">Kyrgyz</option><option value="la-XN">Latin</option><option value="lb-LU">Luxembourgish</option><option value="ln-LIN">Lingala</option><option value="lo-LA">Lao</option><option value="lt-LT">Lithuanian</option><option value="lv-LV">Latvian</option><option value="mfe-MU">Morisyen</option><option value="mg-MG">Malagasy</option><option value="mi-NZ">Maori</option><option value="mk-MK">Macedonian</option><option value="ml-IN">Malayalam</option><option value="mn-MN">Mongolian</option><option value="mr-IN">Marathi</option><option value="ms-MY">Malay</option><option value="mt-MT">Maltese</option><option value="my-MM">Burmese</option><option value="nb-NO">Norwegian</option><option value="ne-NP">Nepali</option><option value="nl-BE">Dutch (Belgium)</option><option value="nl-NL">Dutch (Netherlands)</option><option value="nso-ZA">Sotho, Southern</option><option value="ny-MW">Nyanja</option><option value="pa-IN">Punjabi</option><option value="pap-CW">Papiamentu</option><option value="pau-PW">Palauan</option><option value="pl-PL">Polish</option><option value="ps-PK">Pashto</option><option value="pt-BR">Portuguese (Brazil)</option><option value="pt-PT">Portuguese (Portugal)</option><option value="qu-PE">Quechua</option><option value="ro-RO">Romanian</option><option value="ru-RU">Russian</option><option value="rn-BI">Kirundi</option><option value="rw-RW">Kinyarwanda</option><option value="si-LK">Sinhala</option><option value="sk-SK">Slovak</option><option value="sl-SI">Slovenian</option><option value="sm-WS">Samoan</option><option value="sn-ZW">Shona</option><option value="so-SO">Somali</option><option value="sq-AL">Albanian</option><option value="sr-Latn-RS">Serbian</option><option value="sr-ME">Montenegrin</option><option value="sv-SE">Swedish</option><option value="svc-VC">Creole English (Saint Vincent and the Grenadines)</option><option value="sw-KE">Swahili</option><option value="ta-LK">Tamil (Sri Lanka)</option><option value="te-IN">Telugu</option><option value="tg-TJ">Tajik</option><option value="th-TH">Thai</option><option value="ti-ET">Tigrinya</option><option value="tk-TM">Turkmen</option><option value="tl-PH">Filipino/Tagalog</option><option value="to-TO">Tongan</option><option value="tpi-PG">Tok Pisin</option><option value="tr-TR">Turkish</option><option value="tn-BW">Tswana</option><option value="uk-UA">Ukrainian</option><option value="ur-PK">Urdu</option><option value="haw-US">Hawaiian</option><option value="uz-UZ">Uzbek</option><option value="vi-VN">Vietnamese</option><option value="vic-US">Creole English (Virgin Islands)</option><option value="xh-ZA">Xhosa</option><option value="yo-NG">Yoruba</option><option value="zdj-KM">Comorian, Ngazidja</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-HK">Chinese (Traditional - Hong Kong)</option><option value="zh-TW">Chinese (Traditional - Taiwan)</option><option value="zu-ZA">Zulu</option><option value="zh-MO">Chinese (Traditional - Macau)</option><option value="fr-CH">French (Switzerland)</option><option value="ar-EG">Arabic (Egypt)</option><option value="ta-IN">Tamil (India)</option><option value="fr-BE">French (Belgium)</option><option value="ar-MA">Moroccan Arabic</option><option value="lg-UG">Ganda</option>
                        </select>
                      </div>
                    </div>
                    
                  </div>
                  <div class="relative flex flex-col ml-0 mt-4 w-full self-end min-w-0">
                      <label for="InstantQuoteWordCount" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Word count</label>
                      <input 
                      id="InstantQuoteWordCount" 
                      value={wordCount}
                      onChange={handleWordCountChange}
                      type="text" 
                      placeholder="write the word count in numbers" 
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                  </div>
                  <div class="realatie flex flex-col flex-[1] self-end min-w-0 mx-4 my-0">
                     
                    <input 
                    type="submit" 
                    class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
                    value="Show prices" 
                    onClick={handleCalculatePrice}
                    />
                  </div>
                </div>
                 
               

          </div>
          <div className="relative flex-[1] flex flex-col items-center  mt-6 pt-2 pb-6 px-4">
          {totalPrice && (
            <div className='mt-6 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
              <h3 className='font-bold text-2xl flex flex-col items-center'> Quote Summary</h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
               Connect with one of our available wallet providers or create a new one.
              </p>
              <div className='my-4 space-y-3'>
                <div className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <img src='/certificate.svg' alt='next' className='h-6' />
                  <p className="font-bold text-lg flex-1 ml-3 whitespace-nowrap">Job:<span className='inline-flex items-center justify-end px-2 py-0.5 ml-3 text-xl font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'>Translation</span></p>
                </div>
                <div className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <img src='/source.svg' alt='next' className='h-6' />
                <p className="font-bold text-lg flex-1 ml-3 whitespace-nowrap">Source Language:<span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xl font-medium text-gray-100 bg-teal-400 rounded dark:bg-gray-700 dark:text-gray-400'>{sourceLanguage}</span></p>
                </div>
                <div className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <img src='/target.svg' alt='next' className='h-6' />
                <p className="font-bold text-lg flex-1 ml-3 whitespace-nowrap">Target Language:<span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xl font-medium text-gray-100 bg-teal-400 rounded dark:bg-gray-700 dark:text-gray-400'>{targetLanguage}</span></p>
                </div>
                <div className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <img src='/count.svg' alt='next' className='h-6' />
                <p className="font-bold text-lg flex-1 ml-3 whitespace-nowrap">Word Count:<span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xl font-medium text-gray-100 bg-rose-400 rounded dark:bg-gray-700 dark:text-gray-400'>{wordCount}</span></p>
                </div>
                <div className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                <img src='/total.svg' alt='next' className='h-6' />
                <p className="font-bold text-lg flex-1 ml-3 whitespace-nowrap">Total Price:<span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xl font-medium text-gray-100 bg-rose-400 rounded dark:bg-gray-700 dark:text-gray-400'>${totalPrice}</span></p>
                </div>
              </div>
            </div>
          )}
                  
          </div>
          <div class="text-sm leading-[26px] mt-[30px]">
		          <span class="text-lg leading-5 font-medium text-blue-700 align-middle m-0 px-3 py-1.5 rounded-2xl bg-skin-button-accent;">Pay after delivery</span> We trust you: feel free to pay within 5 days from delivery via bank transfer, credit card, or PayPal.  <a href="frequently-asked-questions#payments">Learn more</a>
		      </div>

          
        </div>

       </div>
      
     {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
      <h1 className="text-4xl font-bold">
          Welcome to the Price Generator App
        </h1>
        <p className="mt-3 text-xl">
          Please select a product and enter the word count to get a price quote.
        </p> 
        
        <div className="flex justify-center mt-6">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-4 sm:gap-5">
          {products.map((product) => (
            <button
              key={product.id}
              className={`${
                selectedProduct === product.id
                  ? "text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
                  : "text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
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
     </div> */}
    </div>
  </div>
  </section>

)};


  
  
     
        {/* <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-4 sm:gap-5">
          
          
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
        </div> */}


  {/* return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        
      </main>
    </div> */}
    


export default QuoteContainer;
