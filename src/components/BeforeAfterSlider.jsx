import { useState, useEffect, useRef, useCallback } from "react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TextLink from "./TextLink";

import chevronIcon from "../assets/chevronIcon.png";
import patternBackground from "../assets/patternBackground.png";
import imgBefore from "../assets/imgBefore.png";
import imgAfter from "../assets/imgAfter.png";

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <section className="py-[50px] bg-white relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${patternBackground})` }}
      />
      <Container className="relative z-10">
        <SectionHeading title="Where Spaces Come Alive" subtitle />

        <div
          ref={containerRef}
          className="relative w-full aspect-[13/13]  lg:aspect-[21/9] overflow-hidden rounded-lg shadow-2xl select-none touch-none"
        >
          <img
            src={imgAfter}
            alt="After renovation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <span className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wider rounded-sm z-0">
            AFTER
          </span>

          <div
            className="absolute inset-0 overflow-hidden pointer-events-none z-10"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={imgBefore}
              alt="Before renovation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wider rounded-sm">
              BEFORE
            </span>
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{
              left: `${position}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-dark">
              <img src={chevronIcon} />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <TextLink>View All</TextLink>
        </div>
      </Container>
    </section>
  );
};

export default BeforeAfterSlider;
