// import { NextSeo } from 'next-seo';
import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="theme-dark-blue bg-skin-fill">
    {/* <NextSeo
      title="Home: Ethiostar America LLC"
      description="Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more."
      creator="Ethiostar America"
      openGraph={{
        type: 'website',
        url: 'https://ethiostaramerica.com/home',
        title: 'Ethiostar America',
        description: 'Ethiostar America is a Fremont, California-based translation and localization LLC company. We provide document translation, proofreading, mobile localization, website localization and software localization, interpretation, voiceover, desktop publishing, and more.',
        images: [
          {
            url: 'https://www.mywebsite.com/my-page-image.jpg',
            width: 1200,
            height: 630,
            alt: 'My Page Image',
          },
        ],
      }}
    />; */}

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

export default Page;
