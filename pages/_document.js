import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
          <meta name="keywords" content="Ethiostar America, african languages, translation, localization, document translation, proofreading, mobile localization, website localization, software localization, interpretation, voiceover, desktop publishing, Fremont, California" />
          <meta property="og:title" content="Ethiostar America - Translation and Localization LLC" />
          <meta property="og:description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
          <meta property="og:image" content="my-website-image.png" />
          <meta property="og:url" content="https://www.ethiostaramerica.com/" />
          <meta name="twitter:title" content="Ethiostar America - Translation and Localization LLC" />
          <meta name="twitter:description" content="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more." />
          <meta name="twitter:image" content="my-website-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

