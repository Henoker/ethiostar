import { TestimonialSolo, SEOHead } from '../components';

import globalMeta from '../constants/globalmeta';
import { NewsSection, ServicesHero, ServicesSummary } from '../sections';

const Services = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services`,
    description: 'Services Ethiostar America Translation and Localization PLC.',
  });
  return (

    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services`}
        structuredData={structuredLd}
        title="Services | Ethiostar America Translation and Localization LLC!"
        description="Services Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="website"
      />
      <ServicesHero className="mt-6" />
      <ServicesSummary />
      <TestimonialSolo />
      <NewsSection />
    </div>

  );
};

export default Services;
