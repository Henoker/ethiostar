import { SEOHead } from '../components';
import globalMeta from '../constants/globalmeta';
import { AboutArticle, AboutFeature, AboutHero, AboutValues, Feedback, OurTeam } from '../sections';

const About = () => {
  const structuredLd = JSON.stringify({
    '@context': `${globalMeta.canonicalUrl}/about`,
    description: 'About Ethiostar America Translation and Localization PLC.',
  });
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <SEOHead
        canonicalUrl={`${globalMeta.siteUrl}/about`}
        structuredData={structuredLd}
        title="About | Ethiostar America Translation and Localization LLC!"
        description="About Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        ogType="website"
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
