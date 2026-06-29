// Free resources listed on /resources and in the sitemap. To add a new freebie:
//   1. Add an entry here.
//   2. Build its page component and register the route in src/App.tsx.
//   3. Add a vercel.json rewrite for its path.
// The /resources index and the sitemap pick it up automatically from this list.

export interface Resource {
  /** Full path, e.g. '/resources/mba-application-checklist' */
  path: string;
  title: string;
  description: string;
  /** Short label shown as a chip, e.g. 'Checklist' */
  tag: string;
  /** Call-to-action label on the card */
  cta: string;
}

export const resources: Resource[] = [
  {
    path: '/resources/mba-application-checklist',
    title: 'The Complete MBA Application Checklist',
    description:
      'Every step of a strong MBA application, in order, across the full timeline. Tick items off as you go and track your progress.',
    tag: 'Checklist',
    cta: 'Open the checklist',
  },
];
