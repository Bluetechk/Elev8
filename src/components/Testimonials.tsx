import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { TestimonialCard, type CardPosition } from './ui/testimonial-cards';

const testimonials = [
  {
    id: 1,
    author: 'Samuel K.',
    role: 'Entrepreneur',
    accentColor: '#00D084',
    testimonial:
      "The Elev8 program has been instrumental in helping me grow my business. It's the best program I've seen for someone who wants to scale but doesn't know how.",
    avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    author: 'Sarah M.',
    role: 'Small Business Owner',
    accentColor: '#0091FF',
    testimonial:
      'Everything is broken into bite-sized chunks that are easy to digest and apply to my business. Thorough, and it covers all the main aspects.',
    avatar: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    author: 'James T.',
    role: 'University Student',
    accentColor: '#00D084',
    testimonial:
      'Welcome to College gave me the clarity and confidence I needed stepping into university. It genuinely changed my trajectory.',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    author: 'Amara B.',
    role: 'Creative Professional',
    accentColor: '#0091FF',
    testimonial:
      "Elev8 Media transformed how I present my brand. They don't just create content — they craft narratives that connect.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop',
  },
];

const basePositions: CardPosition[] = ['front', 'middle', 'back', 'back'];

const Testimonials = () => {
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
      {/* Top notch */}
      <div
        className="absolute top-0 left-0 w-full h-7.5 bg-bg-light"
        style={{ clipPath: 'polygon(calc(50% - 30px) 0, 50% 30px, calc(50% + 30px) 0)' }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/2 select-none leading-none">
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
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-3 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            What People <span className="text-secondary">Say</span>
          </h2>
          <p className="text-white/40 mt-4 font-medium text-sm uppercase tracking-widest">
            Real stories. Real growth.
          </p>
          <div className="w-14 h-1 bg-linear-to-r from-secondary to-accent rounded-full mx-auto mt-5" />
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

export default Testimonials;
