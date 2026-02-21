import React from "react";
import AboutHero from "../components/About-Page-Components/AboutHero";
import AboutMission from "../components/About-Page-Components/AboutMission";
import AboutWhatWeDo from "../components/About-Page-Components/AboutWhatWeDo";
import AboutTechnologyIndex from "../components/About-Page-Components/AboutTechnologyIndex";
function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutWhatWeDo />
      <AboutTechnologyIndex />
    </div>
  );
}

export default AboutPage;
