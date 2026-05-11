import { motion } from 'framer-motion';

const MediaWhatWeDo = () => {
  return (
    <section className="relative py-12 bg-white text-primary overflow-hidden">
      {/* Decorative Ribbons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            d="M-100 100C200 200 400 0 600 100C800 200 1000 0 1200 100C1400 200 1600 0 1800 100" 
            stroke="var(--color-secondary)" 
            strokeWidth="30" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/5 relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
              WHAT WE <span className="text-secondary">DO</span>
            </h2>

            <div className="space-y-12 text-primary/70 text-lg leading-relaxed">
              <p className="font-medium text-primary">
                We offer a comprehensive range of creative and digital marketing services, each designed to help your brand communicate with clarity, consistency, and impact.
              </p>

              {/* Service Grid 1 */}
              <div className="grid md:grid-cols-3 gap-12 pt-8">
                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Branding</h4>
                  <p className="text-sm text-primary/60">Your brand is more than a logo — it is the total impression your business leaves on the world. We help businesses develop strong, cohesive brand identities that accurately represent who they are, what they stand for, and why they matter. From brand strategy and logo design to color systems and visual guidelines, we build brands that are built to last.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Graphic Design</h4>
                  <p className="text-sm text-primary/60">We create compelling visual content that communicates your message and captures attention. Whether you need promotional flyers, social media graphics, banners, event materials, or branded stationery, our design work is purposeful, polished, and aligned with your brand identity.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Videography</h4>
                  <p className="text-sm text-primary/60">Video is the most powerful storytelling tool available to a business today. Our videography services cover promotional videos, brand films, event documentation, product showcases, testimonials, and more. We handle everything from concept to final delivery — producing content that engages, informs, and converts.</p>
                </div>
              </div>

              {/* Service Grid 2 */}
              <div className="grid md:grid-cols-3 gap-12 pt-8 border-t border-primary/5">
                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Photography</h4>
                  <p className="text-sm text-primary/60">First impressions matter, and professional photography is one of the most direct ways to elevate the perceived quality of your brand. We offer product photography, team and corporate portraits, event photography, and general brand photography that gives your business the visual credibility it deserves.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Web Design</h4>
                  <p className="text-sm text-primary/60">Your website is your most important business address. We design and develop clean, professional, and functional websites that represent your brand accurately, perform well on mobile devices, and deliver a smooth experience for every visitor. A well-designed website builds trust before a single word is read.</p>
                </div>

                <div className="space-y-4 border-l-4 border-secondary pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">S.M. Management</h4>
                  <p className="text-sm text-primary/60">Consistency on social media is what separates growing brands from stagnant ones. We manage your Facebook and Instagram presence end-to-end — developing your content strategy, creating your posts, scheduling and publishing, and engaging with your audience on your behalf. You focus on running your business; we keep your brand alive online.</p>
                </div>
              </div>

              {/* Final Service / CTA link style */}
              <div className="pt-12 border-t border-primary/10">
                 <div className="space-y-4 border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-black text-primary uppercase">Social Media Marketing</h4>
                  <p className="text-sm text-primary/60">Beyond management, we design and execute targeted social media marketing campaigns that put your brand in front of the right audience at the right time. Our campaigns are strategic, data-informed, and built around your specific business goals — whether that is driving foot traffic, generating leads, promoting an event, or building brand awareness.</p>
                </div>
              </div>

              <div className="pt-8 text-center">
                <p className="text-2xl font-black text-primary uppercase tracking-tighter">
                  YOUR BRAND DESERVES TO BE <span className="text-secondary italic">SEEN.</span>
                </p>
                <p className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mt-2">
                  Let us make sure it is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaWhatWeDo;
