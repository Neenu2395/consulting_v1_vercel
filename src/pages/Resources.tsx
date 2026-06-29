import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';
import { resources } from '../data/resources';

export function Resources() {
  return (
    <div className="pt-20">
      <Head>
        <title>Free MBA & MS Admissions Resources | Elite Consulting</title>
        <meta
          name="description"
          content="Free tools and resources for MBA and Master's applicants: checklists, worksheets, and guides from HEC Paris and SDA Bocconi alumni."
        />
        <meta
          name="keywords"
          content="free MBA resources, MBA application tools, MBA checklist, MS admissions resources, MBA application help"
        />
        <link rel="canonical" href={`${SITE_URL}/resources`} />
        <meta property="og:url" content={`${SITE_URL}/resources`} />
        <meta property="og:title" content="Free MBA & MS Admissions Resources | Elite Consulting" />
        <meta
          property="og:description"
          content="Free tools and resources for MBA and Master's applicants from HEC Paris and SDA Bocconi alumni."
        />
        <meta property="twitter:url" content={`${SITE_URL}/resources`} />
        <meta property="twitter:title" content="Free MBA & MS Admissions Resources | Elite Consulting" />
      </Head>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Free MBA & MS Admissions Resources',
          url: `${SITE_URL}/resources`,
          hasPart: resources.map((r) => ({
            '@type': 'CreativeWork',
            name: r.title,
            url: `${SITE_URL}${r.path}`,
          })),
        }}
      />

      <Section className="bg-white">
        <div className="max-w-3xl mb-16">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">Free Resources</p>
          <h1 className="text-5xl md:text-7xl mb-8">Tools to Build a Stronger Application</h1>
          <p className="text-brand-slate text-lg leading-relaxed">
            Free, practical resources for MBA and Master's applicants, built by HEC Paris and SDA Bocconi alumni.
            Use them on your own, or bring them to a free evaluation and we will work through them with you.
          </p>
        </div>

        <div className="grid gap-px bg-gray-100 border border-gray-100 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.path}
              to={resource.path}
              className="group bg-white p-8 md:p-10 flex flex-col hover:bg-brand-cream transition-colors"
            >
              <span className="text-[11px] uppercase tracking-widest text-brand-gold font-bold mb-4">
                {resource.tag}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-brand-gold transition-colors">
                {resource.title}
              </h2>
              <p className="text-brand-slate leading-relaxed mb-6 flex-grow">{resource.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-brand-navy group-hover:text-brand-gold transition-colors">
                {resource.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
