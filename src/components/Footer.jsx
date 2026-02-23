import React,{ useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "./Container";

import logoHindalco from "../assets/logoHindalco.png";
import logoEternia from "../assets/logoEternia.png";
import iconInstagram from "../assets/iconInstagram.svg";
import iconFacebook from "../assets/iconFacebook.svg";
import iconLinkedin from "../assets/iconLinkedin.svg";
import iconYoutube from "../assets/iconYoutube.svg";


const SOCIAL_LINKS = [
  { icon: iconLinkedin, label: "LinkedIn" },
  { icon: iconFacebook, label: "Facebook" },
  { icon: iconYoutube, label: "YouTube" },
  { icon: iconInstagram, label: "Instagram" },
];


const FOOTER_COLUMNS = [
  {
    heading: "Products",
    groups: [
      {
        label: "By range",
        links: [
          "Eternia Duranium Edge",
          "Eternia Duranium",
          "Eternia Essentials",
        ],
      },
      {
        label: "By type",
        links: [
          "Sliding Windows and Doors",
          "Openable Windows and Doors",
        ],
      },
      {
        label: "By room",
        links: [
          "Living room windows and doors",
          "Bedroom windows and doors",
          "Balcony windows and doors",
          "Kitchen windows and doors",
        ],
      },
    ],
  },
  {
    heading: "Why Eternia",
    groups: [
      {
        links: [
          "Duranium™",
          "WIWA©",
          "Service and support",
          "About Us",
        ],
      },
      {
        label: "Find the right window",
        links: ["Find the right window"],
      },
    ],
  },
  {
    heading: "Features",
    groups: [
      {
        links: [
          "Sound Proof",
          "Energy Efficient",
          "Waterproof",
          "Enhanced Security",
          "Dust and Pollution Proof",
          "Large Openings",
          "Storm Resistant",
          "Low Maintenance",
        ],
      },
    ],
  },
  {
    heading: "Contact & Support",
    groups: [
      {
        links: [
          "Contact Us",
          "FAQ",
          "Privacy Policy",
          "Terms of use",
        ],
      },
    ],
  },
];

/** Accordion item for mobile footer links */
const FooterAccordionItem = ({ heading, groups, isOpen, onToggle }) => (
  <div className="border-b border-gray-300">
    <button
      className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      onClick={onToggle}
    >
      <span className="font-bold text-primary-dark text-xs">{heading}</span>
      <ChevronDown
        size={16}
        className={`text-gray-500 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="space-y-2 text-[11px] text-gray-600">
        {groups.map((group, gi) => (
          <React.Fragment key={gi}>
            {group.label && (
              <li className={`font-semibold text-gray-800 ${gi > 0 ? "pt-2" : ""}`}>
                {group.label}
              </li>
            )}
            {group.links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-accent leading-relaxed">
                  {link}
                </a>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  return (
    <footer className="bg-feature pt-[50px] border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center mb-10 lg:mb-16">
          <div className="flex gap-4 md:gap-12 items-center mb-6">
            <img src={logoEternia} alt="Eternia" className="h-auto w-[100px] md:w-auto" />
            <img src={logoHindalco} alt="Hindalco" className="h-auto w-[80px] md:w-auto" />
          </div>

          <p className="text-xs md:text-sm lg:text-lg text-center text-gray-500 max-w-5xl leading-relaxed px-2">
            Eternia is the latest product offering from Hindalco (Aditya Birla
            Group): India&apos;s first WIWA© tested and certified windows made
            with a specially invented Duranium™ alloy
          </p>

          <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
            {SOCIAL_LINKS.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-[45px] h-[45px] md:w-[45px] md:h-[45px] flex items-center justify-center
                           text-gray-600  transition-colors"
              >
                <img src={icon} alt={label} className="w-[45px] h-[45px] md:w-[45px] md:h-[45px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden mb-8">
          {FOOTER_COLUMNS.map((col, idx) => (
            <FooterAccordionItem
              key={col.heading}
              heading={col.heading}
              groups={col.groups}
              isOpen={openAccordion === idx}
              onToggle={() =>
                setOpenAccordion(openAccordion === idx ? -1 : idx)
              }
            />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 md:gap-x-10 lg:gap-x-[128px] text-sm mb-[50px]">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-primary-dark mb-6">{col.heading}</h4>
              <ul className="space-y-3 text-gray-600">
                {col.groups.map((group, gi) => (
                  <React.Fragment key={gi}>
                    {group.label && (
                      <li
                        className={`font-semibold text-gray-800 ${
                          gi > 0 ? "pt-3" : ""
                        }`}
                      >
                        {group.label}
                      </li>
                    )}
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-accent leading-relaxed">
                          {link}
                        </a>
                      </li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-primary text-white py-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1240px] mx-auto px-4 lg:px-0 text-[10px] md:text-sm text-center leading-relaxed">
            <p>
              Eternia™, Duranium™ and WIWA© are proprietary to Hindalco
              Industries Limited. Hindalco Industries Limited has a patent filed
              right for Duranium alloy. Nothing contained here shall be construed
              as conferring any license or right under a Hindalco trademark,
              copyright or patent. Images on the website are indicative. The final
              product may be different from the images displayed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer