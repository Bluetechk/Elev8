import Seo from '../components/Seo';
import Hero from '../components/Hero';
import BGSection from '../components/BGSection';
import Offerings from '../components/Offerings';
import ServicesGraphic from '../components/ServicesGraphic';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <>
      <Seo
        title="Elev8 Inc. — Rise. Shine. Elevate."
        description="Elev8 Inc. is a youth-focused growth company in Monrovia, Liberia, equipping people and businesses through skills training, media, books, and live experiences across Africa and beyond."
        path="/"
      />
      <Hero />
      <BGSection />
      <ServicesGraphic />
      <Offerings />
      <Testimonials />
      <Partners />
    </>
  );
};

export default Home;
