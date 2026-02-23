import { ArrowRight } from "lucide-react";

import Container from "./Container";
import SectionHeading from "./SectionHeading";
import HorizontalScroll from "./HorizontalScroll";
import TextLink from "./TextLink";

import articleImg1 from "../assets/articleImg1.png";
import articleImg2 from "../assets/articleImg2.png";
import articleImg3 from "../assets/articleImg3.png";
import articleImg4 from "../assets/articleImg4.png";
import patternBackground from "../assets/patternBackground.png";



const ARTICLES_DATA = [
    {
        img: articleImg1,
        title:
            "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
    },
    {
        img: articleImg2,
        title:
            "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
    },
    {
        img: articleImg3,
        title:
            "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
    },
    {
        img: articleImg4,
        title:
            "Beyond the Basics: Exploring Unique Window Types for Your Dream Home",
    },
];



const ArticleCard = ({ img, title }) => (
    <div className="group relative rounded h-[380px] overflow-hidden cursor-pointer shadow-lg min-w-[280px] md:min-w-[298px] flex-shrink-0 snap-center">
        <img
            src={img}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md p-3">
            <h4 className="text-white font-medium text-sm leading-snug mb-3">
                {title}
            </h4>
            <span className="flex items-center text-white text-xs font-semibold underline group-hover:text-accent transition-colors">
                Read More <ArrowRight size={14} className="ml-1" />
            </span>
        </div>
    </div>
);



const Articles = () => (
    <section className="py-24 relative">
        <div
            className="absolute inset-0"
            style={{ backgroundImage: `url(${patternBackground})` }}
        />
        <div className="absolute inset-0 top-1/2 bg-primary z-0" />

        <Container className="relative z-10">
            <SectionHeading title="Thoughtful Reads for Modern Living" subtitle />

            <HorizontalScroll className="gap-4 mb-10">
                {ARTICLES_DATA.map((art, i) => (
                    <ArticleCard key={i} {...art} />
                ))}
            </HorizontalScroll>

            <div className="text-center">
                <TextLink light>Explore More</TextLink>
            </div>
        </Container>
    </section>
);


export default Articles