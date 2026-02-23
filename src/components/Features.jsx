import { useState } from "react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CarouselControls from "./CarouselControls";

import iconEnergyEfficient from "../assets/iconEnergyEfficient.svg";
import iconNoiseInsulation from "../assets/iconNoiseInsulation.svg";
import iconRainwaterInsulation from "../assets/iconRainwaterInsulation.svg";
import iconStormResistant from "../assets/iconStormResistant.svg";


const FEATURES_DATA = [
  {
    icon: iconEnergyEfficient,
    title: "Energy Efficient",
    desc: "Designed to enhance thermal performance while maintaining year-round indoor comfort.",
  },
  {
    icon: iconNoiseInsulation,
    title: "Noise Insulation",
    desc: "Carefully engineered to significantly reduce external noise and create serene living spaces.",
  },
  {
    icon: iconRainwaterInsulation,
    title: "Rainwater Insulation",
    desc: "Precision sealing systems prevent water ingress, even during intense monsoon conditions.",
  },
  {
    icon: iconStormResistant,
    title: "Storm Resistant",
    desc: "Tested to endure high wind loads and extreme weather with lasting reliable strength.",
  },
];



const FeatureCard = ({ icon, title, desc, isActive, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`p-3 lg:p-5 rounded-lg flex flex-col items-center text-center transition-all duration-300 cursor-pointer border ${
      isActive
        ? "bg-accent text-white border-accent shadow-xl shadow-accent/20"
        : "text-primary border-black hover:border-accent/50 hover:shadow-md"
    }`}
  >
    <div className="mb-6">
      <img className={`transition-all duration-300 ${
    isActive ? "brightness-0 invert" : ""
  }`} src={icon} alt={title} width={50} height={50} />
    </div>
    <h3
      className={`text-sm lg:text-xl font-semibold mb-3 ${
        isActive ? "text-white" : "text-primary-dark"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm lg:text-base mb-3 lg:mb-4 leading-relaxed ${
        isActive ? "text-white" : "text-primary"
      }`}
    >
      {desc}
    </p>
    <a
      href="#"
      className={`text-sm font-semibold underline underline-offset-4 mt-auto ${
        isActive ? "text-white" : "text-primary"
      }`}
    >
      Learn More
    </a>
  </div>
);


const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % FEATURES_DATA.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + FEATURES_DATA.length) % FEATURES_DATA.length
    );




  return (
    <section   className="pt-[50px] lg:pt-[100px] pb-[50px] bg-feature">
      <Container>
        <SectionHeading title="Design. Performance. Longevity." subtitle />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES_DATA.map((f, i) => (
            <FeatureCard
              key={i}
              {...f}
              isActive={i === activeIndex}
              onHover={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <CarouselControls
          count={FEATURES_DATA.length}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onDotClick={setActiveIndex}
        />
      </Container>
    </section>
  );
};

export default Features