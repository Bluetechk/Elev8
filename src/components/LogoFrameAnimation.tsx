import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

type LogoFrameAnimationProps = {
  minimal?: boolean;
  className?: string;
  children?: ReactNode;
};

const FPS = 24;

const LogoFrameAnimation = ({ minimal = false, className = '' }: LogoFrameAnimationProps) => {
  const frames = useMemo(() => {
    const imports = import.meta.glob('../assets/Elev8_logo_motion_graphics_anima*.jpg', { eager: true, as: 'url' });
    return Object.entries(imports)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, url]) => url as string);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  const frameIndexRef = useRef(0);
  const rafId = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const frameDuration = 1000 / FPS;

  // Preload AND fully decode every frame before playback starts. Waiting only
  // for `load` leaves the browser to decode each frame the first time it is
  // painted, which is what made the sequence blink during the first loop.
  useEffect(() => {
    if (!frames.length) return;
    let cancelled = false;

    const images = frames.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });
    imagesRef.current = images;

    Promise.all(
      images.map((image) =>
        // decode() resolves once the bitmap is ready to paint with no flash.
        // Fall back gracefully if a frame fails to decode.
        (image.decode ? image.decode() : Promise.resolve()).catch(() => undefined)
      )
    ).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [frames]);

  // Draw a single decoded frame to the canvas using object-cover sizing. The
  // canvas retains the previous frame's pixels until this overwrites them, so
  // there is never a blank gap between frames.
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];
    if (!canvas || !image || !image.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const targetW = Math.round(canvas.clientWidth * dpr);
    const targetH = Math.round(canvas.clientHeight * dpr);
    if (targetW === 0 || targetH === 0) return;
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const scale = Math.max(targetW / image.naturalWidth, targetH / image.naturalHeight);
    const drawW = image.naturalWidth * scale;
    const drawH = image.naturalHeight * scale;
    const dx = (targetW - drawW) / 2;
    const dy = (targetH - drawH) / 2;
    ctx.drawImage(image, dx, dy, drawW, drawH);
  };

  useEffect(() => {
    if (!ready || !frames.length) return;

    // Paint the first frame immediately so nothing flashes before the loop.
    frameIndexRef.current = 0;
    lastTimeRef.current = 0;
    drawFrame(0);

    const animate = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const elapsed = time - lastTimeRef.current;
      if (elapsed >= frameDuration) {
        frameIndexRef.current = (frameIndexRef.current + 1) % frames.length;
        drawFrame(frameIndexRef.current);
        lastTimeRef.current = time - (elapsed % frameDuration);
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [ready, frames.length]);

  if (!frames.length) {
    return null;
  }

  if (minimal) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-black" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-sm tracking-[0.2em] uppercase">
            Loading animation...
          </div>
        )}
      </div>
    );
  }

  return (
    <section className={`relative overflow-hidden py-24 bg-[#04120E] ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl text-center mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary font-bold mb-3">
            Elev8 Motion Studio
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Motion frame animation
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
            A rapid frame-by-frame animation experience built from your pasted motion graphics frames.
            It plays automatically and loops seamlessly, without any video controls or progress UI.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-4xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-secondary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="relative aspect-video bg-black">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
            {!ready && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-sm tracking-[0.2em] uppercase">
                Loading animation...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoFrameAnimation;
