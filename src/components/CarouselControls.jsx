import { ArrowRight, ArrowLeft, } from "lucide-react";

const CarouselControls = ({
  count = 3,
  activeIndex = 0,
  onNext,
  onPrev,
  onDotClick,
  light = false,
}) => (
  <div className="flex justify-center items-center gap-4 mt-12">
    <button
      onClick={onPrev}
      aria-label="Previous slide"
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${
        light
          ? "border-white/30 text-white hover:bg-white hover:text-primary-dark"
          : "border-gray-300 text-gray-500 hover:text-primary-dark hover:border-primary-dark bg-white"
      }`}
    >
      <ArrowLeft size={18} />
    </button>

    <div className="flex items-center gap-2 px-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick?.(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2.5 rounded-full transition-all cursor-pointer ${
            i === activeIndex
              ? `w-8 ${light ? "bg-white" : "bg-primary-dark"}`
              : `w-2.5 ${
                  light
                    ? "bg-white/40 hover:bg-white/60"
                    : "bg-gray-300 hover:bg-gray-400"
                }`
          }`}
        />
      ))}
    </div>

    <button
      onClick={onNext}
      aria-label="Next slide"
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${
        light
          ? "border-white/30 text-white hover:bg-white hover:text-primary-dark"
          : "border-gray-300 text-primary-dark hover:bg-primary-dark hover:text-white bg-white"
      }`}
    >
      <ArrowRight size={18} />
    </button>
  </div>
);

export default CarouselControls