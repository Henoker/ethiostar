import { TestimonialSolo } from '../components';
import SEOHead from '../components/SEOHead';
import { NewsSection, ServicesHero, ServicesSummary } from '../sections';
import globalMeta from '../constants/globalmeta';

const Services = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services`,
    description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services`}
        structuredData={structuredLd}
        title="Professional Language Services - Translation - Localization| Ethiostar America Translation and Localization LLC!"
        description="Professional Translation Services, including Certified Document & medical translation services, Website, and Software Localizations."
        ogType="article"
      />
      <ServicesHero className="mt-6" />
      <ServicesSummary />
      <TestimonialSolo />
      <NewsSection />
    </div>
  );
};

export default Services;
