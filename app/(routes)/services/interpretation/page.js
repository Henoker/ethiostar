import { CommonHero } from "../../../../components";
import { Feedback, InterpretationOverview, LottieAnimation, SplitSection } from "../../../../sections";


const Page = () => (
    <div className="theme-dark-blue bg-skin-fill">
        <CommonHero/>
        <InterpretationOverview/>
        <LottieAnimation/>
        <Feedback/>
    </div>    

);

export default Page