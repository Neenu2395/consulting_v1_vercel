import { Section } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, BookOpen, Globe, CheckCircle2, Quote, Linkedin } from 'lucide-react';

export function Founders() {
  const founders = [
    {
      name: "Athul Gopinath",
      title: "Co-Founder & Lead Strategist",
      credentials: "HEC Paris MBA",
      image: "https://raw.githubusercontent.com/Neenu2395/consulting_v1_vercel/main/public/Athul.png",
      linkedin: "https://www.linkedin.com/in/athulgopinath/",
      achievements: [
        "HEC Paris MBA Alumnus",
        "Expert in Essay Architecture & Impact Visualization",
        "Specialist in Technical & Engineering Transitions",
        "Extensive network in US, EU and Asia"
      ],
      bio: "Athul brings the rigorous, structured logic of the French elite (HEC) to every application. He specializes in helping candidates from technical backgrounds translate their complex achievements into leadership narratives that resonate with admissions committees."
    },
    {
      name: "Neenu Thankachan",
      title: "Co-Founder & Lead Strategist",
      credentials: "SDA Bocconi MBA",
      image: "https://raw.githubusercontent.com/Neenu2395/consulting_v1_vercel/main/public/Neenu.png",
      linkedin: "https://www.linkedin.com/in/neenuthankachan/",
      achievements: [
        "SDA Bocconi MBA Alumna",
        "Expert in Global MBA and MS Strategy",
        "Specialist in Entrepreneurial & Design-Thinking Narratives",
        "Extensive Network in EU"
      ],
      bio: "Neenu brings the entrepreneurial flair and design-thinking mindset of the Italian masters (Bocconi). She focuses on the 'human' element of the application, ensuring that your authentic voice and leadership potential are undeniable."
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            The Global Power Couple Advantage
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-8">
            Two Perspectives. <br />
            <span className="italic text-brand-gold">One Goal.</span>
          </h1>
          <p className="text-xl text-brand-slate leading-relaxed mb-12">
            Most consultants provide a second pair of eyes. We provide a dual-committee review. Our 'Power Couple' approach means your application is stress-tested against the benchmarks of both the US M7 and the European Elite Master's standards.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-cream border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-gray-100 shadow-xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest">
                    {founder.credentials}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex-grow">
                <h3 className="text-3xl mb-2 font-serif">{founder.name}</h3>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">{founder.title}</p>
                
                <p className="text-brand-slate text-sm leading-relaxed mb-8">
                  {founder.bio}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-navy border-b border-brand-gold/20 pb-2">Key Achievements</h4>
                  <ul className="space-y-3">
                    {founder.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start space-x-3 text-xs text-brand-slate">
                        <CheckCircle2 size={14} className="text-brand-gold mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-brand-navy hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="text-brand-gold mx-auto mb-8 opacity-50" size={48} />
          <h2 className="text-4xl md:text-5xl mb-8 font-serif italic leading-tight">
            "We don't just consult; we mentor. Your success is a testament to the effectiveness of the strategy we've engineered over years of post-MBA experience."
          </h2>
          <p className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold">
            The Founders' Promise
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-8">The "Hard Truth" Philosophy</h2>
          <p className="text-brand-slate mb-12 leading-relaxed">
            We don't tell you what you want to hear. We tell you what the AdCom will think. If your GMAT is too low for your target M7 or your narrative is too 'generic' for HEC, we will tell you - and then we will help you pivot.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "No Sales Pitches",
              "Direct Founder Access",
              "ROI-Driven School Selection",
              "Zero-Deficit Strategy"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-brand-cream border border-gray-100">
                <CheckCircle2 className="text-brand-gold" size={20} />
                <span className="font-medium text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
