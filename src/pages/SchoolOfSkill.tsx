import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import SchoolWhoWeAre from '../components/SchoolWhoWeAre';
import CourseCatalog from '../components/CourseCatalog';
import CodeJuly from '../components/CodeJuly';
import SchoolEnrollBanner from '../components/SchoolEnrollBanner';

const SchoolOfSkill = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Elev8 School of Skills — Learn It. Master It. Live It."
        description="Practical, in-demand skills training and mentorship that move you from learning to earning. Build real, career-ready abilities with Elev8 School of Skills."
        path="/school-of-skill"
      />
      <AboutHero
        title={<>Elev8 School <br /> of Skills</>} 
        subtitle="Learn It. Master It. Live It."
        tagline="We equip individuals with practical, in-demand skills that translate into real opportunities and long-term career growth."
        showVision={false}
      />
      <SchoolWhoWeAre />
      <CourseCatalog />
      <CodeJuly />
      <SchoolEnrollBanner />
    </div>
  );
};

export default SchoolOfSkill;
