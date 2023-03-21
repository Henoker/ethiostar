import { Footer, Navbar} from '../components';
import { About, Cards, Intro, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (

 
  <div className="theme-dark-blue bg-skin-fill">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      {/* <div className="gradient-03 z-0" />
      {/* <Cards/> */}
      {/* <Explore /> */}
      {/* <Intro/> */}
    </div> 
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Intro/>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>

   
 
);

export default Page;
