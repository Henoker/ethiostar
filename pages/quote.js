import { SEOHead } from '../components';
import globalMeta from '../constants/globalmeta';
import { Feedback, QuoteContainer } from '../sections';

const Quote = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/quote`,
    description: 'Quote Ethiostar America Translation and Localization PLC.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/quote`}
        structuredData={structuredLd}
        title="Quote | Ethiostar America Translation and Localization LLC!"
        description="Get Quote Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="website"
      />
      <QuoteContainer />
      <Feedback />
    </div>
  );
};

export default Quote;
