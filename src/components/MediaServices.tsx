import { useState, useEffect } from 'react';
import { Palette, Layers, Film, Camera, Globe, MessageSquare, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "Branding",
    description: "Your brand is more than a logo — it is the total impression your business leaves on the world. We help businesses develop strong, cohesive brand identities that accurately represent who they are, what they stand for, and why they matter. From brand strategy and logo design to color systems and visual guidelines, we build brands that are built to last.",
    icon: Palette
  },
  {
    title: "Graphic Design",
    description: "We create compelling visual content that communicates your message and captures attention. Whether you need promotional flyers, social media graphics, banners, event materials, or branded stationery, our design work is purposeful, polished, and aligned with your brand identity.",
    icon: Layers
  },
  {
    title: "Videography",
    description: "Video is the most powerful storytelling tool available to a business today. Our videography services cover promotional videos, brand films, event documentation, product showcases, testimonials, and more. We handle everything from concept to final delivery — producing content that engages, informs, and converts.",
    icon: Film
  },
  {
    title: "Photography",
    description: "First impressions matter, and professional photography is one of the most direct ways to elevate the perceived quality of your brand. We offer product photography, team and corporate portraits, event photography, and general brand photography that gives your business the visual credibility it deserves.",
    icon: Camera
  },
  {
    title: "Web Design",
    description: "Your website is your most important business address. We design and develop clean, professional, and functional websites that represent your brand accurately, perform well on mobile devices, and deliver a smooth experience for every visitor. A well-designed website builds trust before a single word is read.",
    icon: Globe
  },
  {
    title: "Social Media Management",
    description: "Consistency on social media is what separates growing brands from stagnant ones. We manage your Facebook and Instagram presence end-to-end — developing your content strategy, creating your posts, scheduling and publishing, and engaging with your audience on your behalf.",
    icon: MessageSquare
  },
  {
    title: "Social Media Marketing",
    description: "Beyond management, we design and execute targeted social media marketing campaigns that put your brand in front of the right audience at the right time. Our campaigns are strategic, data-informed, and built around your specific business goals.",
    icon: TrendingUp
  }
];

const MediaServices = () => {
  const [current, setCurrent] = useState(0);
  const count = services.length;
  const angleStep = count > 1 ? 180 / (count - 1) : 0;
  const radius = 140; // px, adjust for size

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, 2800);
    return () => clearInterval(interval);
  }, [count]);

  const CurrentIcon = services[current].icon;

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-4">
            WHAT WE <span className="text-secondary italic">DO</span>
          </h2>
          <p className="text-lg md:text-xl text-primary/70 font-medium leading-relaxed">
            We offer a comprehensive range of creative and digital marketing services, each designed to help your brand communicate with clarity, consistency, and impact.
          </p>
          <div className="w-24 h-2 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="md:flex md:items-center md:justify-between gap-10">
          {/* Left: details of currently highlighted service */}
          <div className="md:w-1/2">
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-primary/5 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-secondary flex items-center justify-center">
                  <CurrentIcon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight">{services[current].title}</h3>
                  <p className="text-primary/60 text-sm mt-1">{services[current].description.split('.').slice(0,2).join('.')}.</p>
                </div>
              </div>
              <p className="text-primary/60 text-sm leading-relaxed">
                {services[current].description}
              </p>
            </div>
          </div>

          {/* Right: semicircle gauge with rotating service labels */}
          <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <div className="relative w-[360px] h-[200px]">
              {/* Gauge background */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[360px] h-[360px] rounded-full border-2 border-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
              </div>

              {/* Rotating group */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: 0, height: 0 }}
              >
                <div
                  className="relative"
                  style={{ transform: `rotate(${(-current * angleStep)}deg)` }}
                >
                  {services.map((s, i) => {
                    const itemAngle = i * angleStep;
                    const containerRotation = -current * angleStep;
                    const totalRotation = containerRotation + itemAngle;
                    const labelRotate = -totalRotation;
                    const y = -radius;
                    return (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2"
                        style={{ transform: `rotate(${itemAngle}deg)` }}
                      >
                        <div
                          className="absolute left-1/2 top-1/2 text-center"
                          style={{
                            transform: `translate(-50%, ${y}px) rotate(${labelRotate}deg)`,
                            transformOrigin: 'center center',
                            minWidth: 120
                          }}
                        >
                          <div className={`px-3 py-1 rounded-full ${i === current ? 'bg-secondary text-white font-black shadow-lg' : 'bg-white/5 text-white/70'}`}>
                            {s.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Static arrow/pointer */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00C48C" />
                      <stop offset="100%" stopColor="#007F5F" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.06)" />
                  <path d="M32 12 L36 24 L32 22 L28 24 Z" fill="url(#g1)" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
                  <rect x="30" y="22" width="4" height="16" rx="2" fill="url(#g1)" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaServices;
