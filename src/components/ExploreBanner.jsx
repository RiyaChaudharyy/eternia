import exploreBanner from "../assets/exploreBanner.png";

const ExploreBanner = () => (
  <section className="relative h-[400px] flex items-center justify-center text-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${exploreBanner})` }}
    />

    <div className="relative z-10 text-white px-4">
      <h2 className="text-3xl md:text-5xl font-light mb-8 drop-shadow-lg">
        Explore the Windows That Mirror You!
      </h2>
      <button className="border border-white rounded-md hover:bg-white hover:text-black transition-colors px-8 py-3 text-sm tracking-wider">
        Connect with Design Experts
      </button>
    </div>
  </section>
);

export default ExploreBanner;
