import { useState, useEffect } from "react";
import hero1 from "../assets/heroBackground.png";
import hero2 from "../assets/heroBackground2.png";
import hero3 from "../assets/heroBackground3.png";
import hero4 from "../assets/heroBackground4.png";
import CarouselControls from "./CarouselControls";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <header className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-4xl px-4 flex flex-col items-center mt-20">
        <h1 className="text-[40px] lg:text-[56px] font-light mb-5 tracking-wide drop-shadow-xl leading-tight">
          Imagine <span className="font-bold">Windows.</span> Not{" "}
          <span className="font-bold">Walls.</span>
        </h1>

        <p className="text-base lg:text-xl mb-[100px] font-light drop-shadow-md text-gray-100 max-w-4xl">
          Luxury aluminium windows and doors designed to bring in light, views
          and lasting strength.
        </p>

        <button
          className="border rounded border-white bg-white/10 backdrop-blur-md
                     hover:bg-white hover:text-primary-dark transition duration-300
                     px-5 py-2.5 text-sm tracking-widest font-medium"
        >
          Book a Window Consultation
        </button>

        {/* Carousel Controls */}
        <CarouselControls
          count={images.length}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onDotClick={(i) => setActiveIndex(i)}
          light
        />
      </div>
    </header>
  );
};

export default Hero;
