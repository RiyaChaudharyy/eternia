import { useState } from "react";
import { X,Plus } from "lucide-react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";

const FAQ_DATA = [
  {
    q: "What are the different windows offered by Eternia?",
    a: "Eternia offers aluminium windows and doors of every type, size and colour! Our main offerings include:\n\nSliding aluminium windows and doors\nOpenable/casement aluminium windows and doors.\nWe also offer aluminium windows and doors for all rooms: including living rooms, kitchens and bedrooms.\n\nOur aluminium windows and doors can be classified into Duranium Edge, Duranium and Essentials - which are three ranges of high-quality products designed to ensure that every Indian home can have aluminium windows.",
  },
  {
    q: "Which window is better for me: aluminium, wood or uPVC?",
    a: "Aluminium offers superior strength, slimmer profiles, and requires less maintenance compared to wood or uPVC.",
  },
  {
    q: "Do you manufacture aluminium windows and doors?",
    a: "Yes, we design and manufacture high-quality custom aluminium windows and doors.",
  },
  {
    q: "What are the different colours you offer in aluminium windows?",
    a: "We offer a wide range of powder-coated and anodized finishes to match your aesthetic.",
  },
];

const FaqItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-white pb-2">
    <button
      className="w-full flex justify-between items-center py-4 text-left text-white font-medium
                 hover:text-accent transition-colors focus:outline-none"
      onClick={onToggle}
    >
      <span className="text-sm md:text-base">{question}</span>
      {isOpen ? (
        <X size={20} className="text-accent shrink-0 ml-4" />
      ) : (
        <Plus size={20} className="text-white shrink-0 ml-4" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-sm text-white leading-relaxed whitespace-pre-line">
        {answer}
      </p>
    </div>
  </div>
);


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[100px] bg-primary">
      <Container>
        <SectionHeading title="Frequently Asked Questions" light subtitle />

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <FaqItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