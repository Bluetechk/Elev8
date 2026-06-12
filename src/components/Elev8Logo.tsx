import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Elev8 — broadcast-style brand ident.
//
// Plays once on load like a TV channel bumper:
//   1. BUILD  — the logo assembles on a white stage (infinity bounces in,
//      letters rise, the "8" stands up, the tagline sweeps in).
//   2. SCENES — hard cut to a dark cinematic stage; punchy brand statements
//      animate in letter-by-letter with an overshoot bounce, hold, then exit.
//   3. OUTRO  — back to white; the logo reassembles and settles.
//
// Pure CSS/SVG motion — no image files, so nothing can 404 on a CDN.
// Respects prefers-reduced-motion and can be replayed by clicking the stage.
// ─────────────────────────────────────────────────────────────────────────────

const DISPLAY = "'Arial Black', 'Helvetica Neue', Arial, sans-serif";
const GREEN = "#3dffa0";
const INK = "#0A0F0D";

// Statement bumpers. `eyebrow` is the wide-tracked lead-in, `word` is the hero.
const SCENES: { eyebrow: string; word: string }[] = [
  { eyebrow: "We are", word: "ELEV8" },
  { eyebrow: "Breaking", word: "BOUNDARIES" },
  { eyebrow: "Unlocking", word: "POTENTIAL" },
  { eyebrow: "Across Africa", word: "& BEYOND" },
];

// Timeline (ms). Tuned so each beat lands before the next begins.
const BUILD_MS = 4200;
const SCENE_MS = 2200;
const PLAY_MS = BUILD_MS + SCENES.length * SCENE_MS;

const KEYFRAMES = `
  /* ── Logo build ─────────────────────────────────────────────── */
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

  /* ── Statement bumpers ──────────────────────────────────────── */
  /* Per-letter overshoot bounce — the "designed in motion software" feel. */
  @keyframes char-pop {
    0%   { opacity: 0; transform: translateY(72px) scale(0.6) rotate(-6deg); filter: blur(6px); }
    55%  { opacity: 1; transform: translateY(-12px) scale(1.12) rotate(2deg); filter: blur(0); }
    72%  { transform: translateY(5px) scale(0.97); }
    86%  { transform: translateY(-2px) scale(1.01); }
    100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
  }
  /* Parent envelope: fade in, hold, then lift + blur out. */
  @keyframes bumper {
    0%   { opacity: 0; }
    7%   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    80%  { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    100% { opacity: 0; transform: translateY(-28px) scale(1.06); filter: blur(5px); }
  }
  @keyframes eyebrow-in {
    0%   { opacity: 0; letter-spacing: 0.7em; transform: translateY(12px); }
    100% { opacity: 1; letter-spacing: 0.42em; transform: translateY(0); }
  }
  @keyframes underline-grow {
    0%   { opacity: 0; transform: scaleX(0); }
    100% { opacity: 1; transform: scaleX(1); }
  }

  /* ── Cinematic stage atmosphere ─────────────────────────────── */
  @keyframes light-sweep {
    0%   { opacity: 0; transform: translateX(-130%) skewX(-12deg); }
    35%  { opacity: 0.55; }
    65%  { opacity: 0; transform: translateX(130%) skewX(-12deg); }
    100% { opacity: 0; }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.30; transform: scale(1); }
    50%      { opacity: 0.55; transform: scale(1.18); }
  }
  @keyframes bug-in {
    0%   { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes progress { from { width: 0%; } to { width: 100%; } }

  /* ── Accessibility ──────────────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .elev8-ident * { animation: none !important; }
  }
`;

type Phase = "build" | "scenes" | "outro";

