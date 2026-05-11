import schoolLogo from '../assets/elev8 school of skill logo.png';
import libraryLogo from '../assets/elev8 library logo.png';
import mediaLogo from '../assets/elev8Media.jpeg';

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-40 transition-opacity duration-500">
          <img src={schoolLogo} alt="Elev8 School of Skills" className="h-24 md:h-36 lg:h-44 object-contain hover:scale-110 transition-all duration-300" />
          <img src={libraryLogo} alt="Elev8 Library" className="h-24 md:h-36 lg:h-44 object-contain hover:scale-110 transition-all duration-300" />
          <img src={mediaLogo} alt="Elev8 Media" className="h-24 md:h-36 lg:h-44 object-contain hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
