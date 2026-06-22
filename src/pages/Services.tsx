import { Head } from 'vite-react-ssg';
import { Section } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export function Services() {
  const tiers = [
    {
      tier: 'Tier 0',
      title: 'The Diagnostic',
      pitch: 'Clarity Before Committing.',
      price: 'from ₹4,999',
      priceNote: 'Credited back when you upgrade to a paid engagement.',
      focus: 'Founder-Led Session',
      desc: 'A focused, founder-led session where we go deep on your profile, your goals, and your application history. No templates, no generic feedback—just an honest, experienced read from people who know these committees from the inside.',
      bestFor: 'Anyone at the start of their journey who wants clarity before committing to a full engagement.',
      deliverables: [
        "60-minute 1:1 session with our founders.",
        "Written profile assessment with honest gap analysis.",
        "Personalized school fit recommendations."
      ]
    },
    {
      tier: 'Tier 1',
      title: 'The Final Polish',
      pitch: 'The Last 2%.',
      price: 'from ₹19,999',
      priceNote: 'One-time audit of your full application portal.',
      focus: 'The AdCom Audit',
      desc: "Between a good application and a great one sits a layer of detail that only trained eyes catch. The Final Polish is a single, comprehensive audit of your entire application portal, delivered as a 'Red Flag Report' with clear, actionable notes.",
      bestFor: 'Self-starters who want the peace of mind of a HEC and Bocconi alumnus giving your application a final, honest yes or no.',
      deliverables: [
        "One-time comprehensive review of your full application portal.",
        "Red Flag Report: inconsistencies, weak links, missed opportunities.",
        "Final tone and elite polish check.",
        "Founder sign-off: a clear go / refine recommendation."
      ]
    },
    {
      tier: 'Tier 2',
      title: 'The Narrative',
      pitch: 'Own the Story.',
      price: 'from ₹74,999',
      priceNote: 'Per school. Story, CV re-engineering & 3-round essays.',
      focus: 'Story Architecture',
      desc: 'Own the story. Own the outcome. We move beyond the resume to transform your professional milestones into a cohesive, unforgettable leadership narrative.',
      bestFor: 'Applicants with a strong profile who need to bridge the gap between qualified and unforgettable.',
      deliverables: [
        "Deep-dive story mining sessions.",
        "CV/Resume re-engineering in AdCom-ready format.",
        "3-round iterative editing for SOPs and essays.",
        "LOR strategy: mapping recommenders to narrative gaps.",
        "One interview round if selected for the next stage.",
        "Reapplicant positioning (where applicable)."
      ]
    },
    {
      tier: 'Tier 3',
      title: 'The Comprehensive',
      pitch: 'Zero-Defect. End to End.',
      price: 'from ₹1,49,999',
      priceNote: '+ from ₹40,000 per additional school.',
      focus: 'The Full-Cycle Engine',
      desc: 'Zero-defect. End to end. Complete application management from day one. We act as your "Chief of Staff" for the entire admissions cycle, ensuring every detail is engineered for success.',
      bestFor: 'High-stakes applicants targeting M7 and top EU schools who want a zero-defect strategy from day one.',
      featured: true,
      deliverables: [
        "Everything in 'The Narrative.'",
        "School selection ROI analysis: US vs EU trade-offs.",
        "Unlimited mock interviews: M7 and HEC/Bocconi style.",
        "Full application portal review before submission.",
        "Waitlist and post-submission strategy."
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Head>
        <title>MBA & MS Admissions Services | Elite Consulting</title>
        <meta name="description" content="Strategy-led admissions packages for M7, top European MBA, and Master's applicants — from profile evaluation to interview prep." />
        <link rel="canonical" href="https://elite-admissions-consulting.com/services" />
        <meta property="og:url" content="https://elite-admissions-consulting.com/services" />
        <meta property="og:title" content="MBA & MS Admissions Services | Elite Consulting" />
        <meta property="og:description" content="Strategy-led admissions packages for M7, top European MBA, and Master's applicants — from profile evaluation to interview prep." />
        <meta property="twitter:url" content="https://elite-admissions-consulting.com/services" />
        <meta property="twitter:title" content="MBA & MS Admissions Services | Elite Consulting" />
        <meta property="twitter:description" content="Strategy-led admissions packages for M7, top European MBA, and Master's applicants — from profile evaluation to interview prep." />
      </Head>

      <Section className="bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          Service Modularization
        </motion.div>
        <h1 className="text-5xl md:text-7xl mb-8">
          Strategic <br />
          <span className="italic text-brand-gold">Intervention.</span>
        </h1>
        <p className="text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed">
          Choose the level of engagement your profile requires. From narrative architecture to end-to-end management.
        </p>
      </Section>

      <Section className="bg-brand-cream">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`flex flex-col p-10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 ${tier.featured ? 'ring-2 ring-brand-gold relative' : 'border border-gray-100'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Most Comprehensive
                </div>
              )}
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">{tier.tier}</span>
              <h3 className="text-3xl mb-2">{tier.title}</h3>
              <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-6">{tier.pitch}</p>
              <div className="mb-6 pb-6 border-b border-gray-100">
                <p className="font-serif text-3xl font-bold text-brand-gold">{tier.price}</p>
                <p className="text-[11px] text-brand-slate mt-1 leading-snug">{tier.priceNote}</p>
              </div>
              <p className="text-brand-slate text-sm leading-relaxed mb-8">{tier.desc}</p>

              <div className="mt-auto space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-slate border-b border-gray-100 pb-2">Deliverables</p>
                  <ul className="space-y-3">
                    {tier.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3 text-xs text-brand-navy leading-relaxed">
                        <Check size={14} className="text-brand-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">Best For</p>
                  <p className="text-xs italic text-brand-slate">{tier.bestFor}</p>
                </div>

                <Link to="/evaluate" className={`btn-primary w-full text-center text-xs tracking-widest py-4 ${tier.featured ? 'bg-brand-gold' : ''}`}>
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-brand-slate text-sm leading-relaxed mb-6">
            All prices are indicative starting points. Final pricing depends on your target schools, number of applications, profile complexity, and timeline — every engagement is founder-led and tailored. We confirm a precise quote after your free diagnostic, with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/evaluate" className="btn-primary text-center text-xs tracking-widest inline-flex items-center justify-center">
              Book Your Free Evaluation <ArrowRight size={14} className="ml-2" />
            </Link>
            <a href="mailto:consultingelitemba@gmail.com" className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline">
              Or email us for a custom quote
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
