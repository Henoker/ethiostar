import SEOHead from '../../components/SEOHead';
import { Feedback, InterpretationHero, InterpretationOverview, LottieAnimation } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const Interpretation = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/interpretation`,
    description: 'Interpretation Services from Certified Legal, Conference and Medical interpreters, Including On-Site and Over-The-Phone interpretation services',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/interpretation`}
        structuredData={structuredLd}
        title="Certified Interpretation Services  |Ethiostar America Translation and Localization LLC!"
        description="Interpretation Services from Certified Legal, Conference and Medical interpreters, Including On-Site and Over-The-Phone interpretation services"
        ogType="article"
      />
      <InterpretationHero />
      <InterpretationOverview />
      <LottieAnimation />
      <Feedback />
    </div>
  );
};

export default Interpretation;
