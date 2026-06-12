import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import Innov8Intro from '../components/Innov8Intro';
import Innov8Why from '../components/Innov8Why';
import Innov8Experience from '../components/Innov8Experience';
import Innov8Audience from '../components/Innov8Audience';
import Innov8CTA from '../components/Innov8CTA';

const Innov8 = () => {
  return (
    <>
      <Seo
        title="Innov8 Afrika — Where Ideas Become Impact"
        description="A virtual conference for African entrepreneurs, creators, and innovators building solutions and shaping the continent's future. Join Innov8 Afrika."
        path="/innov8"
      />
      <AboutHero
        title={<>Innov8 <br /> Afrika</>} 
        subtitle="Where Ideas Become Impact"
        tagline="Raising a generation of Africans who don’t just consume opportunities—but create them."
        showVision={false}
        compact
      />
      <Innov8Intro />
      <Innov8Why />
      <Innov8Experience />
      <Innov8Audience />
      <Innov8CTA />
    </>
  );
};

export default Innov8;
