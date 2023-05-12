import SEOHead from '../../components/SEOHead';
import { Feedback, OurProcess, ServicesFeature, SplitSection } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const Translation = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/translation`,
    description: "Ethiostar America's translation web services help you reach global markets in hundreds of languages and local dialects",
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/translation`}
        structuredData={structuredLd}
        title="Translation Services in 250+ Languages |Ethiostar America Translation and Localization LLC!"
        description="Ethiostar America's translation web services help you reach global markets in hundreds of languages and local dialects"
        ogType="article"
      />
      <SplitSection />
      <ServicesFeature />
      <OurProcess />
      <Feedback />
    </div>
  );
};

export default Translation;
