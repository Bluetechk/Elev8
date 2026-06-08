import { CheckCircle2 } from 'lucide-react';

const MediaWhyUs = () => {
  const reasons = [ 
    {
      title: "We are a full-service agency",
      desc: "You do not need to coordinate multiple vendors for your branding, design, video, photography, and social media. We handle it all under one roof, ensuring consistency across every touchpoint of your brand."
    },
    {
      title: "We are rooted in Liberia",
      desc: "We understand the local market, the local audience, and the cultural context in which your business operates. Our work is not generic — it is built for the environment your business actually lives in."
    },
    {
      title: "We are invested in your growth",
      desc: "At Elev8 Media, we do not just execute tasks — we think strategically about your brand and your business. We bring ideas, not just deliverables."
    },
    {
      title: "We are part of a larger ecosystem",
      desc: "As a division of Elev8 Inc., our work is supported by a team that spans skills training, media production, and knowledge development. That breadth gives us a perspective and capability that a standalone agency cannot match."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-12 md:p-20 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-secondary/10">
             <CheckCircle2 size={120} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight uppercase tracking-tight">
              WHY <span className="text-secondary italic">ELEV8 MEDIA</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {reasons.map((reason, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-secondary transition-colors">
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-medium pl-14">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 text-center">
              <p className="text-secondary/60 font-black uppercase tracking-[0.4em] text-[10px]">
                Consistency • Context • Strategy • Ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaWhyUs;
