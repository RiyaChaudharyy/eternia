import heroBackground from "../assets/heroBackground.png";


const Hero = () => (
  <header className="relative h-[650px] flex items-center justify-center text-center">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${heroBackground})` }}
    />

    <div className="relative z-10 text-white w-full max-w-4xl px-4 flex flex-col items-center mt-20">
      <h1 className="text-[40px] lg:text-[56px] font-light mb-5 tracking-wide drop-shadow-xl leading-tight">
        Imagine <span className="font-bold">Windows.</span> Not{" "}
        <span className="font-bold">Walls.</span>
      </h1>
      <p className="text-base lg:text-xl mb-[100px] font-light drop-shadow-md text-gray-100 max-w-4xl">
        Luxury aluminium windows and doors designed to bring in light, views and
        lasting strength.
      </p>
      <button
        className="border rounded border-white bg-white/10 backdrop-blur-md
                   hover:bg-white hover:text-primary-dark transition duration-300
                   px-5 py-2.5 text-sm tracking-widest font-medium"
      >
        Book a Window Consultation
      </button>
    </div>
  </header>
);

export default Hero