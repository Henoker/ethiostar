import { Headlines, IndustriesHero, IndustriesOverview, IndustryStats } from "../../../sections";


const Page = () => (
    <div className="theme-dark-blue bg-skin-fill">
   <IndustriesHero />
    <IndustriesOverview className="mt-12 top-6"/>
    {/* <IndustryStats className="mt-6"/>
    <Headlines/> */}
   </div>
);

export default Page;