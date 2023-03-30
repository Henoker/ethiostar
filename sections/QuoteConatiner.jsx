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
    <section className={`${styles.paddings} mt-20`} id="quote">
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
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Why choose us
        </h2>
        <p className="mt-4 text-gray-300 text-justify">
          We proudly provide over 200 languages by specializing in african languages. 
          We serve Governments, international NGO's, young innovative startups and large global enterprises from varying industries.
          We have optimized our processes to meet their unique needs, adapting from small, on-demand tasks to high-touch, fully managed solutions.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
           <svg 
          className="h-10 w-10 text-[#B3FF17]"
          fill="none" 
          stroke="currentColor" 
          stroke-width="1.5" 
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
          </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
            Guaranteed Quality
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            We support the world&apos;s best translators with advanced quality assurance processes. And that&apos;s not all: we provide a free comprehensive translation review if you happen to be unsatisfied.
          </p>
        </a>
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
         <svg
         className="h-10 w-10 text-[#B3FF17]"
         fill="none" 
         stroke="currentColor" 
         stroke-width="1.5" 
         viewBox="0 0 24 24" 
         xmlns="http://www.w3.org/2000/svg" 
         aria-hidden="true">
         <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
         </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
          Pay After Delivery
          </h2>
          <p className="mt-1 text-sm text-gray-300">
          We genuinely trust our clients, which is why we have created the Pay After Delivery model. With Pay After Delivery, you can pay within five days of the translation&apos;s delivery via credit card, bank transfer or Paypal.
          </p>
        </a>
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
          href="/services/digital-campaigns"
        >
        <svg 
        className="h-10 w-10 text-[#B3FF17]"
        fill="none" 
        stroke="currentColor" 
        stroke-width="1.5" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
          <h2 className="mt-4 text-xl font-bold text-white">
           On-Time Delivery
          </h2>
          <p className="mt-1 text-sm text-gray-300">
          We offer the best performance levels in the industry, with an optimized workflow that guarantees over 95% of deliveries on time. 
          Plus, in the unlikely event we miss a deadline, we will refund the translation up to its full cost.
          </p>
        </a>
        
      </div>
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded bg-[#B3FF17] px-12 py-3 text-sm font-medium text-black transition hover:bg-teal-100 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Order Today
        </a>
      </div>
  </div>
  <div className='w-full max-w-6xl mx-auto overflow-hidden sm:rounded-2xl'>
    <div className="bg-white py-24 sm:py-32 mt-4">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              Push to deploy
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Morbi viverra dui mi arcu sed. Tellus semper adipiscing
              suspendisse semper morbi. Odio urna massa nunc massa.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              SSL certificates
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget. Sem sodales gravida quam turpis enim lacus amet.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              Simple queues
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
              Lobortis auctor congue commodo diam neque.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              Advanced security
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
              aliquet hac quis. Id hac maecenas ac donec pharetra eget.
            </dd>
          </div>
        </dl>
      </div>
    </div>
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
