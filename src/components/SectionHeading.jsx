const SectionHeading = ({ title, subtitle = false, light = false }) => (
  <div className="text-center mb-12">
    <h2
      className={`text-[32px] md:text-[32px] lg:text-[48px] mb-[24px] leading-tight ${
        light ? "text-white" : "text-primary"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <div
        className={`w-[150px] lg:w-[470px] h-px mx-auto ${
          light ? "bg-white/60" : "bg-primary"
        }`}
      />
    )}
  </div>
);

export default SectionHeading;
