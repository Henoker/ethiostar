import { Navbar, Footer } from '../components';
import '../styles/globals.css';

export const metadata = {
  title: 'My Title',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <title>Ethiostar America LLC</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
      <meta name="keywords" content="Ethiostar America, african languages, translation, localization, document translation, proofreading, mobile localization, website localization, software localization, interpretation, voiceover, desktop publishing, Fremont, California" />
      <meta name="author" content="Ethiostar America" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ethiostar America - Translation and Localization LLC" />
      <meta property="og:description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
      <meta property="og:image" content="/ethiostar-america-logo.png" />
      <meta property="og:url" content="https://www.ethiostaramerica.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ethiostar America" />
      <meta name="twitter:title" content="Ethiostar America - Translation and Localization LLC" />
      <meta name="twitter:description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
      <meta name="twitter:image" content="/ethiostar-america-logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
