import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useState, useEffect } from 'react';
import bgImage from '../assets/elev8bgimgr.jpg';

// The six business arms — same brands as the "Our Brands & Programs" section.
const arms = [
  {
    name: 'Elev8 School of Skills',
    subtitle: 'Move from Learning to Earning',
    description:
      'Hands-on training, mentorship, and project-based learning that move people from potential to productivity.',
    color: '#00D084',
  },
  {
    name: 'Elev8 Media',
    subtitle: 'Shaping Narratives & Bringing Ideas to Life',
    description:
      'Creative and strategic branding, content, and digital storytelling that help you communicate with impact.',
    color: '#0091FF',
  },
  {
    name: 'Elev8 Library',
    subtitle: 'Making Reading Sexy Again',
    description:
      'Curated resources, book access, and reading communities that expand minds and inspire deeper thinking.',
    color: '#00D084',
  },
  {
    name: 'Level Up Conference',
    subtitle: 'Design — Not Drift Through — Your Year',
    description:
      'Our flagship annual experience to start the year with clarity, direction, and intention.',
    color: '#0091FF',
  },
  {
    name: 'Welcome to College',
    subtitle: 'Step Into Higher Education with Confidence',
    description:
      'A career and life-readiness program equipping graduates with the mindset and tools for university success.',
    color: '#00D084',
  },
  {
    name: 'Innov8 Afrika',
    subtitle: "Building Solutions, Shaping Africa's Future",
    description:
      'A forward-thinking virtual conference for entrepreneurs, creators, and innovators across Africa.',
    color: '#0091FF',
  },
];

// Carousel rotation speed in degrees per second (≈ the old "1deg / 30ms").
const ROTATION_SPEED = 33;

type Arm = (typeof arms)[number];

// Each card derives its own transform from the shared rotation MotionValue.
// Because these are MotionValues, framer-motion writes the styles directly to
// the DOM on every animation frame WITHOUT re-rendering React — so the parent
// section never re-renders and the carousel stays smooth, even on page load.
const CarouselCard = ({
  arm,
  index,
  total,
  rotation,
  radius,
}: {
  arm: Arm;
  index: number;
  total: number;
  rotation: MotionValue<number>;
  radius: number;
}) => {
  const baseAngle = (360 / total) * index;

  const x = useTransform(rotation, (r) => Math.cos(((baseAngle + r) * Math.PI) / 180) * radius);
  const z = useTransform(rotation, (r) => Math.sin(((baseAngle + r) * Math.PI) / 180) * radius);
  const scale = useTransform(rotation, (r) => {
    const depth = Math.sin(((baseAngle + r) * Math.PI) / 180) * radius;
    return (depth + radius) / (radius * 2);
  });
  const opacity = useTransform(scale, (s) => 0.4 + s * 0.6);
  const zIndex = useTransform(scale, (s) => Math.round(s * 100));

  return (
    <motion.div
      style={{
        position: 'absolute',
        transformStyle: 'preserve-3d',
        x,
        z,
        scale,
        opacity,
        zIndex,
      }}
      className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center"
    >
      <div
        className="w-full h-full rounded-2xl border-2 flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/10"
        style={{
          borderColor: arm.color,
          boxShadow: `0 0 30px ${arm.color}33, inset 0 0 20px ${arm.color}22`,
        }}
      >
        <div className="text-center px-3">
          <h3
            className="text-xs md:text-base font-black uppercase tracking-tight leading-tight"
            style={{ color: arm.color }}
          >
            {arm.name}
          </h3>
          <div className="w-6 h-0.5 rounded-full mx-auto mt-2" style={{ backgroundColor: arm.color }} />
        </div>
      </div>
    </motion.div>
  );
};

const BGSection = () => {
  // Rotation lives in a MotionValue, not React state, so updating it never
  // triggers a re-render of this component.
  const rotation = useMotionValue(0);

  // Smaller carousel radius on phones so the whole ring fits and the subject's
  // pointing hand stays visible behind it.
  const [radius, setRadius] = useState(150);
  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 100 : 150);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const [currentArm, setCurrentArm] = useState(0);
  const [paused, setPaused] = useState(false);

  // Drive rotation from real elapsed time via requestAnimationFrame. rAF pauses
  // when the tab is hidden and never queues a burst of callbacks, so there is
  // no flicker from backed-up timer ticks firing all at once on load.
  useAnimationFrame((_, delta) => {
    if (paused) return;
    // Clamp the frame delta so a long stall advances rotation by one small
    // step rather than a sudden jump.
    const dt = Math.min(delta, 64);
    const next = (rotation.get() + (ROTATION_SPEED * dt) / 1000) % 360;
    rotation.set(next);
  });

  // Keep the detail card in sync with whichever carousel card is currently at
  // the front. A card is "front-most" when its angle (baseAngle + rotation) is
  // closest to 90° — that's where sin() peaks and the card faces the viewer.
  useMotionValueEvent(rotation, 'change', (r) => {
    let best = 0;
    let bestDepth = -Infinity;
    for (let i = 0; i < arms.length; i++) {
      const depth = Math.sin((((360 / arms.length) * i + r) * Math.PI) / 180);
      if (depth > bestDepth) {
        bestDepth = depth;
        best = i;
      }
    }
    setCurrentArm((prev) => (prev === best ? prev : best));
  });

  // Bring a specific arm to the front of the carousel when its dot is clicked.
  const focusArm = (index: number) => {
    const target = ((90 - (360 / arms.length) * index) % 360 + 360) % 360;
    rotation.set(target);
  };

  const active = arms[currentArm];

  return (
    <section className="relative w-full -mt-1 pt-20 pb-20 overflow-hidden">
      {/* Background image. Anchored left on mobile so the subject (and his
          pointing hand) stay in frame instead of being cropped out. */}
      <div
        className="absolute inset-0 bg-cover bg-left md:bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(6, 34, 28, 0.3) 40%, rgba(6, 34, 28, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Carousel — nudged toward where the subject is pointing
              (up and to the left) rather than sitting over his head. */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:-translate-x-6"
          >
            <div className="text-center mb-8 md:mb-12">
              <p className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-3">
                Explore Our Ecosystem
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
                Six Pathways to<br />
                <span className="text-secondary">Growth</span>
              </h2>
            </div>

            {/* 3D Carousel Container — pushed down on mobile so the ring sits
                near where the subject's finger is pointing. */}
            <div className="flex justify-center items-center h-72 md:h-100 perspective translate-y-10 md:translate-y-0">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                }}
              >
                {arms.map((arm, index) => (
                  <CarouselCard
                    key={index}
                    arm={arm}
                    index={index}
                    total={arms.length}
                    rotation={rotation}
                    radius={radius}
                  />
                ))}
              </div>
            </div>

            {/* Bottom indicator */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center mt-8"
            >
              <p className="text-white/60 text-xs font-mono uppercase tracking-[0.2em]">
                ↻ Rotating to discover all programs
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Business-arm spotlight card (cycles through each brand) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />

              {/* Main card (glassmorphism + cycling brand) */}
              <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="relative rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-lg shadow-[0_30px_80px_rgba(4,8,12,0.45)]"
              >
                {/* subtle glow accent */}
                <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-secondary/10 to-accent/10 blur-sm opacity-60 pointer-events-none" />

                <div className="relative space-y-5 z-10">
                  <p className="text-xs font-bold text-secondary uppercase tracking-[0.3em]">
                    The Elev8 Ecosystem
                  </p>

                  <div className="min-h-44">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentArm}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="space-y-3"
                      >
                        <h3
                          className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight"
                          style={{ color: active.color }}
                        >
                          {active.name}
                        </h3>
                        <p
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: active.color }}
                        >
                          {active.subtitle}
                        </p>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                          {active.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress dots — one per business arm */}
                  <div className="pt-2 flex items-center gap-2">
                    {arms.map((arm, i) => (
                      <button
                        key={i}
                        aria-label={arm.name}
                        onClick={() => focusArm(i)}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: i === currentArm ? 24 : 8,
                          backgroundColor: i === currentArm ? arm.color : 'rgba(255,255,255,0.25)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      />
    </section>
  );
};

export default BGSection;