// ─── Infinity mark ────────────────────────────────────────────────────────────
// Two circles R=55, holes punched via fill-rule evenodd. `animate` plays the
// arrival bounce; the static form is reused small for the corner channel bug.
const InfinityMark = ({
  width,
  height,
  animate = false,
}: {
  width: number;
  height: number;
  animate?: boolean;
}) => (
  <svg
    viewBox="0 0 260 130"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    className="flex-shrink-0 overflow-visible"
    aria-hidden="true"
  >
    <path
      fill={GREEN}
      fillRule="evenodd"
      style={
        animate
          ? {
              opacity: 0,
              transformBox: "fill-box",
              transformOrigin: "center",
              transform: "scale(0.15) rotate(-60deg)",
              animation: "icon-arrive 1s cubic-bezier(0.22,1,0.36,1) forwards 0.1s",
            }
          : undefined
      }
      d={[
        "M 130,27.3",
        "A 55,55 0 1,0 130,102.7",
        "A 55,55 0 1,0 130,27.3",
        "Z",
        "M 117,65 A 27,27 0 1,1 63,65 A 27,27 0 1,1 117,65 Z",
        "M 197,65 A 27,27 0 1,1 143,65 A 27,27 0 1,1 197,65 Z",
      ].join(" ")}
    />
  </svg>
);

// ─── Logo lockup (build + outro) ──────────────────────────────────────────────
const Letter = ({ char, delay }: { char: string; delay: number }) => (
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

const TagWord = ({ word, delay }: { word: string; delay: number }) => (
  <span
    className="text-[15px] md:text-[20px] font-black uppercase tracking-[0.3em] whitespace-nowrap"
    style={{
      color: "#777",
      opacity: 0,
      transform: "translateY(18px)",
      animation: `tag-up 0.55s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s`,
    }}
  >
    {word}
  </span>
);

const TagSep = ({ delay }: { delay: number }) => (
  <div
    className="w-8 md:w-12 h-[3px] rounded-full mx-3 md:mx-5 flex-shrink-0"
    style={{
      backgroundColor: GREEN,
      opacity: 0,
      transform: "scaleX(0)",
      transformOrigin: "center",
      animation: `sep-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards ${delay}s`,
    }}
  />
);

const LogoLockup = () => (
  <div className="flex flex-col items-center gap-7 md:gap-9">
    <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
      <InfinityMark width={180} height={106} animate />
      <div
        className="flex items-center leading-none overflow-visible"
        style={{
          fontFamily: DISPLAY,
          fontWeight: 900,
          fontSize: "clamp(76px, 12vw, 168px)",
          color: "#111",
          letterSpacing: "-6px",
        }}
      >
        <Letter char="e" delay={0.68} />
        <Letter char="l" delay={0.8} />
        <Letter char="e" delay={0.92} />
        <Letter char="v" delay={1.04} />
        <span
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "rotate(90deg) scale(0.05)",
            transformOrigin: "center",
            animation: "eight-standup 1s cubic-bezier(0.34,1.3,0.64,1) forwards 1.18s",
          }}
        >
          8
        </span>
      </div>
    </div>

    <div className="flex items-center">
      <TagWord word="Rise" delay={1.85} />
      <TagSep delay={2.05} />
      <TagWord word="Shine" delay={2.15} />
      <TagSep delay={2.35} />
      <TagWord word="Elevate" delay={2.45} />
    </div>
  </div>
);

