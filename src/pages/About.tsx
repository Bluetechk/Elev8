import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import PathsToGrowth from '../components/PathsToGrowth';
import WhatWeOffer from '../components/WhatWeOffer';
import FounderSection from '../components/FounderSection';
import LegendSection from '../components/LegendSection';

const About = () => {
  return (
    <>
      <Seo
        title="About Elev8 Inc. — Our Story & Mission"
        description="Meet the movement behind Elev8 Inc. — our story, our six growth arms, and the founder driving the elevation of people across Liberia, Africa, and beyond."
        path="/about"
      />
      <AboutHero />
      <OurStory />
      <PathsToGrowth />
      <WhatWeOffer />
      <FounderSection />
      <LegendSection />
    </>
  );
};

export default About;
