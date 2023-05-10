import SEOHead from '../components/SEOHead';
import { Feedback, QuoteContainer } from '../sections';
import globalMeta from '../constants/globalmeta';

const Quote = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/quote`,
    description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/quote`}
        structuredData={structuredLd}
        title="Contact us For A Free Translation Quote - Interpretation Quote |Ethiostar America Translation and Localization LLC!"
        description="Contact us for a Risk-Free and Hassle-Free Quote : Translation, Interpretation, Transcription and Localization Services in High Quality."
        ogType="article"
      />
      <QuoteContainer />
      <Feedback />
    </div>
  );
};

export default Quote;
