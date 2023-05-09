import { SEOHead } from '../components';
import globalMeta from '../constants/globalmeta';
import { IndustriesHero, IndustriesOverview } from '../sections';

const Page = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/industries`,
    description: 'About Ethiostar America Translation and Localization PLC.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/industries`}
        structuredData={structuredLd}
        title="Industries | Ethiostar America Translation and Localization LLC!"
        description="About Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="website"
      />
      <IndustriesHero />
      <IndustriesOverview className="mt-12 top-6" />
    </div>

  );
};

export default Page;
