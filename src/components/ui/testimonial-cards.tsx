import { motion, type PanInfo } from 'framer-motion';

export type CardPosition = 'front' | 'middle' | 'back';

export type TestimonialCardProps = {
  handleShuffle: () => void;
  testimonial: string;
  position: CardPosition;
  author: string;
  role: string;
  avatar: string;
  accentColor: string;
};

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  author,
  role,
  avatar,
  accentColor,
}: TestimonialCardProps) {
  const isFront = position === 'front';

  return (
    <motion.div
      style={{ zIndex: position === 'front' ? 2 : position === 'middle' ? 1 : 0 }}
      animate={{
        rotate: position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg',
        x: position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%',
      }}
      drag={isFront ? 'x' : false}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragEnd={(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // Flick the front card left to send it to the back.
        if (info.offset.x < -100) handleShuffle();
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-100 w-76 md:h-108 md:w-84 select-none place-content-center gap-6 rounded-3xl border border-white/10 bg-white/6 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl ${
        isFront ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <img
        src={avatar}
        alt={author}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = 'hidden';
        }}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border-2 object-cover"
        style={{ borderColor: accentColor }}
      />
      <p className="text-center text-base md:text-lg italic leading-relaxed text-white/85">
        “{testimonial}”
      </p>
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-wide" style={{ color: accentColor }}>
          {author}
        </p>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">{role}</p>
      </div>
    </motion.div>
  );
}
