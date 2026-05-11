import { Search, PenTool, Camera, ClipboardCheck, Users } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    description: "We start by getting to know your business — your goals, your audience, your competitors, and your brand personality. We do not make assumptions; we ask the right questions.",
    icon: Search
  },
  {
    title: "Strategy",
    description: "Based on what we learn, we develop a clear creative and marketing strategy tailored to your specific business objectives.",
    icon: PenTool
  },
  {
    title: "Production",
    description: "Our creative team brings the strategy to life — designing, filming, photographing, writing, and building with precision and care.",
    icon: Camera
  },
  {
    title: "Delivery & Review",
    description: "We present our work, gather your feedback, and refine until you are fully satisfied with the output.",
    icon: ClipboardCheck
  },
  {
    title: "Ongoing Partnership",
    description: "For clients on retainer or management contracts, we monitor performance and continuously optimize for growth.",
    icon: Users
  }
];

const MediaProcess = () => {
  return (
    <section className="py-24 bg-[#0A0D14] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            OUR <span className="text-secondary italic">PROCESS</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We believe great creative work begins with great understanding. Here is how we work with every client.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 text-4xl font-black text-white/5 group-hover:text-secondary/10 transition-colors">
                 0{i + 1}
               </div>
               
               <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                 <step.icon size={32} />
               </div>
               
               <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-secondary transition-colors">
                 {step.title}
               </h3>
               
               <p className="text-white/60 leading-relaxed font-medium">
                 {step.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaProcess;
