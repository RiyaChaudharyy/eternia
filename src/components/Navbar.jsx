import { useEffect, useState } from "react";

import { ChevronDown,X,ArrowRight} from "lucide-react";


import logoEternia from "../assets/logoEternia.png";
import logoEterniaDesktop from "../assets/logoEterniaDesktop.png";
import hamburgerIcon from "../assets/hamburgerIcon.png";


const NAV_LINKS = [
  { label: "Products", hasDropdown: true },
  { label: "Why Eternia", hasDropdown: true },
  { label: "Services & Supports" },
  { label: "News and Events" },
  { label: "Help" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center lg:px-4  lg:pt-6">
          <div
            className="w-full max-w-[1240px] flex items-center justify-between px-5 md:px-10 py-3 lg:py-4
                        lg:rounded-xl bg-white  border border-white/20 shadow-lg"
          >
            <img src={logoEternia} alt="Eternia" className="w-[100px] lg:w-[132px] block lg:hidden  " />
            <img src={logoEternia} alt="Eternia" className="w-[100px] lg:w-[132px] hidden lg:block" />

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </a>
              ))}
            </div>

            <button className="hidden lg:flex items-center gap-2 bg-primary text-white hover:text-primary px-6 py-2.5 text-sm  hover:bg-white transition shadow-md rounded-md">
              Book a Consultation <ArrowRight size={16} />
            </button>

            <button
              className="lg:hidden text-white"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <img src={hamburgerIcon}/>
            </button>
          </div>
        </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-primary-dark shadow-2xl
                    transform transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src={logoEterniaDesktop} alt="Eternia" className="w-[100px]" />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white
                         hover:bg-white/5 transition-colors border-b border-white/5"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
            </a>
          ))}
        </div>

        <div className="px-6 pt-4">
          <button
            className="w-full flex items-center justify-center gap-2 bg-white text-primary-dark
                       px-5 py-3 text-sm font-semibold rounded-md hover:bg-gray-100 transition"
            onClick={() => setDrawerOpen(false)}
          >
            Book a Consultation <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};


export default Navbar