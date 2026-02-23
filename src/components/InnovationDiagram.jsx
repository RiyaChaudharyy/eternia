import Container from "./Container";
import SectionHeading from "./SectionHeading";


import patternBackground from "../assets/patternBackground.png";
import diagramDesktop from "../assets/diagramDesktop.svg";
import diagramMobile from "../assets/diagramMobile.png";

const InnovationDiagram = () => (
  <section className="py-[50px] overflow-hidden relative">
    <div
      className="absolute inset-0"
      style={{ backgroundImage: `url(${patternBackground})` }}
    />

    <Container className="relative z-10">
      <SectionHeading title="Where Innovation Meets Precision" subtitle />

      <div className="mt-16 w-full flex justify-center">
        <img
          src={diagramDesktop}
          alt="Innovation Meets Precision"
          className="w-full h-auto object-contain hidden lg:block"
        />
        <img
          src={diagramMobile}
          alt="Innovation Meets Precision"
          className="w-full h-auto object-contain lg:hidden"
        />
      </div>
    </Container>
  </section>
);

export default InnovationDiagram