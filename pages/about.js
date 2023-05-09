import { AboutArticle, AboutFeature, AboutHero, AboutValues, Feedback, OurTeam } from '../sections';

const About = () => (
  <div className="theme-dark-blue bg-skin-fill">
    <AboutHero />
    <AboutArticle />
    <AboutValues />
    <OurTeam />
    <AboutFeature />
    <Feedback />

  </div>
);

export default About;
