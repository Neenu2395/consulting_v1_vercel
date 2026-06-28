import { Head } from 'vite-react-ssg';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Section } from '../components/Layout';
import { Breadcrumbs, JsonLd, SITE_URL } from '../components/Seo';
import { Comments } from '../components/Comments';
import { getPost } from '../data/posts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="pt-20">
        <Head>
          <title>Article not found | Elite Consulting</title>
          <meta name="robots" content="noindex" />
        </Head>
        <Section className="bg-white">
          <h1 className="text-4xl mb-6">Article not found</h1>
          <Link to="/blog" className="text-brand-gold inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Insights
          </Link>
        </Section>
      </div>
    );
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <div className="pt-20">
      <Head>
        <title>{`${post.title} | Elite Consulting`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="article:published_time" content={post.date} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.description} />
      </Head>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.keywords,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          author: post.authorUrl
            ? {
                '@type': 'Person',
                name: post.author,
                url: post.authorUrl,
                worksFor: { '@type': 'Organization', name: 'Elite Admissions Consulting', url: SITE_URL },
              }
            : { '@type': 'Organization', name: post.author, url: SITE_URL },
          publisher: {
            '@type': 'Organization',
            name: 'Elite Admissions Consulting',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
          },
        }}
      />

      <Section className="bg-white">
        <article className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-brand-slate mb-8">
            <Link to="/blog" className="hover:text-brand-gold transition-colors">
              Insights
            </Link>
            <ChevronRight size={12} className="text-brand-gold" />
            <span>Article</span>
          </nav>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-brand-slate mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-brand-gold">·</span>
            <span>{post.readingTime}</span>
            <span className="text-brand-gold">·</span>
            <span>
              By{' '}
              {post.authorUrl ? (
                <a
                  href={post.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy hover:text-brand-gold underline-offset-2 hover:underline transition-colors"
                >
                  {post.author}
                </a>
              ) : (
                post.author
              )}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl mb-10 leading-[1.1]">{post.title}</h1>

          <div className="space-y-6 text-lg leading-relaxed text-brand-slate">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-serif text-brand-navy pt-6">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="space-y-3 list-disc pl-6 marker:text-brand-gold">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="mt-16 p-8 bg-brand-navy text-white">
            <h3 className="text-2xl font-serif mb-3">Want a candid read on your profile?</h3>
            <p className="text-gray-300 mb-6">
              Get a free, no-pressure profile evaluation from HEC Paris and SDA Bocconi alumni.
            </p>
            <Link to="/evaluate" className="btn-primary bg-brand-gold text-brand-navy hover:bg-white inline-block">
              Book a Free Evaluation
            </Link>
          </div>

          <Comments pageId={post.slug} pageUrl={url} pageTitle={post.title} />
        </article>
      </Section>
    </div>
  );
}
