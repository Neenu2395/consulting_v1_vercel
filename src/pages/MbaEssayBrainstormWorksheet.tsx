import { Head } from 'vite-react-ssg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Printer, RotateCcw, ArrowRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';

const PAGE_URL = `${SITE_URL}/resources/mba-essay-brainstorming-worksheet`;
const STORAGE_KEY = 'mba-essay-worksheet';

interface PromptSection {
  theme: string;
  prompts: string[];
}

const sections: PromptSection[] = [
  {
    theme: 'Defining Moments',
    prompts: [
      'Describe a moment that changed how you see your career. What happened, and what shifted in you?',
      'What is an ordinary, unremarkable moment you keep coming back to? Why does it stay with you?',
    ],
  },
  {
    theme: 'Leadership and Impact',
    prompts: [
      'Describe a time you moved a group toward something they could not have done alone. What did you actually do, not just what was the outcome?',
      'When did you change your mind about something important at work? What changed it, and what did you do differently afterward?',
    ],
  },
  {
    theme: 'Failure and Growth',
    prompts: [
      'Describe a real failure, not a humble-brag. What did you do next, and what did you learn that still guides you today?',
    ],
  },
  {
    theme: 'Values and Motivation',
    prompts: [
      'What do you do when no one is watching that reveals what you genuinely care about?',
      'Why do you want an MBA or Master\'s now, specifically? What happens if you do not do it?',
    ],
  },
  {
    theme: 'Goals and Fit',
    prompts: [
      'Where do you want to be in five years, and why is that believable given where you have been?',
      'Why this school? Name something specific it offers that a ranking would never tell you.',
    ],
  },
];

const allPromptIds = sections.flatMap((s, si) => s.prompts.map((_, pi) => `${si}-${pi}`));

export function MbaEssayBrainstormWorksheet() {
  const [responses, setResponses] = useState<Record<string, string>>({});

  // Load saved answers after mount so the server and first client render match.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setResponses(JSON.parse(saved));
    } catch {
      /* ignore unavailable/blocked storage */
    }
  }, []);

  const persist = (next: Record<string, string>) => {
    setResponses(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const update = (id: string, value: string) => persist({ ...responses, [id]: value });
  const reset = () => {
    if (typeof window !== 'undefined' && !window.confirm('Clear all your answers on this device?')) return;
    persist({});
  };

  const answered = allPromptIds.filter((id) => (responses[id] ?? '').trim().length > 0).length;
  const total = allPromptIds.length;
  const pct = total ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="pt-20">
      <Head>
        <title>Free MBA Essay Brainstorming Worksheet | Elite Consulting</title>
        <meta
          name="description"
          content="A free MBA essay brainstorming worksheet with guided prompts to surface the stories that make your application memorable. Write, save, and print your answers."
        />
        <meta
          name="keywords"
          content="MBA essay brainstorming, MBA essay prompts, MBA essay ideas, how to brainstorm MBA essays, MBA essay worksheet, MS essay prompts"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Free MBA Essay Brainstorming Worksheet" />
        <meta
          property="og:description"
          content="Guided prompts to surface the stories that make your MBA or Master's application memorable. Write, save, and print."
        />
        <meta property="twitter:url" content={PAGE_URL} />
        <meta property="twitter:title" content="Free MBA Essay Brainstorming Worksheet" />
        <meta
          property="twitter:description"
          content="Guided prompts to surface the stories that make your MBA or Master's application memorable."
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
          { name: 'MBA Essay Brainstorming Worksheet', path: '/resources/mba-essay-brainstorming-worksheet' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'MBA Essay Brainstorming Worksheet',
          description:
            'A free MBA essay brainstorming worksheet with guided prompts to surface the stories that make your application memorable.',
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
          <h1 className="text-4xl md:text-6xl mb-8 leading-[1.1]">MBA Essay Brainstorming Worksheet</h1>
          <p className="text-brand-slate text-lg leading-relaxed mb-4">
            AI can draft an essay, but it cannot tell you which story is yours to tell. These prompts are built to
            surface the real material: the small moments, the honest failures, and the decisions that reveal who
            you are.
          </p>
          <p className="text-brand-slate text-lg leading-relaxed mb-10">
            Answer honestly and at length. Do not edit yet, just get it down. Your answers are saved on this
            device, and you can print them when you are ready to draft.
          </p>

          {/* Progress + actions */}
          <div className="mb-12 p-6 bg-brand-cream border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-navy">
                {answered} of {total} answered
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

          {/* Prompts */}
          <div className="space-y-12">
            {sections.map((section, si) => (
              <div key={si}>
                <h2 className="text-2xl font-serif text-brand-navy mb-6 border-b border-gray-100 pb-3">
                  {si + 1}. {section.theme}
                </h2>
                <div className="space-y-8">
                  {section.prompts.map((prompt, pi) => {
                    const id = `${si}-${pi}`;
                    return (
                      <div key={id}>
                        <label htmlFor={`prompt-${id}`} className="block text-lg text-brand-navy mb-3">
                          {prompt}
                        </label>
                        <textarea
                          id={`prompt-${id}`}
                          value={responses[id] ?? ''}
                          onChange={(e) => update(id, e.target.value)}
                          rows={4}
                          placeholder="Write freely here..."
                          className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-brand-slate leading-relaxed resize-y"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-brand-navy text-white">
            <h2 className="text-2xl font-serif mb-3">Have the raw material but not the narrative?</h2>
            <p className="text-gray-300 mb-6">
              The hardest part is choosing which stories to tell and how to shape them. That is exactly what we do.
              Bring your answers to a free profile evaluation with HEC Paris and SDA Bocconi alumni.
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
