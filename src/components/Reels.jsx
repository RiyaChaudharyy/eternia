import { useState, useEffect } from "react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CarouselControls from "./CarouselControls";

import reelImg1 from "../assets/reelImg1.png";
import reelImg2 from "../assets/reelImg2.png";
import reelImg3 from "../assets/reelImg3.png";
import reelImg4 from "../assets/reelImg4.png";
import reelImg5 from "../assets/reelImg5.png";

const REELS_DATA = [
  { img: reelImg1, author: "Ms Vidi Duggal" },
  {
    img: reelImg2,
    author: "Ms Ridhi Khosla Jalan",
    title: "Which Window Should I Install?",
  },
  { img: reelImg3, author: "Mr Krsna Mehta", title: "Why I Chose Eternia" },
  { img: reelImg4, author: "Rohina", title: "Weather Proof Windows" },
  { img: reelImg5, author: "Rhea Gandhi" },
];

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const count = REELS_DATA.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % count);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + count) % count);

  const getSlideStyle = (index) => {
    let offset = (index - activeIndex + count) % count;
    if (offset > 2) offset -= count;

    const mobile = {
      0: {
        width: 200,
        height: 352,
        tx: 0,
        scale: 1,
        z: 30,
        opacity: 1,
        brightness: 1,
      },
      1: {
        width: 170,
        height: 300,
        tx: 100,
        scale: 0.92,
        z: 20,
        opacity: 0.9,
        brightness: 0.75,
      },
      "-1": {
        width: 170,
        height: 300,
        tx: -100,
        scale: 0.92,
        z: 20,
        opacity: 0.9,
        brightness: 0.75,
      },
    };

    const desktop = {
      0: {
        width: 380,
        height: 669,
        tx: 0,
        scale: 1,
        z: 30,
        opacity: 1,
        brightness: 1,
      },
      1: {
        width: 350,
        height: 619,
        tx: 280,
        scale: 0.95,
        z: 20,
        opacity: 0.9,
        brightness: 0.75,
      },
      "-1": {
        width: 350,
        height: 619,
        tx: -280,
        scale: 0.95,
        z: 20,
        opacity: 0.9,
        brightness: 0.75,
      },
      2: {
        width: 322,
        height: 569,
        tx: 474,
        scale: 0.9,
        z: 10,
        opacity: 0.7,
        brightness: 0.5,
      },
      "-2": {
        width: 322,
        height: 569,
        tx: -474,
        scale: 0.9,
        z: 10,
        opacity: 0.7,
        brightness: 0.5,
      },
    };

    const lookup = isMobile ? mobile : desktop;
    return (
      lookup[offset] || {
        width: 0,
        height: 0,
        tx: 0,
        scale: 0,
        z: 0,
        opacity: 0,
        brightness: 0.5,
      }
    );
  };

  return (
    <section className="py-[50px] bg-light overflow-hidden">
      <Container>
        <SectionHeading title="Expert-Approved Performance" subtitle />

        <div className="relative h-[400px] md:h-[650px] w-full flex justify-center items-center mt-8 md:mt-12">
          {REELS_DATA.map((vid, index) => {
            const style = getSlideStyle(index);
            let rawOffset = (index - activeIndex + count) % count;
            if (rawOffset > 2) rawOffset -= count;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer shadow-2xl rounded-xl overflow-hidden"
                style={{
                  width: style.width,
                  height: style.height,
                  transform: `translateX(${style.tx}px) scale(${style.scale})`,
                  zIndex: style.z,
                  opacity: style.opacity,
                  filter: `brightness(${style.brightness})`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={vid.img}
                  alt={vid.author}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                {vid.title && rawOffset === 0 && (
                  <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 px-4 mt-12 md:mt-24">
                    <h4 className="text-white font-bold text-base md:text-2xl drop-shadow-lg">
                      {vid.title}
                    </h4>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <CarouselControls
          count={count}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onDotClick={setActiveIndex}
        />
      </Container>
    </section>
  );
};

export default Reels;
