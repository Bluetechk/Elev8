import { Target, Star, Shield, Users, CheckCircle, BarChart, Lightbulb } from 'lucide-react';

const coreValues = [
  {
    title: "Intentionality",
    description: "At Elev8, every decision, every program, and every service is driven by deliberate purpose. We do not operate by chance or convenience — we plan with clarity, execute with focus, and measure everything against our mission. Intentionality is the standard by which we lead and deliver.",
    icon: Target,
    color: "bg-secondary"
  },
  {
    title: "Excellence",
    description: "We hold ourselves to a high bar in everything we produce and every service we render. From the quality of our training programs to the precision of our creative deliverables, excellence is not occasional — it is our baseline. We continuously improve, refine, and raise the standard of what Elev8 puts into the world.",
    icon: Star,
    color: "bg-accent"
  },
  {
    title: "Discipline",
    description: "Sustainable growth requires structure, consistency, and the willingness to prioritize long-term results over short-term ease. Elev8 operates with discipline — in how we manage our resources, develop our team, serve our clients, and build our business. We do not cut corners; we build foundations.",
    icon: Shield,
    color: "bg-secondary"
  },
  {
    title: "Community",
    description: "We believe that people grow faster and further when they are surrounded by the right community. Elev8 is committed to building environments — within our team, among our students, and across our client base — where individuals are supported, challenged, and celebrated. Our community is not a by-product of what we do; it is central to it.",
    icon: Users,
    color: "bg-accent"
  },
  {
    title: "Authenticity",
    description: "Elev8 leads from a place of genuine conviction. We are transparent about who we are, honest in how we operate, and consistent between what we say and what we do. Our clients, partners, and team members can expect the same Elev8 in every room, every contract, and every interaction.",
    icon: CheckCircle,
    color: "bg-secondary"
  },
  {
    title: "Impact",
    description: "We measure our success not only by revenue and growth, but by the difference we make in the lives of the people we serve and the communities we operate in. Every program we run and every service we deliver is designed to leave a measurable, meaningful mark — on individuals, on businesses, and on Liberia.",
    icon: BarChart,
    color: "bg-accent"
  },
  {
    title: "Innovation",
    description: "The world is changing rapidly, and Elev8 is committed to changing with it. We embrace new technologies, new methodologies, and new ideas that strengthen our ability to serve our mission. Innovation at Elev8 is not trend-chasing — it is a disciplined commitment to finding better ways to deliver real value.",
    icon: Lightbulb,
    color: "bg-secondary"
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#06221C] via-[#004D40] to-[#00695C] relative overflow-hidden">
      {/* Glossy decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Our Core <span className="text-secondary">Values</span></h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-white/60 mt-6 font-bold uppercase tracking-widest text-xs">We are driven by 7 Core Values</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`${value.color} w-24 h-24 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:rotate-6 transition-transform duration-500`}>
                <value.icon size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-3 tracking-tight text-white group-hover:text-secondary transition-colors uppercase">
                   {value.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
