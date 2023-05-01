// import { NextSeo } from 'next-seo';
import { AboutArticle, AboutFeature, AboutHero, AboutValues, Feedback, OurTeam } from '../../../sections';

export const metadata = {
  title: {

    template: 'About: Ethiostar America LLC',
  },
  description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
};
const Page = () => (
  <div className="theme-dark-blue bg-skin-fill">
    {/* <NextSeo
      title="About"
      description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
      creator="Ethiostar America"
      openGraph={{
        type: 'website',
        url: 'https://ethiostaramerica.com/about',
        title: 'Ethiostar America',
        description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
        images: [
          {
            url: 'https://www.ethiostaramerica.com/my-page-image.jpg',
            width: 1200,
            height: 630,
            alt: 'My Page Image',
          },
        ],
      }}
    />; */}
    <AboutHero />
    <AboutArticle />
    <AboutValues />
    <OurTeam />
    <AboutFeature />
    <Feedback />

  </div>
);

export default Page;
