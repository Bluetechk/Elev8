import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import LevelUpIntro from '../components/LevelUpIntro';
import LevelUpWhy from '../components/LevelUpWhy';
import LevelUpAudience from '../components/LevelUpAudience';
import LevelUpExpectations from '../components/LevelUpExpectations';
import LevelUpRegistration from '../components/LevelUpRegistration';
import LevelUpCTA from '../components/LevelUpCTA';

const LevelUp = () => {
  return (
    <>
      <Seo
        title="Level Up Conference — Design Your Year"
        description="Elev8's flagship annual experience. Start your year with clarity, intention, and momentum — design, don't drift through, your year at Level Up."
        path="/levelup"
      />
      <AboutHero
        title={<>Level <br /> Up</>} 
        subtitle="Annual Experience"
        tagline="Design—not drift through—your year with clarity, intention, and unstoppable momentum."
        showVision={false}
        compact
      />
      <LevelUpIntro />
      <LevelUpWhy />
      <LevelUpAudience />
      <LevelUpExpectations />
      <LevelUpRegistration />
      <LevelUpCTA />
    </>
  );
};

export default LevelUp;
