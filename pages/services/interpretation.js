import { Feedback, InterpretationHero, InterpretationOverview, LottieAnimation } from '../../sections';

const Interpretation = () => (
  <div className="theme-dark-blue bg-skin-fill">
    <InterpretationHero />
    <InterpretationOverview />
    <LottieAnimation />
    <Feedback />
  </div>

);

export default Interpretation;
