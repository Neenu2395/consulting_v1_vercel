// Blog content source. Each entry is pre-rendered to a static page at
// /blog/<slug> at build time (see getStaticPaths in src/App.tsx) and listed
// on /blog. To publish a new article, add an object to this array and rebuild.
//
// `body` is an ordered list of blocks. This keeps content in version control
// without adding an MDX/markdown pipeline yet; swap to MDX later if richer
// formatting is needed.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-06-28 */
  date: string;
  readingTime: string;
  author: string;
  /** SEO keywords for this post */
  keywords: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'how-to-get-into-hec-paris-mba',
    title: 'How to Get Into the HEC Paris MBA: A Strategic Guide',
    description:
      'A step-by-step guide to the HEC Paris MBA application — what the admissions committee actually rewards, how to position an engineering or technical profile, and the timeline to follow.',
    date: '2026-06-28',
    readingTime: '6 min read',
    author: 'Elite Admissions Consulting',
    keywords:
      'HEC Paris MBA, HEC Paris MBA admissions, how to get into HEC Paris, HEC Paris essays, European MBA admissions',
    body: [
      {
        type: 'p',
        text: 'The HEC Paris MBA is one of the most selective programs in Europe, and the candidates who get in are rarely the ones with the highest GMAT alone. They are the ones who present a sharp, coherent story about where they have been and exactly why this program is the bridge to where they are going. This guide breaks down what the committee actually rewards and how to build that narrative.',
      },
      { type: 'h2', text: 'What HEC Paris Looks For' },
      {
        type: 'p',
        text: 'HEC values structured, analytical thinking paired with a clear sense of international ambition. The school is not simply collecting impressive resumes — it is assembling a cohort. Your job in the application is to show how you make that cohort better and how the program is a deliberate step in your trajectory, not a default option.',
      },
      {
        type: 'ul',
        items: [
          'Clarity of goals — short and long-term goals that are specific and believable given your background.',
          'Demonstrated leadership and impact, quantified wherever possible.',
          'A genuine reason for HEC specifically: faculty, specializations, the Paris ecosystem, the network.',
          'International outlook and the ability to thrive in a highly diverse classroom.',
        ],
      },
      { type: 'h2', text: 'Positioning a Technical or Engineering Profile' },
      {
        type: 'p',
        text: 'Engineers often undersell themselves by listing what they built instead of what changed because of them. The fix is to translate technical work into leadership and business impact: the decision you influenced, the team you aligned, the revenue or efficiency you moved. Admissions readers are not engineers — they need the "so what" made explicit.',
      },
      { type: 'h2', text: 'The Essays' },
      {
        type: 'p',
        text: 'Treat the essays as one connected argument, not independent prompts. Each answer should reinforce a single throughline about who you are and why this path makes sense. Vague ambition reads as risk; specificity reads as conviction. The strongest essays could not have been written by anyone else.',
      },
      { type: 'h2', text: 'A Realistic Timeline' },
      {
        type: 'ul',
        items: [
          '6–9 months out: profile diagnostic, school list, and GMAT/GRE strategy.',
          '4–6 months out: career-goal clarity and the core narrative.',
          '2–4 months out: essay development and recommender briefing.',
          '1–2 months out: interview preparation and final review before submission.',
        ],
      },
      {
        type: 'p',
        text: 'If you want a candid read on where your profile stands for HEC Paris and which schools are realistic, start with a free profile evaluation — we will tell you the hard truth, not what you want to hear.',
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
