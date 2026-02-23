const HorizontalScroll = ({ children, className = "" }) => (
  <div
    className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar ${className}`}
  >
    {children}
  </div>
);

export default HorizontalScroll