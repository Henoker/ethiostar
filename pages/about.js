import SEOHead from '../components/SEOHead';
import { AboutArticle, AboutFeature, AboutHero, AboutValues, Feedback, OurTeam } from '../sections';
import globalMeta from '../constants/globalmeta';

const About = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/about`,
    description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/about`}
        structuredData={structuredLd}
        title="About| Ethiostar America Translation and Localization LLC!"
        description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="article"
      />
      <AboutHero />
      <AboutArticle />
      <AboutValues />
      <OurTeam />
      <AboutFeature />
      <Feedback />

    </div>
  );
};

export default About;
