import { motion } from 'framer-motion';

const pillars = [
  {
    name: 'Elev8 School of Skills',
    description:
      'Equipping individuals with practical, in-demand skills for real-world opportunities and income generation.',
  },
  {
    name: 'Elev8 Media',
    description:
      'Shaping narratives and building brands — helping people and organizations communicate ideas with clarity and creativity.',
  },
  {
    name: 'Elev8 Library',
    description:
      'Cultivating a culture of reading, thinking, and intellectual growth through access to books and community.',
  },
];

const programs = [
  {
    name: 'Level Up Conference',
    description:
      'Our flagship annual online gathering, built to help people design — not drift through — their year with clarity and purpose.',
  },
  {
    name: 'Welcome to College',
    description:
      'A career and life-readiness program each August, equipping high-school graduates for a purposeful transition to university.',
  },
  {
    name: 'Innov8 Afrika',
    description:
      "A forward-thinking conference for African entrepreneurs and innovators building solutions for the continent's future.",
  },
];

const Card = ({
  index,
  name,
  description,
  color,
}: {
  index: number;
  name: string;
  description: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col rounded-2xl border-t-4 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    style={{ borderTopColor: color }}
  >
    <span className="mb-4 text-3xl font-black tabular-nums" style={{ color }}>
      0{index + 1}
    </span>
    <h4 className="mb-3 text-lg font-black uppercase leading-tight text-primary">{name}</h4>
    <p className="text-sm leading-relaxed text-primary/60">{description}</p>
  </motion.div>
);

const GroupLabel = ({ label, color }: { label: string; color: string }) => (
  <div className="mb-8 flex items-center gap-4">
    <span className="text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap" style={{ color }}>
      {label}
    </span>
    <div className="h-px flex-1 bg-primary/10" />
  </div>
);

const PathsToGrowth = () => {
  return (
    <section className="relative overflow-hidden bg-bg-light py-24 text-primary">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-secondary">Who We Are</p>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            Elev8 is a <span className="text-secondary">growth ecosystem</span> built to develop minds,
            equip skills, and amplify impact.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary/70 md:text-lg">
            We empower individuals — especially young people — to think, build, and live better. Because
            transformation happens where knowledge, skill, and expression meet, our work runs across one
            connected ecosystem of pillars and programs.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="mx-auto mb-16 max-w-6xl">
          <GroupLabel label="Our Core Pillars" color="#00D084" />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Card key={p.name} index={i} name={p.name} description={p.description} color="#00D084" />
            ))}
          </div>
        </div>

        {/* Social Impact Programs */}
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-primary/70">
            Beyond our core business, we run social-impact programs that empower innovators, creatives, and
            entrepreneurs with the mindset, skills, and opportunities to build and thrive.
          </p>
          <GroupLabel label="Our Social Impact Programs" color="#0091FF" />
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Card key={p.name} index={i} name={p.name} description={p.description} color="#0091FF" />
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-lg font-medium italic leading-relaxed text-primary/70 md:text-xl">
            Together, these initiatives don't just educate — they activate potential, building a generation
            that doesn't adapt to the future, but shapes it.
          </p>
          <p className="mt-8 text-2xl font-black uppercase tracking-tighter text-primary">
            Elev8 isn't just what we do. It's <span className="italic text-secondary">who we are.</span>
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-secondary">
            We elevate, so you can rise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PathsToGrowth;
