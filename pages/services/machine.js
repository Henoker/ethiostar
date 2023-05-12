import SEOHead from '../../components/SEOHead';
import { AiFeature, AiHero, Feedback } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const Machine = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/machine`,
    description: "Translate billions of words instantly with Ethiostar America's neural machine translation software",
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/machine`}
        structuredData={structuredLd}
        title="Neural Machine Translation |Ethiostar America Translation and Localization LLC!"
        description="Translate billions of words instantly with Ethiostar America's neural machine translation software"
        ogType="article"
      />

      <AiHero />
      <AiFeature />
      <Feedback />
    </div>

  );
};

export default Machine;
