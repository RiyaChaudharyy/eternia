import Container from "./Container";
import HorizontalScroll from "./HorizontalScroll";
import SectionHeading from "./SectionHeading";


import tickBoxIcon from "../assets/tickBoxIcon.png";
import cardTexture from "../assets/cardTexture.png";
import eterniaFeaturesImg1 from "../assets/eterniaFeatures1.png";
import eterniaFeaturesImg2 from "../assets/eterniaFeatures2.png";
import eterniaFeaturesImg3 from "../assets/eterniaFeatures3.png";
import eterniaFeaturesImg4 from "../assets/eterniaFeatures4.png";

const WHY_CHOOSE_DATA = [
  {
    icon: eterniaFeaturesImg1,
    title: "DURANIUM™",
    subtitle: "Stronger. Sleeker. Smarter.",
    points: [
      "Patented alloy, 40% stronger than standard aluminium.",
      "Enables larger windows with slimmer profiles.",
      "Cyclone-tested for extreme durability & reliability.",
    ],
  },
  {
    icon:eterniaFeaturesImg2,
    title: "WIWA",
    subtitle: "Tested. Trusted. Strong.",
    points: [
      "Windows tested for wind, water, and air performance.",
      "Leak-proof, rattle-free & weather-resistant Windows.",
      "Transparent scoring system for consumer confidence.",
    ],
  },
  {
    icon: eterniaFeaturesImg3,
    title: "SUSTAINABILITY",
    subtitle: "Assured Service Guarantee",
    points: [
      "12-Year Warranty",
      "Dedicated 7-Day Call Center for support.",
      "Rigorous post-installation checks for complete satisfaction.",
    ],
  },
  {
    icon: eterniaFeaturesImg4 ,
    title: "ETERNIA CARE",
    subtitle: "Greener Homes Promise",
    points: [
      "Aluminium - the world's only eternally recyclable material.",
      "GreenPro Certified products for a greener future.",
      "Sustainable production processes for eco-conscious living.",
    ],
  },
];

const WhyChooseCard = ({ icon: Icon, title, subtitle, points }) => (
  <div
    className="shrink-0 w-[294px] lg:w-[298px] relative overflow-hidden rounded-lg border border-white
               px-4 py-5 hover:border-accent/60 hover:shadow-[0_0_20px_rgba(38,166,214,0.15)]
               transition-all duration-300"
  >
    <div
      className="absolute inset-0 rounded"
      style={{ backgroundImage: `url(${cardTexture})` }}
    />

    <div className="relative flex items-center gap-3 mb-3">
      <img src={Icon} />
     
    </div>
    <p className="relative text-[14px] lg:text-[16px] text-white mb-5 font-medium tracking-wide">
      {subtitle}
    </p>
    <div className="relative w-[150px] lg:w-[266px] h-px mx-auto bg-[linear-gradient(90deg,#0E3745_0%,#B1B1B1_52.4%,#0E3745_100%)] mb-5" />
    <ul className="relative space-y-4">
      {points.map((point, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
        >
      <img src={tickBoxIcon} width={20} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhyChooseEternia = () => (
  <section className="py-[50px] bg-primary text-white">
    <Container>
      <SectionHeading title="Why Choose Eternia" light subtitle />

      <HorizontalScroll className="gap-4">
        {WHY_CHOOSE_DATA.map((card, i) => (
          <WhyChooseCard key={i} {...card} />
        ))}
      </HorizontalScroll>
    </Container>
  </section>
);


export default WhyChooseEternia