// ─── Statement bumper (dark stage) ────────────────────────────────────────────
const Bumper = ({ eyebrow, word }: { eyebrow: string; word: string }) => {
  const chars = Array.from(word);
  return (
    <div
      className="relative flex flex-col items-center text-center"
      style={{ animation: `bumper ${SCENE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards` }}
    >
      <span
        className="mb-4 md:mb-6 text-[13px] md:text-[18px] font-bold uppercase"
        style={{
          color: GREEN,
          letterSpacing: "0.42em",
          paddingLeft: "0.42em",
          opacity: 0,
          animation: "eyebrow-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards 0.1s",
        }}
      >
        {eyebrow}
      </span>

      <h2
        className="flex flex-wrap items-center justify-center leading-[0.92]"
        style={{
          fontFamily: DISPLAY,
          fontWeight: 900,
          fontSize: "clamp(60px, 11vw, 156px)",
          color: "#fff",
          letterSpacing: "-0.03em",
        }}
      >
        {chars.map((c, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              whiteSpace: c === " " ? "pre" : "normal",
              opacity: 0,
              transform: "translateY(72px) scale(0.6)",
              animation: `char-pop 0.7s cubic-bezier(0.34,1.3,0.64,1) forwards ${0.22 + i * 0.05}s`,
            }}
          >
            {c === " " ? " " : c}
          </span>
        ))}
      </h2>

      <div
        className="mt-6 md:mt-8 h-[4px] w-32 md:w-48 rounded-full"
        style={{
          backgroundColor: GREEN,
          boxShadow: `0 0 24px ${GREEN}`,
          opacity: 0,
          transform: "scaleX(0)",
          animation: `underline-grow 0.5s cubic-bezier(0.22,1,0.36,1) forwards ${0.22 + chars.length * 0.05 + 0.1}s`,
        }}
      />
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Elev8Logo() {
  const [mounted, setMounted] = useState(false);
  const [runId, setRunId] = useState(0);
  const [phase, setPhase] = useState<Phase>("build");
  const [scene, setScene] = useState(0);
  const reduced = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced.current) {
      setPhase("outro");
      return;
    }

    setPhase("build");
    setScene(0);

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPhase("scenes"), BUILD_MS));
    for (let k = 1; k < SCENES.length; k++) {
      timers.push(window.setTimeout(() => setScene(k), BUILD_MS + k * SCENE_MS));
    }
    timers.push(window.setTimeout(() => setPhase("outro"), PLAY_MS));

    return () => timers.forEach(clearTimeout);
  }, [mounted, runId]);

  if (!mounted) return null;

  const dark = phase === "scenes";
  const playing = !reduced.current && phase !== "outro";

  return (
    <>
      <style>{KEYFRAMES}</style>

      <section
        className="elev8-ident relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 cursor-pointer select-none"
        style={{
          backgroundColor: dark ? INK : "#ffffff",
          transition: "background-color 600ms ease",
        }}
        onClick={() => setRunId((n) => n + 1)}
        role="img"
        aria-label="Elev8 — Rise, Shine, Elevate. Breaking boundaries, unlocking potential across Africa and beyond."
      >
        {/* ── Cinematic atmosphere (dark stage only) ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ opacity: dark ? 1 : 0, transition: "opacity 600ms ease" }}
        >
          {/* ambient green glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${GREEN}26 0%, transparent 60%)`,
              animation: "glow-pulse 6s ease-in-out infinite",
            }}
          />
          {/* faint grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
            }}
          />
          {/* one-pass light sweep, re-runs per scene */}
          {dark && (
            <div
              key={scene}
              className="absolute inset-y-0 left-0 w-1/3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(61,255,160,0.12), transparent)",
                animation: "light-sweep 2.2s ease-in-out",
              }}
            />
          )}
          {/* vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>

        {/* ── Corner channel bug (dark stage only) ── */}
        {dark && (
          <div
            className="pointer-events-none absolute top-6 right-6 md:top-8 md:right-10 flex items-center gap-2"
            style={{ opacity: 0, animation: "bug-in 0.6s ease forwards 0.2s" }}
          >
            <InfinityMark width={34} height={20} />
            <span
              className="text-[12px] md:text-[13px] font-black uppercase tracking-[0.25em] text-white/80"
              style={{ fontFamily: DISPLAY }}
            >
              Elev8
            </span>
          </div>
        )}

        {/* ── Stage content ── */}
        <div className="relative z-10 w-full flex items-center justify-center">
          {phase === "scenes" ? (
            <Bumper key={scene} eyebrow={SCENES[scene].eyebrow} word={SCENES[scene].word} />
          ) : (
            // Remount on phase change so the build replays for the outro.
            <LogoLockup key={phase} />
          )}
        </div>

        {/* ── Broadcast timeline bar ── */}
        <div
          className="absolute bottom-0 left-0 h-[3px] w-full"
          style={{ opacity: playing ? 1 : 0, transition: "opacity 500ms ease" }}
        >
          <div
            key={runId}
            className="h-full"
            style={{
              width: 0,
              backgroundColor: GREEN,
              boxShadow: `0 0 12px ${GREEN}`,
              animation: `progress ${PLAY_MS}ms linear forwards`,
            }}
          />
        </div>

        {/* ── Replay affordance (after the ident settles) ── */}
        {phase === "outro" && !reduced.current && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setRunId((n) => n + 1);
            }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 transition-colors"
            style={{ outlineColor: GREEN }}
          >
            ↻ Replay
          </button>
        )}
      </section>
    </>
  );
}
