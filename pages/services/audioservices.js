import SEOHead from '../../components/SEOHead';
import { AudioFeatures, AudioHero, Feedback } from '../../sections';
import globalMeta from '../../constants/globalmeta';

const AudioServices = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/services/audioservices`,
    description: 'Transcription and Voiceover services',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/services/audioservices`}
        structuredData={structuredLd}
        title="Transcription and Voiceover Services - Audio & Video Certified Transcription Professional Voice-Over Talents |Ethiostar America Translation and Localization LLC!"
        description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="article"
      />
      <AudioHero />
      <AudioFeatures />
      <Feedback />
    </div>
  );
};

export default AudioServices;
