import { useState, useEffect } from "react";

import SectionHeading from "./SectionHeading";
import CarouselControls from "./CarouselControls";
import TextLink from "./TextLink";


import quoteIcon from "../assets/quoteIcon.png";


const TESTIMONIALS_DATA = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  text: "Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.",
  author: "Mr. Vinod Mittal",
}));

const TestimonialCard = ({ text, author }) => (
  <div
    className="h-full bg-[#0a4a5c] border border-white/10 p-6 flex flex-col
               rounded-lg hover:border-accent/40 transition-colors gap-3"
  >
                 <img src={quoteIcon} width={43} />

    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
      {text}
    </p>
      <div className=" h-[1px]
    bg-[linear-gradient(90deg,rgba(153,153,153,0)_0%,rgba(255,255,255,0.8)_26.92%,rgba(255,255,255,0.8)_70%,rgba(153,153,153,0)_100%)]">
  </div>

      <p className="text-white font-semibold text-sm">{author}</p>
    
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - cardsToShow);
  const handleNext = () =>
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const handlePrev = () =>
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const gapPx = 16;

  return (
    <section className="py-[50px] bg-primary">
      <div className="px-4">
        <SectionHeading
          title="What Our Customers Have to Say"
          subtitle
          light
        />

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gapPx}px`,
              transform: `translateX(calc(-${activeIndex} * (${100 / cardsToShow}% + ${gapPx / cardsToShow}px)))`,
            }}
          >
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / cardsToShow}% - ${(gapPx * (cardsToShow - 1)) / cardsToShow}px)`,
                }}
              >
                <TestimonialCard text={t.text} author={t.author} />
              </div>
            ))}
          </div>
        </div>

        <CarouselControls
          count={maxIndex + 1}
          activeIndex={activeIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onDotClick={setActiveIndex}
          light
        />

        <div className="text-center mt-10">
          <TextLink light>Explore More</TextLink>
        </div>
      </div>
    </section>
  );
};

export default Testimonials