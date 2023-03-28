import { SectionOverview, ServicesSection, SplitSection } from "../../../sections";
import { Article, TestimonialSolo } from "../../../components";


const Page = () => (
  
  <div className="theme-dark-blue bg-skin-fill">
   <SplitSection/>
   <Article/>
   <TestimonialSolo/>
   <ServicesSection/>
   <SectionOverview/>
   <TestimonialSolo/>
  </div>
  
);

export default Page;