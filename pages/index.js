// import Head from 'next/head';
import SEOHead from '../components/SEOHead';
import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World, IndustryStats } from '../sections';
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
      <div>
        <About />
      </div>
      <div className="relative">
        <GetStarted />
        <div />
        <WhatsNew />
      </div>

      <Intro />
      <IndustryStats />
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
