import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Main = ({ children }) => (
  <>
    <Head>
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
      <meta name="author" content="Ethiostar America" />
      <meta name="author" content="Ethiostar America" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:title" content="Ethiostar Translation and Localization PLC" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EthiostarB" />
      <meta name="twitter:creator" content="@EthiostarB" />
      <meta name="twitter:image" content="https://www.ethiostaramerica.com/card.png" />
      <meta property="og:site_name" content="Ethiostar America" />
      <meta name="og:title" content="Ethiostar America - Translation and Localization LLC" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.ethiostaramerica.com/card.png" />
      <title>Ethiosta America - Homepage</title> */}
    </Head>
    <Navbar />

    {children}
    <Footer />

  </>
);
export default Main;
