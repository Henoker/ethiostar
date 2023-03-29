import { SectionOverview, ServicesHero, ServicesSection, SplitSection } from "../../../sections";
import { Article, TestimonialSolo } from "../../../components";


const Page = () => (
  
  <div className="theme-dark-blue bg-skin-fill">
   <ServicesHero/>
   <SplitSection/>
   <Article/>
   <TestimonialSolo/>
   <ServicesSection/>
   <SectionOverview/>
   <TestimonialSolo/>
  </div>
  
);

export default Page;