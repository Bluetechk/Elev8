import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import MediaWhoWeAre from '../components/MediaWhoWeAre';
import MediaWhatWeDo from '../components/MediaWhatWeDo';
import MediaWhyUs from '../components/MediaWhyUs';
import ContentChallenge from '../components/ContentChallenge';
import MediaImpact from '../components/MediaImpact';
import MediaTestimonials from '../components/MediaTestimonials';

const Elev8Media = () => {
  return (
    <>
      <Seo
        title="Elev8 Media — Branding, Content & Digital Storytelling"
        description="Creative and strategic branding, content creation, and digital storytelling that help you communicate with impact. Shape your narrative with Elev8 Media."
        path="/media"
      />
      <AboutHero
        title="Elev8 Media" 
        subtitle="Shaping the narrative"
        tagline="We provide creative and strategic services in branding, content creation, and digital storytelling."
        showVision={false}
        compact
      />
      <MediaWhoWeAre />
      <MediaWhatWeDo />
      <MediaWhyUs />
      <ContentChallenge />
      <MediaImpact />
      <MediaTestimonials />
    </>
  );
};

export default Elev8Media;
