import { useState } from 'react';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Our Businesses', 
      path: '#',
      dropdown: [
        { name: 'School of Skill', path: '/school-of-skill' },
        { name: 'Elev8 Media', path: '/media' },
        { name: 'Elev8 Library', path: '/library' },
      ]
    },
    { 
      name: 'Our Social Impact', 
      path: '#',
      dropdown: [
        { name: 'Level Up Conference', path: '/levelup' },
        { name: 'Innov8 Afrika', path: '/innov8' },
        { name: 'Welcome to College', path: '/welcome' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="bg-white py-2 px-6 border-b border-gray-100 flex justify-start items-center">
        <a href="mailto:info@elev8.co" className="flex items-center gap-2 text-[10px] text-secondary font-semibold hover:underline">
          <Mail size={12} /> info@elev8.co
        </a>
      </div>
      
      {/* Main Nav */}
      <nav className="bg-white sticky top-0 z-50 py-1 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 600 160" className="h-10 md:h-14 w-auto">
              <text x="300" y="180" textAnchor="middle" stroke="#2C2F4A" strokeWidth="4" style={{ fontFamily: 'Nunito, Quicksand, sans-serif', fontWeight: 900, fontSize: '110px', fill: '#2C2F4A', letterSpacing: '-4px' }}>elev8</text>
              <text x="300" y="220" textAnchor="middle" style={{ fontFamily: 'Nunito, Quicksand, sans-serif', fontWeight: 700, fontSize: '28px', fill: '#2C2F4A', letterSpacing: '0.2px' }}>rise intentionally, live exceptionally.</text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-primary items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group h-full py-4"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer hover:text-secondary transition-colors">
                    <span>{link.name}</span>
                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-lg py-4 mt-1 border border-gray-100 z-[100]"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-6 py-3 text-[10px] text-primary hover:bg-bg-light hover:text-secondary transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={cn(
                      "hover:text-secondary transition-colors", 
                      location.pathname === link.path && "text-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden z-40 absolute w-full"
          >
            <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest text-primary max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-4">
                      <div className="text-secondary">{link.name}</div>
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="text-xs hover:text-secondary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "hover:text-secondary transition-colors border-b border-gray-50 pb-2 block", 
                        location.pathname === link.path && "text-secondary"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
