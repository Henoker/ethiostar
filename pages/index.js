import { SEOHead } from '../components';
import globalMeta from '../constants/globalmeta';
import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/cool-article`,
    description: "NextJs Head, a reliable guide for how to use it and what it's really for.",
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="HomePage | Ethiostar America Translation and Localization LLC"
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
