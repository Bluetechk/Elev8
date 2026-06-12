import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import WelcomeIntro from '../components/WelcomeIntro';
import WelcomeWhy from '../components/WelcomeWhy';
import WelcomeExperience from '../components/WelcomeExperience';
import WelcomeCTA from '../components/WelcomeCTA';

const Welcome = () => {
  return (
    <>
      <Seo
        title="Welcome to College — Your Bridge to Higher Education"
        description="A career and life-readiness program for 12th graders and high-school graduates in Liberia. Step into university with the mindset and tools to succeed."
        path="/welcome"
      />
      <AboutHero
        title={<>Welcome to <br /> College</>} 
        subtitle="The Bridge to Your Future"
        tagline="A career and life-readiness program for 12th grade students and high school graduates in Liberia."
        showVision={false}
        compact
      />
      <WelcomeIntro />
      <WelcomeWhy />
      <WelcomeExperience />
      <WelcomeCTA />
    </>
  );
};

export default Welcome;
