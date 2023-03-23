import Marquee from "react-fast-marquee";

const MarqueeSlider = ({ children }) => {
  return (
    <Marquee gradient={false} speed={40} style={{ display: "flex" }}>
      {children}
    </Marquee>
  );
};

export default MarqueeSlider;