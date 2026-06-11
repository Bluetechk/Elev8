import { BookOpen, Palette, Megaphone, Briefcase, BarChart, Users, DollarSign, Globe, MessageSquare, ShieldCheck, Cpu, Calculator } from 'lucide-react';

import graphicsDesignImg from '../assets/graphicsdesign_Photoshop.jfif';
import digitalMarketingImg from '../assets/digital_Marketing.jfif';
import entrepreneurshipImg from '../assets/entepreneur&management.jfif';
import projectMgmtImg from '../assets/project_management.jfif';
import excelImg from '../assets/Excel.jfif';
import hrImg from '../assets/humanresourcement.jfif';
import wordpressImg from '../assets/WordPress Development Services.jfif';
import quickbooksImg from '../assets/quickbook.jfif';

const categoryColors: Record<string, string> = {
  'Creative & Digital': '#0091FF',
  'Business & Management': '#00D084',
  'Technical & Tools': '#0091FF',
  'Soft Skills': '#00D084',
};

const courses = [
  {
    title: 'Graphic Design with Adobe Photoshop',
    desc: 'A hands-on introduction to Photoshop — the industry standard for design and image editing.',
    ideal: 'Aspiring designers, marketers, content creators.',
    icon: Palette,
    category: 'Creative & Digital',
    image: graphicsDesignImg,
  },
  {
    title: 'Digital Marketing & Content Creation',
    desc: 'Build and run digital campaigns that drive real results — strategy, copywriting, and analytics.',
    ideal: 'Entrepreneurs, content creators, job seekers.',
    icon: Megaphone,
    category: 'Creative & Digital',
    image: digitalMarketingImg,
  },
  {
    title: 'Entrepreneurship & Business Management',
    desc: 'Take a business from idea to launch and growth — validation, planning, and management.',
    ideal: 'Aspiring entrepreneurs, small business owners.',
    icon: Briefcase,
    category: 'Business & Management',
    image: entrepreneurshipImg,
  },
  {
    title: 'Project Management',
    desc: 'Core tools to plan, scope, budget, and deliver projects while managing risk and stakeholders.',
    ideal: 'Team leaders, administrators, professionals.',
    icon: BarChart,
    category: 'Business & Management',
    image: projectMgmtImg,
  },
  {
    title: 'Microsoft Excel Essentials',
    desc: "Organize data, build formulas, and create reports in the world's essential business tool.",
    ideal: 'Office professionals, finance staff, students.',
    icon: Calculator,
    category: 'Technical & Tools',
    image: excelImg,
  },
  {
    title: 'Human Resource Management',
    desc: 'A practical foundation in recruitment, performance management, and labor-law basics.',
    ideal: 'Aspiring HR professionals, team leaders.',
    icon: Users,
    category: 'Business & Management',
    image: hrImg,
  },
  {
    title: 'Financial Management',
    desc: 'Make informed money decisions — budgeting, cash flow, and financial reporting.',
    ideal: 'Entrepreneurs, managers, administrators.',
    icon: DollarSign,
    category: 'Business & Management',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Web Development with WordPress',
    desc: 'Build fully functional, professionally designed websites — no coding experience required.',
    ideal: 'Entrepreneurs, freelancers, small business owners.',
    icon: Globe,
    category: 'Creative & Digital',
    image: wordpressImg,
  },
  {
    title: 'Effective Communication & Public Speaking',
    desc: 'Sharpen presentation skills and speak with confidence, structure, and clarity.',
    ideal: 'Professionals, students, leaders.',
    icon: MessageSquare,
    category: 'Soft Skills',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Leadership & Organizational Development',
    desc: 'Develop the character, clarity, and competence that great leadership requires.',
    ideal: 'Current and aspiring leaders, managers.',
    icon: ShieldCheck,
    category: 'Soft Skills',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Robotics & Coding',
    desc: 'Hands-on coding logic and robot-building that grows real problem-solving thinking.',
    ideal: 'Young innovators, beginners in tech.',
    icon: Cpu,
    category: 'Technical & Tools',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'QuickBooks Accounting Software',
    desc: 'Manage company files, income, expenses, and invoices in the leading accounting platform.',
    ideal: 'Entrepreneurs, finance professionals.',
    icon: Calculator,
    category: 'Technical & Tools',
    image: quickbooksImg,
  },
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
          {courses.map((course, i) => {
            const color = categoryColors[course.category] ?? '#00D084';
            return (
              <div
                key={i}
                className="group flex flex-col overflow-hidden rounded-4xl border border-primary/5 bg-bg-light shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary/30 hover:bg-white hover:shadow-xl"
              >
                {/* Image header (with brand-gradient + icon fallback) */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${color}, #06221C)` }}
                >
                  {/* Faint icon sits behind the photo and shows if it fails to load */}
                  <course.icon className="absolute bottom-4 right-4 text-white/20" size={72} strokeWidth={1.5} />

                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Bottom scrim */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Category chip */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {course.category}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute -bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg">
                    <course.icon size={22} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7 pt-9">
                  <h3 className="mb-3 text-lg font-black uppercase leading-tight text-primary transition-colors group-hover:text-secondary">
                    {course.title}
                  </h3>
                  <p className="mb-6 text-sm font-medium leading-relaxed text-primary/60">
                    {course.desc}
                  </p>

                  <div className="mt-auto border-t border-primary/5 pt-5">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary/40">Ideal For</p>
                    <p className="text-xs font-bold italic leading-relaxed text-primary/70">
                      {course.ideal}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
