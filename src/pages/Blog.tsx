import { Head } from 'vite-react-ssg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';
import { posts, allTopics } from '../data/posts';

export function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const visible = activeTopic ? sorted.filter((p) => p.topics.includes(activeTopic)) : sorted;

  return (
    <div className="pt-20">
      <Head>
        <title>Insights | MBA & MS Admissions Advice - Elite Admissions Consulting</title>
        <meta
          name="description"
          content="Strategy, essay, and interview advice for M7, HEC Paris, SDA Bocconi, and top Master's admissions, from HEC Paris and SDA Bocconi alumni."
        />
        <link rel="canonical" href="https://elite-admissions-consulting.com/blog" />
        <meta property="og:url" content="https://elite-admissions-consulting.com/blog" />
        <meta property="og:title" content="Insights | MBA & MS Admissions Advice - Elite Admissions Consulting" />
        <meta
          property="og:description"
          content="Strategy, essay, and interview advice for M7, HEC Paris, SDA Bocconi, and top Master's admissions."
        />
        <meta property="twitter:url" content="https://elite-admissions-consulting.com/blog" />
        <meta property="twitter:title" content="Insights | MBA & MS Admissions Advice - Elite Admissions Consulting" />
      </Head>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/blog' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Elite Consulting Insights',
          url: `${SITE_URL}/blog`,
          blogPost: sorted.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            url: `${SITE_URL}/blog/${p.slug}`,
          })),
        }}
      />

      <Section className="bg-white">
        <div className="max-w-3xl mb-16">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">Insights</p>
          <h1 className="text-5xl md:text-7xl mb-8">Admissions Strategy, Decoded</h1>
          <p className="text-brand-slate text-lg leading-relaxed">
            Tactical advice on essays, school selection, and interviews for M7, top European MBA, and
            Master's admissions, written by HEC Paris and SDA Bocconi alumni.
          </p>
        </div>

        {/* Topic filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveTopic(null)}
            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${
              activeTopic === null
                ? 'bg-brand-navy text-white border-brand-navy'
                : 'bg-white text-brand-navy border-gray-200 hover:border-brand-gold hover:text-brand-gold'
            }`}
          >
            All ({sorted.length})
          </button>
          {allTopics.map((topic) => {
            const count = sorted.filter((p) => p.topics.includes(topic)).length;
            return (
              <button
                key={topic}
                onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${
                  activeTopic === topic
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-white text-brand-navy border-gray-200 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {topic} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid gap-px bg-gray-100 border border-gray-100 md:grid-cols-2">
          {visible.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white p-6 md:p-8 flex flex-col hover:bg-brand-cream transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-brand-slate">
                  {post.topics.map((topic) => (
                    <span key={topic} className="text-brand-gold font-bold">
                      {topic}
                    </span>
                  ))}
                  <span>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-brand-gold shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-brand-slate text-sm leading-relaxed line-clamp-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
