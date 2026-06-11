import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/SocialIcons';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "weelev8global@gmail.com",
      link: "mailto:weelev8global@gmail.com",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Phone,
      label: "Call & WhatsApp",
      value: "+231 881 177 501",
      link: "https://wa.me/231881177501",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MapPin,
      label: "Visit HQ",
      value: "Monrovia, Liberia",
      link: "#",
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-b from-primary/50 to-primary" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            LET'S <span className="text-secondary">CONNECT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Ready to elevate your business or personal brand? Our team is here to help you rise intentionally.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-bg-light relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side: Info & Socials (clean, card-free) */}
            <div className="space-y-12 lg:pt-4">
              <div>
                <h2 className="text-3xl font-black text-primary mb-2 uppercase tracking-tight">Get in Touch</h2>
                <p className="text-gray-500 font-medium mb-8 max-w-md">
                  Reach us directly through any of the channels below — we typically respond within a day.
                </p>

                <div className="divide-y divide-gray-200">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-5 py-5 group"
                    >
                      <div className={`${info.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                        <info.icon size={22} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{info.label}</p>
                        <p className="text-lg font-black text-primary group-hover:text-secondary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Inline WhatsApp prompt + socials */}
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-1">Prefer to chat?</h3>
                <p className="text-gray-500 font-medium mb-5 max-w-md">
                  Reach our community leads on WhatsApp for a faster response.
                </p>
                <a
                  href="https://wa.me/231881177501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
                >
                  <MessageSquare size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-5">Follow Our Journey</h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://facebook.com/share/p/14bctACaDPK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white border border-gray-200 transition-colors"
                  >
                    <FacebookIcon size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -4 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white border border-gray-200 transition-colors"
                  >
                    <InstagramIcon size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -4 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white border border-gray-200 transition-colors"
                  >
                    <LinkedInIcon size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 bg-secondary rounded-3xl rotate-12 -z-10 blur-2xl opacity-50" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-primary uppercase mb-2">Message Sent!</h3>
                    <p className="text-gray-500 font-medium">Thank you for reaching out. <br /> We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-secondary font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h2 className="text-3xl font-black text-primary mb-10 uppercase tracking-tight text-center lg:text-left">
                      Send a <span className="text-secondary">Message</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-gray-50 border-transparent border-b-2 border-b-gray-100 focus:border-b-secondary focus:bg-white px-6 py-4 rounded-xl outline-none transition-all font-medium"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-gray-50 border-transparent border-b-2 border-b-gray-100 focus:border-b-secondary focus:bg-white px-6 py-4 rounded-xl outline-none transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                        <select required className="w-full bg-gray-50 border-transparent border-b-2 border-b-gray-100 focus:border-b-secondary focus:bg-white px-6 py-4 rounded-xl outline-none transition-all font-medium appearance-none">
                          <option value="">Select a subject</option>
                          <option>General Inquiry</option>
                          <option>School of Skill Admission</option>
                          <option>Media & Branding Services</option>
                          <option>Impact Partnership</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                        <textarea 
                          required
                          rows={5} 
                          placeholder="How can we help you rise?" 
                          className="w-full bg-gray-50 border-transparent border-b-2 border-b-gray-100 focus:border-b-secondary focus:bg-white px-6 py-4 rounded-xl outline-none transition-all font-medium resize-none"
                        />
                      </div>

                      <motion.button 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-sm shadow-xl flex items-center justify-center gap-3 transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-secondary'}`}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
