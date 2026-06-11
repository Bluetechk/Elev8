import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { TestimonialCard, type CardPosition } from './ui/testimonial-cards';

const testimonials = [
  {
    id: 1,
    author: 'Strategic Partner',
    role: 'Elev8 Media Client',
    accentColor: '#00D084',
    testimonial:
      'Elev8 Media transformed our brand from a local shop to a digital powerhouse. Their attention to detail in branding and social media is truly world-class.',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    author: 'Media Client',
    role: 'Brand Partner',
    accentColor: '#0091FF',
    testimonial:
      "The strategy and production quality from the Elev8 team is unmatched in Monrovia. They don't just create content; they build a narrative that resonates.",
    avatar: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    author: 'Brand Founder',
    role: 'Startup Client',
    accentColor: '#00D084',
    testimonial:
      'From our logo to our launch campaign, Elev8 gave our brand a look and a voice that finally match our ambition. The audience response was immediate.',
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    author: 'Growing Business',
    role: 'Retainer Client',
    accentColor: '#0091FF',
    testimonial:
      'Their social media management freed us to focus on operations while our online presence grew month after month. Professional, consistent, and genuinely creative.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop',
  },
];

const basePositions: CardPosition[] = ['front', 'middle', 'back', 'back'];

const MediaTestimonials = () => {
  const [positions, setPositions] = useState<CardPosition[]>(basePositions);

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev];
      next.unshift(next.pop() as CardPosition);
      return next;
    });
  };

  return (
    <section className="relative bg-primary text-white py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none leading-none">
          “
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            CLIENT <span className="text-secondary italic">VOICES</span>
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Shuffle-card stack */}
        <div className="flex justify-center">
          <div className="relative h-100 w-76 md:h-108 md:w-84 translate-x-[-16%] md:translate-x-[-18%]">
            {testimonials.map((t, index) => (
              <TestimonialCard
                key={t.id}
                testimonial={t.testimonial}
                author={t.author}
                role={t.role}
                avatar={t.avatar}
                accentColor={t.accentColor}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>

        {/* Hint / control */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={handleShuffle}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-secondary/50 hover:text-white"
          >
            <ArrowLeftRight className="w-4 h-4 text-secondary" />
            Drag or tap to shuffle
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaTestimonials;
