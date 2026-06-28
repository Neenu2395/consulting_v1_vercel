import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';
import { posts } from '../data/posts';

export function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="pt-20">
      <Head>
        <title>Insights | MBA & MS Admissions Advice — Elite Consulting</title>
        <meta
          name="description"
          content="Strategy, essay, and interview advice for M7, HEC Paris, SDA Bocconi, and top Master's admissions — from HEC Paris and SDA Bocconi alumni."
        />
        <link rel="canonical" href="https://elite-admissions-consulting.com/blog" />
        <meta property="og:url" content="https://elite-admissions-consulting.com/blog" />
        <meta property="og:title" content="Insights | MBA & MS Admissions Advice — Elite Consulting" />
        <meta
          property="og:description"
          content="Strategy, essay, and interview advice for M7, HEC Paris, SDA Bocconi, and top Master's admissions."
        />
        <meta property="twitter:url" content="https://elite-admissions-consulting.com/blog" />
        <meta property="twitter:title" content="Insights | MBA & MS Admissions Advice — Elite Consulting" />
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
            Master's admissions — written by HEC Paris and SDA Bocconi alumni.
          </p>
        </div>

        <div className="grid gap-px bg-gray-100 border border-gray-100">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-brand-cream transition-colors"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-brand-slate mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-brand-gold">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-brand-slate leading-relaxed">{post.description}</p>
              </div>
              <ArrowUpRight
                size={28}
                className="text-brand-gold shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
