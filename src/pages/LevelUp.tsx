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
