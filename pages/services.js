import { TestimonialSolo } from '../components';
import { NewsSection, ServicesHero, ServicesSummary } from '../sections';

const Services = () => (

  <div className="theme-dark-blue bg-skin-fill">
    <ServicesHero className="mt-6" />
    <ServicesSummary />
    <TestimonialSolo />
    <NewsSection />
  </div>

);

export default Services;
