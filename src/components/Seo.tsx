import { Head } from 'vite-react-ssg';

export const SITE_URL = 'https://elite-admissions-consulting.com';

/**
 * Injects a JSON-LD <script> into the document head. Works during SSG render,
 * so the structured data is baked into the static HTML for Google and LLMs.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}

/**
 * Emits BreadcrumbList structured data for a page's position in the site.
 * Pass the trail from the homepage down to the current page.
 */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}
