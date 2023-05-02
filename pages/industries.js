import { IndustriesHero, IndustriesOverview } from '../sections';

const Page = () => (
  <div className="theme-dark-blue bg-skin-fill">
    <IndustriesHero />
    <IndustriesOverview className="mt-12 top-6" />
  </div>
);

export default Page;
