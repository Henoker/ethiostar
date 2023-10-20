// import Head from 'next/head';
import SEOHead from '../components/SEOHead';
import { About, Hero, Intro, Feedback, MarqueeSlider, Insights, IndustryStats } from '../sections';
import globalMeta from '../constants/globalmeta';

const Page = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/`,
    description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Homepage | Ethiostar America Translation and Localization LLC"
        description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="website"
      />

      <Hero />
      <About />
      {/* <div>
      </div> */}
      {/* <div className="relative"> */}
      {/* <GetStarted /> */}
      {/* <WhatsNew /> */}
      {/* </div> */}

      <Intro />
      <IndustryStats />
      {/* <World /> */}
      <MarqueeSlider />
      {/* <div className="relative"> */}

      <Insights />
      <Feedback />

      {/* </div> */}

    </div>

  );
};

export default Page;
