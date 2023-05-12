import SEOHead from '../../components/SEOHead';
import { DtpFeature, DtpHero, Feedback } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const Dtp = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/dtp`,
    description: 'Multilingual desktop publishing (dtp),dtp,multilingual dtp,document translation services',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/dtp`}
        structuredData={structuredLd}
        title="Desktop Publishing Services |Ethiostar America Translation and Localization LLC!"
        description="Ethiostar America provides professional and competitive multilingual desktop publishing services in over 100+ languages. Expert DTP layout. Fast Turnaround. Get a quote"
        ogType="article"
      />
      <DtpHero />
      <DtpFeature />
      <Feedback />
    </div>
  );
};

export default Dtp;
