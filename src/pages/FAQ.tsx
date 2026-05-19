import { Section } from '../components/Layout';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'About the Service',
    questions: [
      {
        q: 'What MBA programs do you specialize in?',
        a: 'We specialize in M7 MBA programs (Wharton, Booth, Kellogg, Sloan, Columbia, Stern, Tuck) and top European MBAs including HEC Paris and SDA Bocconi. We also support MS and Masters in Engineering applications.'
      },
      {
        q: 'Who are your consultants?',
        a: 'Our consultants are alumni of HEC Paris(MBA), IIT-M(M.Tech), NIT-C (B.Tech) and SDA Bocconi (MBA), ISEP Paris (MS) with firsthand multiple international admissions experience.'
      },
      {
        q: 'What services do you offer?',
        a: 'We offer four tiers of engagement: The Diagnostic (profile evaluation session), The Final Polish (full application audit), The Narrative (story architecture and essay coaching), and The Comprehensive (end-to-end application management). Visit our Services page for full details.'
      }
    ]
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'How does the consulting process work?',
        a: 'We start with a profile evaluation to understand your background, goals, and target schools. From there we build a strategy-led narrative and guide you through every step: essays, CVs, letters of recommendation, interviews, and final submission.'
      },
      {
        q: 'How long does the process take?',
        a: 'It depends on your chosen package and the number of schools you are targeting. A diagnostic session can be completed in days, while a full end-to-end engagement typically runs alongside your application cycle. We recommend starting as early as possible.'
      },
      {
        q: 'Do you offer a free consultation?',
        a: 'Yes. We offer a free intro call and a complimentary profile evaluation so you can get an honest read on your profile before committing to any package.'
      }
    ]
  },
  {
    category: 'Pricing & Contact',
    questions: [
      {
        q: 'How much does consulting cost?',
        a: 'Pricing varies depending on the engagement tier and scope of work. Reach out to us directly for a tailored quote based on your profile and target schools.'
      },
      {
        q: 'How can I contact you?',
        a: 'You can email us at consultingelitemba@gmail.com or send us a DM on LinkedIn at linkedin.com/company/elite-masters-consulting. We typically respond within 24 hours.'
      },
      {
        q: 'How do I get started?',
        a: 'The best first step is our free profile evaluation. It gives you clarity on where you stand and what strategy makes sense for your goals.'
      }
    ]
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border-b border-gray-100 transition-all duration-300 ${open ? 'pb-6' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-6"
      >
        <span className="text-brand-navy font-medium text-sm md:text-base leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`text-brand-gold shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-brand-slate text-sm leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="pt-20">
      <Section className="bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          FAQ
        </motion.div>
        <h1 className="text-5xl md:text-7xl mb-8">
          Your Questions, <br />
          <span className="italic text-brand-gold">Answered.</span>
        </h1>
        <p className="text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed">
          Everything you need to know before taking the next step.
        </p>
      </Section>

      <Section className="bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="mb-12"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-2">
                {category.category}
              </p>
              <div className="bg-white px-8 divide-y divide-gray-100">
                {category.questions.map((item, j) => (
                  <FAQItem key={j} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-12">
            <p className="text-brand-slate text-sm mb-6">Still have questions? We're happy to help.</p>
            <Link to="/evaluate" className="btn-primary text-xs tracking-widest py-4 px-10">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
