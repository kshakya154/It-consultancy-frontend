import React from "react";

const logos = [
  {
    src: "/assets/ariba.png",
    alt: "Ariba Network",
  },
  {
    src: "/assets/upwork.png",
    alt: "Upwork",
  },
  {
    src: "/assets/themanifest.png",
    alt: "The Manifest",
  },
  {
    src: "/assets/dmca.png",
    alt: "DMCA",
  },
  {
    src: "/assets/glassdoor.png",
    alt: "Glassdoor",
  },
  {
    src: "/assets/goodfirms.png",
    alt: "GoodFirms",
  },
  {
    src: "/assets/crunchbase.png",
    alt: "Crunchbase",
  },
  {
    src: "/assets/clutch.png",
    alt: "Clutch",
  },
];

const Affiliations = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
};

export default Affiliations;
