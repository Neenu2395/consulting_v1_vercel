import { Section } from '../components/Layout';
import { EvaluationForm } from '../components/EvaluationForm';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, TrendingUp, Users, ArrowRight } from 'lucide-react';

export function Evaluate() {
  const investment = [
    {
      tier: 'Tier 0',
      title: 'The Diagnostic',
      price: 'from ₹4,999',
      note: 'Credited back in full when you upgrade to a paid engagement.'
    },
    {
      tier: 'Tier 1',
      title: 'The Final Polish',
      price: 'from ₹19,999',
      note: 'One-time AdCom audit of your full application portal.'
    },
    {
      tier: 'Tier 2',
      title: 'The Narrative',
      price: 'from ₹74,999',
      note: 'Story architecture, CV re-engineering, and 3-round essay editing.'
    },
    {
      tier: 'Tier 3',
      title: 'The Comprehensive',
      price: 'from ₹1,49,999',
      note: 'End-to-end management. + from ₹40,000 per additional school.',
      featured: true
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            Global Admissions Strategy
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-8">
            Get Your <br />
            <span className="italic text-brand-gold">Hard-Truth</span> Diagnostic.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            15 Minutes. Zero Fluff. Just a rigorous diagnostic of your M7/EU Elite MBA and MS chances. Speak directly with HEC and Bocconi Alums to identify the 'Red Flags' in your profile before the AdCom does.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 shadow-lg border-l-4 border-brand-gold">
              <h3 className="text-2xl mb-6 font-serif">What to Expect</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldAlert className="text-brand-gold" size={20} />,
                    title: "Hard Feedback",
                    desc: "We identify the 'Red Flags' in your profile immediately."
                  },
                  {
                    icon: <TrendingUp className="text-brand-gold" size={20} />,
                    title: "ROI Filter",
                    desc: "We analyze if your target schools align with your salary goals."
                  },
                  {
                    icon: <Users className="text-brand-gold" size={20} />,
                    title: "Human Imperative",
                    desc: "AI can help write essays, but human evaluation is necessary to get admission."
                  },
                  {
                    icon: <AlertCircle className="text-brand-gold" size={20} />,
                    title: "No Sales Pitch",
                    desc: "This is a strategy session for you, not a discovery call for us."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-brand-navy">{item.title}</h4>
                      <p className="text-brand-slate text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-brand-navy text-white shadow-lg">
              <p className="text-sm italic font-serif text-gray-300">
                "We architect the narrative that ambitious global applicants need to stand out in the most competitive pools."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <EvaluationForm />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              Transparent Investment
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">
              The diagnostic is <span className="italic text-brand-gold">free.</span>
            </h2>
            <p className="text-lg text-brand-slate max-w-2xl mx-auto leading-relaxed">
              Your 15-minute profile evaluation costs nothing. If you choose to engage us afterward, here is a rough idea of the investment — so you can plan with clarity before you commit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investment.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 transition-all duration-500 hover:-translate-y-2 ${item.featured ? 'bg-brand-navy text-white ring-2 ring-brand-gold relative' : 'bg-brand-cream/40 border border-gray-100'}`}
              >
                {item.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy px-4 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">{item.tier}</span>
                <h3 className={`font-serif text-2xl mb-4 ${item.featured ? 'text-white' : 'text-brand-navy'}`}>{item.title}</h3>
                <p className="text-brand-gold font-serif text-2xl font-bold mb-4">{item.price}</p>
                <p className={`text-xs leading-relaxed ${item.featured ? 'text-gray-300' : 'text-brand-slate'}`}>{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-cream p-8 md:p-10 border-l-4 border-brand-gold">
            <h4 className="font-serif text-xl text-brand-navy mb-3">Why "starting from"?</h4>
            <p className="text-brand-slate text-sm leading-relaxed mb-6">
              Final pricing depends on your target schools, the number of applications, profile complexity, and your timeline. Every engagement is founder-led and tailored — so we quote you a precise figure after your free diagnostic, with no obligation. Flexible per-school add-ons mean you only pay for the schools you actually target.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to="/services" className="btn-outline text-center text-xs tracking-widest inline-flex items-center justify-center">
                Compare Full Service Tiers <ArrowRight size={14} className="ml-2" />
              </Link>
              <a href="mailto:consultingelitemba@gmail.com" className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline">
                Or email us for a custom quote
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
