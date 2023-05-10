import SEOHead from '../components/SEOHead';
import { IndustriesHero, IndustriesOverview } from '../sections';
import globalMeta from '../constants/globalmeta';

const Page = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/industries`,
    description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/industries`}
        structuredData={structuredLd}
        title="Industry Expertise- Industry Solutions In Every Language | Ethiostar America Translation and Localization LLC!"
        description="Our Translation Industry Expertise covering all sorts of technical translation services with high quality and affordable rates."
        ogType="article"
      />
      <IndustriesHero />
      <IndustriesOverview className="mt-12 top-6" />
    </div>
  );
};

export default Page;
