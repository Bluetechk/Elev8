import { BookOpen, Palette, Megaphone, Briefcase, BarChart, Users, DollarSign, Globe, MessageSquare, ShieldCheck, Cpu, Calculator } from 'lucide-react';

const courses = [
  {
    title: "Certificate in Graphic Design Using Adobe Photoshop",
    desc: "In a world driven by visual communication, the ability to create professional graphics is essential. This course provides a comprehensive, hands-on introduction to Adobe Photoshop — the industry-standard tool for design and image editing.",
    ideal: "Aspiring designers, marketing professionals, entrepreneurs, content creators.",
    icon: Palette,
    category: "Creative & Digital"
  },
  {
    title: "Certificate in Digital Marketing & Content Creation",
    desc: "Equips students with the strategic knowledge and practical tools to build and execute digital marketing campaigns that drive real results. Topics include social media strategy, copywriting, and analytics.",
    ideal: "Entrepreneurs, content creators, job seekers in the digital economy.",
    icon: Megaphone,
    category: "Creative & Digital"
  },
  {
    title: "Certificate in Entrepreneurship & Business Management",
    desc: "Explore the full lifecycle of a business — from ideation and validation to planning, launching, managing, and growing. This is one of the most practical and transformative courses we offer.",
    ideal: "Aspiring entrepreneurs, small business owners, recent graduates.",
    icon: Briefcase,
    category: "Business & Management"
  },
  {
    title: "Certificate in Project Management",
    desc: "Introduces core principles and practical tools of project management: planning, scoping, budgeting, risk management, and stakeholder communication.",
    ideal: "Professionals across all industries, team leaders, administrators.",
    icon: BarChart,
    category: "Business & Management"
  },
  {
    title: "Certificate in Microsoft Excel Essentials",
    desc: "Learn how to navigate Excel confidently to organize data, build formulas, create visual reports, and automate repetitive tasks. Master the world's most essential business tool.",
    ideal: "Office professionals, finance staff, students, entrepreneurs.",
    icon: Calculator,
    category: "Technical & Tools"
  },
  {
    title: "Certificate in Human Resource Management",
    desc: "A solid, practical foundation in HR principles: recruitment, performance management, labor law fundamentals, and organizational success.",
    ideal: "Aspiring HR professionals, business owners, team leaders.",
    icon: Users,
    category: "Business & Management"
  },
  {
    title: "Certificate in Financial Management",
    desc: "Equips you with tools to make informed financial decisions: budgeting, cash flow management, financial statements, and reporting.",
    ideal: "Entrepreneurs, business managers, NGO administrators.",
    icon: DollarSign,
    category: "Business & Management"
  },
  {
    title: "Certificate in Web Development Using WordPress",
    desc: "Learn to build fully functional, professionally designed websites using WordPress. No prior coding experience required.",
    ideal: "Entrepreneurs, freelancers, small business owners.",
    icon: Globe,
    category: "Creative & Digital"
  },
  {
    title: "Certificate in Effective Communication & Public Speaking",
    desc: "Develop written and verbal abilities with a strong emphasis on public speaking, presentation skills, and professional communication.",
    ideal: "Professionals, students, leaders, entrepreneurs.",
    icon: MessageSquare,
    category: "Soft Skills"
  },
  {
    title: "Certificate in Leadership & Organizational Development",
    desc: "Focuses on the character, clarity, and competence that great leadership requires. Covers styles, team motivation, and strategic thinking.",
    ideal: "Current and aspiring leaders, managers, entrepreneurs.",
    icon: ShieldCheck,
    category: "Soft Skills"
  },
  {
    title: "Robotics & Coding",
    desc: "Hands-on robotics and programming. Students learn coding logic and how to build simple robots to develop problem-solving thinking.",
    ideal: "Young innovators, tech enthusiasts, beginners in coding.",
    icon: Cpu,
    category: "Technical & Tools"
  },
  {
    title: "QuickBooks — Accounting Software",
    desc: "Practical course in managing company files, income, expenses, and invoices using the world's leading accounting platform.",
    ideal: "Entrepreneurs, finance professionals, small business owners.",
    icon: Calculator,
    category: "Technical & Tools"
  }
];

const CourseCatalog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-6">
            OUR <span className="text-secondary italic">COURSES</span>
          </h2>
          <p className="text-lg md:text-xl text-primary/70 font-medium leading-relaxed">
            At Elev8 School of Skills, we offer a growing portfolio of certificate programs designed to equip individuals with practical, career-ready skills.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm uppercase tracking-widest border border-secondary/20">
            <BookOpen size={18} />
            8-Week Programs • Official Certificates   
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group bg-bg-light p-8 rounded-[2rem] shadow-sm border border-primary/5 hover:border-secondary/30 transition-all duration-500 flex flex-col justify-between hover:bg-white hover:shadow-xl"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 shadow-sm">
                  <course.icon size={28} />
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-3">
                  {course.category}
                </p>

                <h3 className="text-xl font-black text-primary uppercase leading-tight mb-4 group-hover:text-secondary transition-colors">
                  {course.title}
                </h3>

                <p className="text-primary/60 text-sm leading-relaxed mb-6 font-medium">
                  {course.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-primary/5">
                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2">Ideal For:</p>
                <p className="text-xs font-bold text-primary/70 leading-relaxed italic">
                  {course.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto p-10 bg-primary rounded-[2.5rem] text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <BookOpen size={150} />
          </div>
          <div className="relative z-10">
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">Ready to Master a New Skill?</h4>
            <p className="text-white/70 mb-8 font-medium">Our next cohort starts soon. Secure your spot and start your journey from learning to earning.</p>
            <button className="px-10 py-4 bg-secondary text-primary font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 shadow-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
