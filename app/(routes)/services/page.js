import { OurProcess, SectionOverview, ServicesHero, ServicesSection, ServicesSummary, SplitSection } from "../../../sections";
import { Article, TestimonialSolo } from "../../../components";


const Page = () => (
  
  <div className="theme-dark-blue bg-skin-fill">
   <ServicesHero className="mt-6"/>
   <ServicesSummary/>
   <OurProcess/>
   <SplitSection/>
   <Article/>
   <TestimonialSolo/>
   <ServicesSection/>
   <SectionOverview/>
   <TestimonialSolo/>
  </div>
  
);

export default Page;