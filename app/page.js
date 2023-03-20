import { Footer, Navbar} from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-white'>
    <Navbar/>
    
    <Hero />
   
    {/* <div className="relative top-[134px] "> */}
      {/* <About /> */}
      {/* <div className="gradient-03 z-0" />
      <Explore />
    </div> */}
    <div className="relative pt-80">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
     
    <div className='relative'>
    <World />
    </div>
    
    <div className="relative">
      <Insights />
    </div>
   
    <div className="relative">
      <Feedback />
      </div>
     
    <div className='relative'>
    <Footer />
    </div>
   
   
  </div>
);

export default Page;
