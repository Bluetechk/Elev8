import { motion } from 'framer-motion';
import { CircularTestimonials } from './ui/circular-testimonials';

import brandingImg from '../assets/branding.jfif';
import graphicImg from '../assets/graphicsdesign_Photoshop.jfif';
import videoImg from '../assets/videographics.jfif';
import photoImg from '../assets/photography.jfif';
import webImg from '../assets/webdesign (2).jfif';
import smmImg from '../assets/Media_socialmedia_managemt.jfif';
import marketingImg from '../assets/socialmedia_marketing.jfif';

// Each "testimonial" is a media service: name = service, designation = label,
// quote = description, src = image. (Images are placeholders for now.)
const services = [
  {
    name: 'Branding',
    designation: 'Identity & Strategy',
    quote:
      'Your brand is more than a logo — it is the total impression you leave on the world. We build cohesive identities, from strategy and logo design to color systems and visual guidelines.',
    src: brandingImg,
  },
  {
    name: 'Graphic Design',
    designation: 'Visual Content',
    quote:
      'Compelling visuals that capture attention — flyers, social graphics, banners, event materials, and branded stationery, all purposeful, polished, and on-brand.',
    src: graphicImg,
  },
  {
    name: 'Videography',
    designation: 'Story in Motion',
    quote:
      'Video is the most powerful storytelling tool a business has. Promotional videos, brand films, event coverage, and testimonials — handled from concept to final delivery.',
    src: videoImg,
  },
  {
    name: 'Photography',
    designation: 'Brand Imagery',
    quote:
      'Professional photography that elevates how your brand is perceived — product shots, corporate portraits, event coverage, and brand photography that builds credibility.',
    src: photoImg,
  },
  {
    name: 'Web Design',
    designation: 'Your Digital Home',
    quote:
      'Clean, professional, mobile-ready websites that represent your brand accurately and deliver a smooth experience — building trust before a single word is read.',
    src: webImg,
  },
  {
    name: 'Social Media Management',
    designation: 'Always-On Presence',
    quote:
      'We manage your Facebook and Instagram end-to-end — content strategy, creation, scheduling, and audience engagement — keeping your brand alive online while you run your business.',
    src: smmImg,
  },
  {
    name: 'Social Media Marketing',
    designation: 'Targeted Campaigns',
    quote:
      'Strategic, data-informed campaigns that put your brand in front of the right audience at the right time — driving traffic, leads, event turnout, and brand awareness.',
    src: marketingImg,
  },
];

const MediaWhatWeDo = () => {
  return (
    <section className="relative py-24 bg-white text-primary overflow-hidden">
      {/* Decorative Ribbons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
            d="M-100 100C200 200 400 0 600 100C800 200 1000 0 1200 100C1400 200 1600 0 1800 100"
            stroke="var(--color-secondary)"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight uppercase tracking-tight">
            WHAT WE <span className="text-secondary">DO</span>
          </h2>
          <p className="text-primary/70 text-lg font-medium">
            A comprehensive range of creative and digital services — each built to help your brand
            communicate with clarity, consistency, and impact.
          </p>
        </div>

        {/* Circular service showcase — open in the section, room to breathe */}
        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={services}
            autoplay
            colors={{
              name: '#06221C',
              designation: '#00D084',
              testimony: 'rgba(6,34,28,0.7)',
              arrowBackground: '#06221C',
              arrowForeground: '#ffffff',
              arrowHoverBackground: '#00D084',
            }}
            fontSizes={{ name: '28px', designation: '13px', quote: '18px' }}
          />
        </div>

        <div className="pt-12 text-center">
          <p className="text-2xl font-black text-primary uppercase tracking-tighter">
            YOUR BRAND DESERVES TO BE <span className="text-secondary italic">SEEN.</span>
          </p>
          <p className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mt-2">
            Let us make sure it is.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaWhatWeDo;
