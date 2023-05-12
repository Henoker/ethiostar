import SEOHead from '../../components/SEOHead';
import { Feedback, LocalizationFeature, LocalizationHero } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const Localization = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/localization`,
    description: 'Localization Services for Software, Websites and Smart Phone Applications in High Quality, and Within the Most Affordable Rates in the market.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/localization`}
        structuredData={structuredLd}
        title="Localization Services - Software, Website & APP Localization |Ethiostar America Translation and Localization LLC!"
        description="Localization Services for Software, Websites and Smart Phone Applications in High Quality, and Within the Most Affordable Rates in the market."
        ogType="article"
      />
      <LocalizationHero />
      <LocalizationFeature />
      <Feedback />
    </div>

  );
};

export default Localization;
