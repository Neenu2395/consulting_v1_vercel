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
  /**
   * Optional profile URL for the author. When set, the author is treated as a
   * named Person (with this as sameAs) in the schema and byline; otherwise the
   * author is treated as the Organization.
   */
  authorUrl?: string;
  /** SEO keywords for this post */
  keywords: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: 'how-to-get-into-hec-paris-mba',
    title: 'How to Get Into the HEC Paris MBA: A Strategic Guide',
    description:
      'A step-by-step guide to the HEC Paris MBA application: what the admissions committee actually rewards, how to position an engineering or technical profile, and the timeline to follow.',
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
        text: 'HEC values structured, analytical thinking paired with a clear sense of international ambition. The school is not simply collecting impressive resumes; it is assembling a cohort. Your job in the application is to show how you make that cohort better and how the program is a deliberate step in your trajectory, not a default option.',
      },
      {
        type: 'ul',
        items: [
          'Clarity of goals: short and long-term goals that are specific and believable given your background.',
          'Demonstrated leadership and impact, quantified wherever possible.',
          'A genuine reason for HEC specifically: faculty, specializations, the Paris ecosystem, the network.',
          'International outlook and the ability to thrive in a highly diverse classroom.',
        ],
      },
      { type: 'h2', text: 'Positioning a Technical or Engineering Profile' },
      {
        type: 'p',
        text: 'Engineers often undersell themselves by listing what they built instead of what changed because of them. The fix is to translate technical work into leadership and business impact: the decision you influenced, the team you aligned, the revenue or efficiency you moved. Admissions readers are not engineers, so they need the "so what" made explicit.',
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
        text: 'If you want a candid read on where your profile stands for HEC Paris and which schools are realistic, start with a free profile evaluation. We will tell you the hard truth, not what you want to hear.',
      },
    ],
  },
  {
    slug: 'sda-bocconi-mba-worth-it-roi-guide',
    title: 'Is the SDA Bocconi MBA Worth It? An ROI & Admissions Guide',
    description:
      'A clear-eyed look at the SDA Bocconi MBA: cost, scholarships, career outcomes, who it suits, and how to position your application to get in.',
    date: '2026-06-26',
    readingTime: '7 min read',
    author: 'Elite Admissions Consulting',
    keywords:
      'SDA Bocconi MBA, SDA Bocconi MBA worth it, SDA Bocconi MBA ROI, SDA Bocconi admissions, Bocconi MBA scholarships, Italy MBA',
    body: [
      {
        type: 'p',
        text: 'SDA Bocconi sits among the strongest MBA programs in Europe, with particular pull in luxury, finance, and consulting across the EU. But "is it worth it" is the wrong question in the abstract; it is only worth it relative to your goals, your alternatives, and how you position yourself. Here is how to think about it honestly.',
      },
      { type: 'h2', text: 'The ROI Case' },
      {
        type: 'p',
        text: 'A European one-year MBA like Bocconi has a structural ROI advantage over two-year US programs: lower tuition and only one year of foregone salary. If your target is the EU market, Bocconi\'s brand and alumni network are hard to beat for the price. The calculus shifts if your goal is a US role, where M7 programs carry more recruiting weight.',
      },
      {
        type: 'ul',
        items: [
          'Shorter program = lower total cost and faster payback.',
          'Strong placement in consulting, finance, luxury, and consumer goods in Europe.',
          'Scholarships meaningfully change the ROI, so apply early, when more funding is available.',
          'Weigh it against your realistic M7 odds, not against the M7 brand in the abstract.',
        ],
      },
      { type: 'h2', text: 'Who Bocconi Suits' },
      {
        type: 'p',
        text: 'Bocconi rewards candidates with international ambition who want to build a career in or with Europe. If you are drawn to design-led, entrepreneurial, and globally minded business culture, it is a natural fit. If you are fixated solely on US tech or US finance, be honest about whether the geography matches your goals.',
      },
      { type: 'h2', text: 'Positioning Your Application' },
      {
        type: 'p',
        text: 'The committee wants coherence: a clear reason you are pursuing an MBA now, why Europe, and why Bocconi specifically. Generic ambition is the most common failure mode. Tie your past achievements to a specific forward trajectory the program enables, and make your international and leadership signals concrete and quantified.',
      },
      {
        type: 'p',
        text: 'One of our founders is an SDA Bocconi MBA alumna. If you want an inside read on fit, scholarships, and how to position your profile, book a free evaluation.',
      },
    ],
  },
  {
    slug: 'm7-mba-essays-for-engineers',
    title: 'M7 MBA Essays for Engineers: How to Stand Out',
    description:
      'Engineers have strong profiles but often write weak essays. Here is how to translate technical work into the leadership narrative M7 admissions committees reward.',
    date: '2026-06-24',
    readingTime: '6 min read',
    author: 'Elite Admissions Consulting',
    keywords:
      'M7 MBA essays, MBA essays for engineers, MBA admissions for engineers, technical profile MBA, leadership narrative MBA essay',
    body: [
      {
        type: 'p',
        text: 'Engineers are among the strongest MBA applicants on paper: analytical, high-achieving, often with impressive technical scope. Yet they are frequently dinged at M7 schools for one reason: their essays read like project reports, not leadership stories. The work is impressive; the framing is not. Here is how to fix that.',
      },
      { type: 'h2', text: 'The Core Problem: "What" vs "So What"' },
      {
        type: 'p',
        text: 'Technical writing trains you to describe what you built. Admissions essays demand the "so what": the decision you influenced, the people you aligned, the business outcome you moved. Readers on the committee are not engineers, and if the impact is not made explicit in human and commercial terms, it does not land.',
      },
      { type: 'h2', text: 'Translate Technical Work Into Leadership' },
      {
        type: 'ul',
        items: [
          'Lead with the outcome, not the architecture: revenue, cost, time, or risk you changed.',
          'Name the people: who you persuaded, mentored, or unblocked.',
          'Show judgment under ambiguity, not just technical correctness.',
          'Quantify everything you credibly can, because numbers are how committees calibrate scale.',
        ],
      },
      { type: 'h2', text: 'Build One Throughline' },
      {
        type: 'p',
        text: 'Treat the essay set as a single argument about who you are and where you are going, not a series of independent answers. The strongest engineering applicants connect their technical depth to a specific, believable leadership trajectory the MBA accelerates. That coherence is what separates "qualified" from "admitted."',
      },
      {
        type: 'p',
        text: 'We specialize in technical and engineering transitions for M7 and top EU programs. If you want help turning your work into a narrative that resonates, start with a free profile evaluation.',
      },
    ],
  },
  {
    slug: 'hec-paris-vs-insead-which-mba',
    title: 'HEC Paris vs INSEAD: Which MBA Is Right for You?',
    description:
      'A practical comparison of HEC Paris and INSEAD: format, culture, career outcomes, cost, and the kind of candidate each program rewards.',
    date: '2026-06-22',
    readingTime: '7 min read',
    author: 'Elite Admissions Consulting',
    keywords:
      'HEC Paris vs INSEAD, INSEAD vs HEC Paris, best MBA in France, European MBA comparison, INSEAD MBA, HEC Paris MBA',
    body: [
      {
        type: 'p',
        text: 'HEC Paris and INSEAD are two of the strongest MBA programs in Europe, and applicants often agonize over which to target. They are genuinely different programs, and the right answer depends on your goals, your timeline, and the kind of experience you want. Here is an honest comparison to help you decide.',
      },
      { type: 'h2', text: 'Format and Length' },
      {
        type: 'p',
        text: 'INSEAD runs an intense 10-month MBA with campuses in Fontainebleau, Singapore, and Abu Dhabi, built around speed and global mobility. HEC Paris runs a 16-month program with a longer runway for internships, specializations, and reflection. If you want the fastest possible return to the workforce, INSEAD is built for that. If you value time to pivot careers and intern, HEC gives you more room.',
      },
      { type: 'h2', text: 'Culture and Cohort' },
      {
        type: 'ul',
        items: [
          'INSEAD: famously international, fast-paced, and consulting-heavy, with a very large cohort and an enormous global alumni network.',
          'HEC Paris: smaller cohort, strong in finance, luxury, and entrepreneurship, with deep roots in the French and European business establishment.',
          'Both are highly diverse, but the day-to-day intensity and pace differ noticeably.',
        ],
      },
      { type: 'h2', text: 'Career Outcomes' },
      {
        type: 'p',
        text: 'Both programs place strongly into consulting and finance across Europe and beyond. INSEAD has unmatched pull with MBB consulting and a massive alumni base for global mobility. HEC Paris is exceptionally strong in finance, luxury, and roles anchored in continental Europe. Look closely at each school employment report for your target function and region rather than relying on overall brand.',
      },
      { type: 'h2', text: 'Cost and ROI' },
      {
        type: 'p',
        text: 'INSEAD tuition is higher, but the shorter program means less time out of the workforce. HEC costs less in tuition but takes longer, which adds to foregone salary. Scholarships shift this calculation for both, so factor in realistic funding when you compare total cost, not just sticker price.',
      },
      { type: 'h2', text: 'Which Should You Choose?' },
      {
        type: 'p',
        text: 'Choose INSEAD if you want speed, maximum global mobility, and a consulting-heavy network. Choose HEC Paris if you want a longer runway to pivot, internship options, and strength in finance, luxury, or European roles. Neither is objectively better; the better fit is the one aligned with your specific goals.',
      },
      {
        type: 'p',
        text: 'One of our founders is an HEC Paris MBA alumnus. If you want a candid read on which program fits your profile and goals, book a free evaluation.',
      },
    ],
  },
  {
    slug: 'gmat-vs-gre-for-mba',
    title: 'GMAT vs GRE for Top MBA Programs: Which Should You Take?',
    description:
      'Top MBA programs accept both the GMAT and GRE. Here is how to decide which test gives you the best shot based on your strengths and target schools.',
    date: '2026-06-20',
    readingTime: '5 min read',
    author: 'Elite Admissions Consulting',
    keywords:
      'GMAT vs GRE, GMAT or GRE for MBA, GRE for MBA, GMAT for MBA, MBA test requirements, M7 MBA GMAT',
    body: [
      {
        type: 'p',
        text: 'Almost every top MBA program, including the M7 and the leading European schools, now accepts both the GMAT and the GRE, and treats them equally. That means the question is no longer which test schools prefer, but which test lets you post the strongest score relative to other applicants. Here is how to choose.',
      },
      { type: 'h2', text: 'Do Schools Prefer One?' },
      {
        type: 'p',
        text: 'For the vast majority of top programs, no. Admissions committees have stated repeatedly that they have no preference and will not penalize a GRE submission. The exception is if you are also targeting certain finance or consulting roles that still ask for a GMAT score, so check your post-MBA recruiting goals, not just the school policy.',
      },
      { type: 'h2', text: 'Play to Your Strengths' },
      {
        type: 'ul',
        items: [
          'The GMAT rewards data sufficiency and integrated reasoning, which suit quantitatively confident test-takers.',
          'The GRE has a more vocabulary-heavy verbal section and an on-screen calculator for quant, which some find more forgiving.',
          'Take a full-length practice test of each, untimed pressure aside, and compare your percentiles. Go with the test where you land higher.',
        ],
      },
      { type: 'h2', text: 'Think in Percentiles, Not Raw Scores' },
      {
        type: 'p',
        text: 'Schools read your score as a percentile against the applicant pool, so the only comparison that matters is where each test places you. A higher GRE percentile beats a mediocre GMAT score every time. Use the official concordance tables to convert and compare honestly.',
      },
      { type: 'h2', text: 'The Bottom Line' },
      {
        type: 'p',
        text: 'Pick the test that showcases your strongest percentile, prepare seriously for that one, and do not waste months splitting effort across both. A confident, well-prepared GRE is far better than a half-hearted GMAT, and vice versa.',
      },
      {
        type: 'p',
        text: 'Not sure which test or score range your target schools expect? A free profile evaluation will give you a realistic benchmark for your list.',
      },
    ],
  },
  {
    slug: 'ai-cant-choose-your-mba-essay-story',
    title: "AI Can Write Your MBA Essay, But It Can't Choose Your Story",
    description:
      'AI can draft your MBA or MS essay, but it cannot tell you which moment from your life is worth writing about. Here is how to choose the story that actually lands.',
    date: '2026-06-27',
    readingTime: '4 min read',
    author: 'Neenu Thankachan',
    authorUrl: 'https://www.linkedin.com/in/neenuthankachan/',
    keywords:
      'MBA essay topic, what to write about in MBA essay, AI MBA essays, MBA essay story, how to choose MBA essay topic, SDA Bocconi essay, MS essay',
    body: [
      {
        type: 'p',
        text: 'AI can write your MBA or MS essay. We all know this by now. You can generate a clean, grammatical, perfectly competent draft in seconds. But that was never the hard part of the essay, and it is not where applications are won or lost.',
      },
      { type: 'h2', text: 'The Story You Almost Skip Is Often the Right One' },
      {
        type: 'p',
        text: 'When I was sitting with my Bocconi application, no tool could have told me which moment from my life was worth writing about. I almost skipped the ones that ended up mattering most. They felt too small, too ordinary, not impressive enough. It turned out those were exactly the right ones.',
      },
      {
        type: 'p',
        text: 'This is the part no model can do for you. Choosing the story takes judgment about your own life: knowing which ordinary moment actually reveals who you are, and trusting it over the obvious trophy.',
      },
      { type: 'h2', text: 'Why a Small Moment Beats a Big Achievement' },
      {
        type: 'p',
        text: 'A small moment, told well, lands harder than a big achievement that is simply listed. The achievement tells the committee what you did. The moment shows them how you think, what you value, and what you do when no one is watching. One is a line on a resume. The other is a reason to admit you.',
      },
      { type: 'h2', text: "The Committee Doesn't Want Your Highlight Reel" },
      {
        type: 'p',
        text: 'Admissions readers are not looking for your highlight reel. They want to feel like they are reading about a real person making real decisions: the kind of writing where they find themselves wanting to know what happens next. That pull is impossible to fake and impossible to generate. It comes from a true story, chosen well and told honestly.',
      },
      { type: 'h2', text: 'Where AI Helps, and Where It Does Not' },
      {
        type: 'p',
        text: 'AI can help you write. It can tighten a sentence, fix your grammar, and give you a starting draft. But deciding what story to tell, what to keep, and what to cut is still on you. That judgment is the entire game, and it is exactly what we help with at Elite Consulting.',
      },
      {
        type: 'p',
        text: 'If you are staring at a blank essay and unsure which story is yours to tell, that is the right moment to talk to us. Book a free profile evaluation and we will help you find it.',
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
