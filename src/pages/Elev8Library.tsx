import AboutHero from '../components/AboutHero';
import LibraryAbout from '../components/LibraryAbout';
import LibraryServices from '../components/LibraryServices';
import LibraryMembership from '../components/LibraryMembership';
import LibraryVision from '../components/LibraryVision';
import LibraryCTA from '../components/LibraryCTA';

const Elev8Library = () => {
  return (
    <>
      <AboutHero
        title="Elev8 Library"
        subtitle="Let's Make Reading Sexy Again"
        tagline="We are cultivating a culture of reading, thinking, and intellectual growth through access to learning resources."
        showVision={false}
        compact
      />
      <LibraryAbout />
      <LibraryServices />
      <LibraryMembership />
      <LibraryVision />
      <LibraryCTA />
    </>
  );
};

export default Elev8Library;
