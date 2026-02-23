import { useState } from "react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import HorizontalScroll from "./HorizontalScroll";
import CarouselControls from "./CarouselControls";

import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import projectImg3 from "../assets/projectImg3.png";
import projectImg4 from "../assets/projectImg4.png";
import projectLogo1 from "../assets/projectLogo1.svg";
import projectLogo2 from "../assets/projectLogo2.svg";
import projectLogo3 from "../assets/projectLogo3.svg";
import projectLogo4 from "../assets/projectLogo4.svg";
import patternBackground from "../assets/patternBackground.png";



const PROJECTS_DATA = [
  {
    img: projectImg1,
    logo: projectLogo1,
    name: "Runwal Nirwana",
    desc: "54 Storey Luxury Tower",
  },
  {
    img: projectImg2,
    logo: projectLogo2,
    name: "Rustomjee Reserve",
    desc: "22 Storey High Rise Tower",
  },
  {
    img: projectImg3,
    logo: projectLogo3,
    name: "L&T Seawoods",
    desc: "40 acre Development",
  },
  {
    img: projectImg4,
    logo: projectLogo4,
    name: "Birla Vanya",
    desc: "23 Storeys Tower",
  },
];

const ProjectCard = ({ img, logo, name, desc }) => (
  <div className="min-w-[280px] md:min-w-[298px] rounded h-[360px] snap-center relative group overflow-hidden flex-shrink-0 cursor-pointer">
   <img
  src={img}
  alt={name}
  className="absolute inset-0 w-full h-full object-cover
             scale-105 group-hover:scale-110
             transition-transform duration-700 ease-out
             will-change-transform"
/>

    <div
      className="absolute bottom-5 left-4 right-4
                    bg-white/10 backdrop-blur-md px-3 py-2
                    flex gap-4 rounded-lg"
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-11 h-11 rounded object-contain"
      />
      <div>
        <h4 className="text-white text-base font-medium">{name}</h4>
        <p className="text-gray-300 text-xs">{desc}</p>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotCount = 3;
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % dotCount);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + dotCount) % dotCount);

  return (
    <section className="pt-[50px] pb-[50px] relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${patternBackground})` }}
      />
      <div className="absolute inset-0 top-[360px] bg-primary" />

      <Container className="relative z-10">
        <SectionHeading title="Crafted for Iconic Spaces" subtitle />

        <HorizontalScroll className="gap-4">
          {PROJECTS_DATA.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </HorizontalScroll>

        <CarouselControls
          count={dotCount}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onDotClick={setActiveIndex}
        />
      </Container>
    </section>
  );
};

export default Projects