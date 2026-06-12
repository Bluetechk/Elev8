import { useEffect, useState } from "react";

// Tailwind doesn't ship arbitrary keyframe animations out of the box,
// so we inject the keyframes once via a <style> tag.
const KEYFRAMES = `
  @keyframes icon-arrive {
    0%   { opacity: 0; transform: scale(0.15) rotate(-60deg); }
    55%  { opacity: 1; transform: scale(1.08) rotate(5deg); }
    72%  { transform: scale(0.96) rotate(-2deg); }
    86%  { transform: scale(1.02) rotate(1deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes letter-rise {
    0%   { opacity: 0; transform: translateY(130px); }
    55%  { opacity: 1; transform: translateY(-16px); }
    73%  { transform: translateY(6px); }
    88%  { transform: translateY(-3px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes eight-standup {
    0%   { opacity: 0; transform: rotate(90deg) scale(0.05); }
    30%  { opacity: 1; transform: rotate(90deg) scale(1.08); }
    50%  { opacity: 1; transform: rotate(90deg) scale(1.04); }
    70%  { transform: rotate(-8deg) scale(1.08); }
    84%  { transform: rotate(3deg) scale(0.97); }
    100% { opacity: 1; transform: rotate(0deg) scale(1); }
  }
  @keyframes tag-up {
    0%   { opacity: 0; transform: translateY(18px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes sep-in {
    0%   { opacity: 1; transform: scaleX(0); }
    100% { opacity: 1; transform: scaleX(1); }
  }
`;

// ─── Infinity SVG Icon ───────────────────────────────────────────────────────
//
// Two circles R=55, cx1=90 cx2=170 cy=65, viewBox 0 0 260 130.
// Intersection at x=130, y≈27.3 and y≈102.7.
// Outer: two CCW large-arcs sharing those intersection points.
// Inner holes: CW arcs (evenodd punches them out).
//
const InfinityIcon = () => (
  <svg
    viewBox="0 0 260 130"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[220px] h-[130px] flex-shrink-0 overflow-visible"
    aria-hidden="true"
  >
    <path
      fill="#3dffa0"
      fillRule="evenodd"
      style={{
        opacity: 0,
        transformBox: "fill-box",
        transformOrigin: "center",
        transform: "scale(0.15) rotate(-60deg)",
        animation: "icon-arrive 1s cubic-bezier(0.22,1,0.36,1) forwards 0.1s",
      }}
      d={[
        // Outer silhouette — two CCW large arcs
        "M 130,27.3",
        "A 55,55 0 1,0 130,102.7",
        "A 55,55 0 1,0 130,27.3",
        "Z",
        // Left hole — CW (evenodd removes it)
        "M 117,65 A 27,27 0 1,1 63,65 A 27,27 0 1,1 117,65 Z",
        // Right hole — CW
        "M 197,65 A 27,27 0 1,1 143,65 A 27,27 0 1,1 197,65 Z",
      ].join(" ")}
    />
  </svg>
);

// ─── Letter ──────────────────────────────────────────────────────────────────
interface LetterProps {
  char: string;
  delay: number;
}

const Letter = ({ char, delay }: LetterProps) => (
  <span
    style={{
      display: "inline-block",
      opacity: 0,
      transform: "translateY(130px)",
      animation: `letter-rise 0.65s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s`,
    }}
  >
    {char}
  </span>
);

// ─── Tagline word ─────────────────────────────────────────────────────────────
interface TagWordProps {
  word: string;
  delay: number;
}

const TagWord = ({ word, delay }: TagWordProps) => (
  <span
    className="text-[20px] font-black uppercase tracking-[0.3em] text-[#bbb] whitespace-nowrap"
    style={{
      opacity: 0,
      transform: "translateY(18px)",
      animation: `tag-up 0.55s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s`,
    }}
  >
    {word}
  </span>
);

// ─── Tagline separator ────────────────────────────────────────────────────────
interface TagSepProps {
  delay: number;
}

const TagSep = ({ delay }: TagSepProps) => (
  <div
    className="w-12 h-[3px] rounded-full bg-[#3dffa0] mx-5 flex-shrink-0"
    style={{
      opacity: 0,
      transform: "scaleX(0)",
      transformOrigin: "center",
      animation: `sep-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s`,
    }}
  />
);

// ─── Main component ───────────────────────────────────────────────────────────
export default function Elev8Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Inject keyframes once */}
      <style>{KEYFRAMES}</style>

      <section className="flex items-center justify-center min-h-screen bg-white w-full px-10 py-16">
        <div className="flex flex-col items-center gap-8 w-full">

          {/* Logo row */}
          <div className="flex items-center justify-center gap-10 w-full flex-wrap">

            <InfinityIcon />

            {/* Wordmark */}
            <div
              className="flex items-center leading-none overflow-visible"
              style={{
                fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(80px, 12vw, 170px)",
                color: "#111",
                letterSpacing: "-6px",
              }}
            >
              <Letter char="e" delay={0.68} />
              <Letter char="l" delay={0.80} />
              <Letter char="e" delay={0.92} />
              <Letter char="v" delay={1.04} />

              {/* "8" — starts lying flat, then rotates upright */}
              <span
                style={{
                  display: "inline-block",
                  opacity: 0,
                  transform: "rotate(90deg) scale(0.05)",
                  transformOrigin: "center",
                  animation:
                    "eight-standup 1s cubic-bezier(0.34,1.3,0.64,1) forwards 1.18s",
                }}
              >
                8
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center">
            <TagWord word="Rise"    delay={1.85} />
            <TagSep                 delay={2.05} />
            <TagWord word="Shine"   delay={2.15} />
            <TagSep                 delay={2.35} />
            <TagWord word="Elevate" delay={2.45} />
          </div>

        </div>
      </section>
    </>
  );
}
