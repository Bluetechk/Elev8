import { motion } from 'framer-motion';
import { ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

const Footer = () => {
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Map Facebook links to specific pages
  const getFacebookLink = () => {
    switch (location.pathname) {
      case '/school-of-skill':
        return "https://www.facebook.com/share/p/1B81Ga5FKG/";
      case '/library':
        return "https://www.facebook.com/share/p/183yeiZx22/";
      case '/media':
        return "https://www.facebook.com/share/p/1E1HrozgNY/";
      default:
        return "https://www.facebook.com/profile.php?id=61566349948896";
    }
  };

  // Map Instagram links to specific pages
  const getInstagramLink = () => {
    switch (location.pathname) {
      case '/library':
        return "https://www.instagram.com/elev8.library/";
      case '/media':
        return "https://www.instagram.com/elev8.media231/";
      default:
        return "https://www.instagram.com/we_elev8/";
    }
  };

  const facebookLink = getFacebookLink();
  const instagramLink = getInstagramLink();

  return (
    <footer className="w-full bg-[#0A0D14] text-white">
      {/* Final CTA Section — hidden on the contact page (it's already the contact section) */}
      {location.pathname !== '/contact' && (
        <section className="relative py-24 px-6 overflow-hidden">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#004D40] to-secondary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />

          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
                READY TO <span className="text-secondary italic">ELEVATE</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold mb-12 uppercase tracking-widest text-white/80">
                Take the first step <span className="text-secondary">NOW!</span>
              </p>

              <Link to="/contact">
                <button className="bg-white text-primary px-12 py-5 font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:bg-secondary hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                  Contact Us Today
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-secondary/20">8</div>
              <span className="text-2xl font-black tracking-tighter uppercase">Elev8</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium">
              We exist to equip individuals and businesses to live intentionally, grow purposefully, and impact meaningfully across Africa and beyond.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-white/60">
                <FacebookIcon size={18} />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-white/60">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/company/we-elev8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-white/60">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links: Businesses */}
          <div>
            <h4 className="text-secondary text-xs font-black uppercase tracking-[0.3em] mb-8">Our Businesses</h4>
            <ul className="space-y-4">
              {[
                { name: 'School of Skills', path: '/school-of-skill' },
                { name: 'Elev8 Media', path: '/media' },
                { name: 'Elev8 Library', path: '/library' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-secondary text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Social Impact */}
          <div>
            <h4 className="text-secondary text-xs font-black uppercase tracking-[0.3em] mb-8">Social Impact</h4>
            <ul className="space-y-4">
              {[
                { name: 'Level Up Conference', path: '/levelup' },
                { name: 'Innov8 Afrika', path: '/innov8' },
                { name: 'Welcome to College', path: '/welcome' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-secondary text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-secondary text-xs font-black uppercase tracking-[0.3em] mb-8">Reach Out</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-secondary flex-shrink-0" />
                <span className="text-white/60 text-sm font-medium">Monrovia, Liberia <br />West Africa</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:weelev8global@gmail.com" className="text-white/60 hover:text-secondary text-sm font-medium transition-colors">weelev8global@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+231881177501" className="text-white/60 hover:text-secondary text-sm font-medium transition-colors">+231 881 177 501</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest text-center md:text-left">
            Copyright All Rights Reserved © ELEV8 2024.
          </p>
          <div className="flex gap-8 text-[10px] text-white/30 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary text-white p-3 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group border border-white/10"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
