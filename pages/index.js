import { About, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="theme-dark-blue bg-skin-fill">
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
