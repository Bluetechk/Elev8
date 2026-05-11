import { motion } from 'framer-motion';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "System Optimization",
    description: "Build robust, scalable operational frameworks that work without you.",
    icon: Zap,
  },
  {
    title: "Leadership Alignment",
    description: "Align your core team around a single vision and mission for maximum impact.",
    icon: Users,
  },
  {
    title: "Strategic Scaling",
    description: "Data-driven growth strategies designed for 8-figure sustainability.",
    icon: TrendingUp,
  },
  {
    title: "Performance Metrics",
    description: "Real-time visibility into the health and profitability of your business.",
    icon: Target,
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            The Infrastructure of <span className="italic">Success.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="text-accent group-hover:text-primary transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
