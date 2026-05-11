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
  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">
            WHAT WE <span className="text-secondary italic">DO</span>
          </h2>
          <p className="text-lg md:text-xl text-primary/70 font-medium leading-relaxed">
            We offer a comprehensive range of creative and digital marketing services, each designed to help your brand communicate with clarity, consistency, and impact.
          </p>
          <div className="w-24 h-2 bg-secondary mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`p-10 bg-white rounded-[2.5rem] shadow-xl border border-primary/5 hover:border-secondary/30 transition-all duration-500 group ${i === services.length - 1 ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary text-secondary flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-4 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaServices;
