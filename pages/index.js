import { NextSeo } from 'next-seo';
import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const keywords = ['Ethiostar America', 'african languages', 'translation', 'localization', 'document translation', 'proofreading', 'mobile localization', 'website localization', 'software localization', 'interpretation', 'voiceover', 'desktop publishing', 'Fremont, California'];
  return (
    <div className="theme-dark-blue bg-skin-fill">
      <NextSeo
        title="Ethiostar America Translation and Localization LLC"
        description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
        openGraph={{
          title: 'Ethiostar America - Translation and Localization LLC',
          description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
          images: [
            {
              url: 'https://www.ethiostaramerica.com/',
              alt: 'Ethiostar America',
            },
          ],
        }}
        keywords={keywords}
      />
      <Hero />
      <div>
        <About />
      </div>
      <div className="relative">
        <GetStarted />
        <div />
        <WhatsNew />
      </div>

      <Intro />
      <World />
      <MarqueeSlider />
      <div className="relative">

        <Insights />
        <div />
        <Feedback />

      </div>

    </div>

  );
};

export default Page;
