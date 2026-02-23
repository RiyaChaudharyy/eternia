import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InnovationDiagram from "./components/InnovationDiagram";
import WhyChooseEternia from "./components/WhyChooseEternia";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Reels from "./components/Reels";
import Articles from "./components/Articles";
import ExploreBanner from "./components/ExploreBanner";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-accent selection:text-white">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar />
      <Hero />
      <Features />
      <InnovationDiagram />
      <WhyChooseEternia />
      <BeforeAfterSlider />
      <Projects />
      <Testimonials />
      <Reels />
      <Articles />
      <ExploreBanner />
      <FAQ />
      <Footer />
    </div>
  );
}