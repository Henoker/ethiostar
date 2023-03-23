import { Footer, Navbar} from '../components';
import { About, Cards, Intro, Feedback, MarqueeSlider, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (

 
  <div className="theme-dark-blue bg-skin-fill">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div> 
    <div className="relative">
      <GetStarted />
      <Cards/>
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    
    <Intro/>
    <World />
    <MarqueeSlider/>
    <div className="relative">
     
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
      
    </div>
    
    <Footer />
  </div>

   
 
);

export default Page;
