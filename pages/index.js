import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const keywords = ['Ethiostar America', 'african languages', 'translation', 'localization', 'document translation', 'proofreading', 'mobile localization', 'website localization', 'software localization', 'interpretation', 'voiceover', 'desktop publishing', 'Fremont, California'];
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <Head>
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
      </Head>
      <NextSeo
        title="Ethiostar America Translation and Localization LLC"
        description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        openGraph={{
          title: 'Ethiostar America - Translation and Localization LLC',
          description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
          images: [
            {
              url: 'https://www.ethiostaramerica.com/',
              alt: 'Ethiostar America',
            },
          ],
        }}
        keywords={keywords}
      />
      <Hero />
      <div>
        <About />
      </div>
      <div className="relative">
        <GetStarted />
        <div />
        <WhatsNew />
      </div>

      <Intro />
      <World />
      <MarqueeSlider />
      <div className="relative">

        <Insights />
        <div />
        <Feedback />

      </div>

    </div>

  );
};

export default Page;
