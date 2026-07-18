import { Head } from 'vite-react-ssg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Printer, RotateCcw, ArrowRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';

const PAGE_URL = `${SITE_URL}/resources/mba-application-checklist`;
const STORAGE_KEY = 'mba-application-checklist';

interface ChecklistSection {
  phase: string;
  timeframe: string;
  items: string[];
}

const sections: ChecklistSection[] = [
  {
    phase: 'Foundation',
    timeframe: '9 to 12 months out',
    items: [
      'Define your post-MBA career goals, both short and long term.',
      'Honestly assess your profile: academics, work impact, leadership, and extracurriculars.',
      'Understand the program types: M7, top European, one-year vs two-year.',
      'Decide between the GMAT and GRE and book a test date.',
      'Set a target test score based on the schools you are considering.',
    ],
  },
  {
    phase: 'Strategy',
    timeframe: '6 to 9 months out',
    items: [
      'Take the GMAT or GRE (and plan a retake window if needed).',
      'Build a balanced school list: reach, target, and safer options.',
      'Research each school: alumni outcomes, location, recruiting, and culture.',
      'Identify your recommenders and approach them early.',
      'Start shaping your core narrative: the throughline of your story.',
    ],
  },
  {
    phase: 'Build',
    timeframe: '3 to 6 months out',
    items: [
      'Re-engineer your CV or resume into an admissions-ready format.',
      'Outline your essays around one coherent narrative.',
      'Brief your recommenders with specific stories and examples.',
      'Draft, get feedback, and iterate on your essays over multiple rounds.',
      'Prepare any short-answer and goals essays each school requires.',
    ],
  },
  {
    phase: 'Polish and Submit',
    timeframe: '1 to 3 months out',
    items: [
      'Finalize essays with a fresh-eyes review for tone and consistency.',
      'Confirm transcripts, test scores, and supporting documents are ready.',
      'Complete the online application data fields carefully.',
      'Proofread everything one last time against the bar you are targeting.',
      'Submit before the deadline, aiming for Round 1 or early Round 2.',
    ],
  },
  {
    phase: 'Interview and Decisions',
    timeframe: 'After submission',
    items: [
      'Prepare for interviews: school-specific questions and behavioral stories.',
      'Run mock interviews to pressure-test your answers.',
      'Send thoughtful thank-you notes where appropriate.',
      'Plan a waitlist strategy in case you need one.',
      'Compare your admits on ROI, scholarships, fit, and location.',
    ],
  },
];

const allItemIds = sections.flatMap((s, si) => s.items.map((_, ii) => `${si}-${ii}`));

export function MbaApplicationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load saved progress after mount (kept out of the initial render so the
  // server-rendered and first client render match, avoiding hydration issues).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      /* ignore unavailable/blocked storage */
    }
  }, []);

  const persist = (next: Record<string, boolean>) => {
    setChecked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const toggle = (id: string) => persist({ ...checked, [id]: !checked[id] });
  const reset = () => persist({});

  const completed = allItemIds.filter((id) => checked[id]).length;
  const total = allItemIds.length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="pt-20">
      <Head>
        <title>The Complete MBA Application Checklist (Free) | Elite Admissions Consulting</title>
        <meta
          name="description"
          content="A free, step-by-step MBA application checklist covering every phase from research and testing to essays, interviews, and decisions. Built by HEC Paris and SDA Bocconi alumni."
        />
        <meta
          name="keywords"
          content="MBA application checklist, MBA application timeline, how to apply to MBA step by step, MBA application steps, MBA admissions checklist"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="The Complete MBA Application Checklist (Free)" />
        <meta
          property="og:description"
          content="A free, step-by-step MBA application checklist from research and testing to essays, interviews, and decisions."
        />
        <meta property="twitter:url" content={PAGE_URL} />
        <meta property="twitter:title" content="The Complete MBA Application Checklist (Free)" />
        <meta
          property="twitter:description"
          content="A free, step-by-step MBA application checklist from research and testing to essays, interviews, and decisions."
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
          { name: 'MBA Application Checklist', path: '/resources/mba-application-checklist' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'The Complete MBA Application Checklist',
          description:
            'A free, step-by-step MBA application checklist covering every phase from research and testing to essays, interviews, and decisions.',
          url: PAGE_URL,
          mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
          author: { '@type': 'Organization', name: 'Elite Admissions Consulting', url: SITE_URL },
          publisher: {
            '@type': 'Organization',
            name: 'Elite Admissions Consulting',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
          },
        }}
      />

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">Free Resource</p>
          <h1 className="text-4xl md:text-6xl mb-8 leading-[1.1]">The Complete MBA Application Checklist</h1>
          <p className="text-brand-slate text-lg leading-relaxed mb-10">
            Every step of a strong MBA application, in order, across the full timeline. Tick items off as you go;
            your progress is saved on this device. Built by HEC Paris and SDA Bocconi alumni who have navigated
            these committees firsthand.
          </p>

          {/* Progress + actions */}
          <div className="mb-12 p-6 bg-brand-cream border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-navy">
                {completed} of {total} complete
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="text-brand-slate hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 text-sm"
                >
                  <Printer size={16} /> Print
                </button>
                <button
                  onClick={reset}
                  className="text-brand-slate hover:text-brand-gold transition-colors inline-flex items-center gap-1.5 text-sm"
                >
                  <RotateCcw size={16} /> Reset
                </button>
              </div>
            </div>
            <div className="h-2 bg-white border border-gray-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-gold to-[#E2C285] transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, si) => (
              <div key={si}>
                <div className="flex items-baseline justify-between mb-5 border-b border-gray-100 pb-3">
                  <h2 className="text-2xl font-serif text-brand-navy">
                    {si + 1}. {section.phase}
                  </h2>
                  <span className="text-[11px] uppercase tracking-widest text-brand-gold font-bold">
                    {section.timeframe}
                  </span>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, ii) => {
                    const id = `${si}-${ii}`;
                    const isChecked = !!checked[id];
                    return (
                      <li key={id}>
                        <button
                          onClick={() => toggle(id)}
                          className="w-full flex items-start gap-3 text-left group"
                          aria-pressed={isChecked}
                        >
                          {isChecked ? (
                            <CheckCircle2 size={22} className="text-brand-gold shrink-0 mt-0.5" />
                          ) : (
                            <Circle size={22} className="text-gray-300 group-hover:text-brand-gold transition-colors shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-lg leading-relaxed transition-colors ${
                              isChecked ? 'text-gray-400 line-through' : 'text-brand-slate'
                            }`}
                          >
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-navy text-white">
            <h2 className="text-2xl font-serif mb-3">Want this done with you, not just by you?</h2>
            <p className="text-gray-300 mb-6">
              A checklist tells you what to do. We help you do it well. Get a free, candid profile evaluation from
              HEC Paris and SDA Bocconi alumni.
            </p>
            <Link to="/evaluate" className="btn-primary bg-brand-gold text-brand-navy hover:bg-white inline-flex items-center gap-2">
              Book a Free Evaluation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
