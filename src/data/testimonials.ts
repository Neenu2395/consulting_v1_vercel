// Client quotes used across the site: blog post CTAs, the Evaluate page, and
// the Success Stories page. Keep attributions honest: label current applicants
// as applicants and admits as admits.

export interface Testimonial {
  quote: string;
  who: string;
  /** Blog topics this quote fits (used by the post CTA picker). */
  topics: string[];
  /** True when the client is still applying (not yet an admit). */
  currentClient?: boolean;
}

export const testimonialPool: Testimonial[] = [
  {
    quote:
      'I was struggling to find convincing stories. They were there all along, genuinely invested, and built my best essays out of moments from my own life I had dismissed.',
    who: 'Current client, MBA applicant',
    topics: ['Essays & Interviews', 'Application Strategy'],
    currentClient: true,
  },
  {
    quote:
      'Most consultants just comment on whatever you write. They actually sat with me to understand me and my stories first, and then showed me how to write them.',
    who: 'Current client, MBA applicant',
    topics: ['Essays & Interviews', 'HEC Paris', 'SDA Bocconi', 'INSEAD'],
    currentClient: true,
  },
  {
    quote:
      'Remarkably efficient. No endless back and forth, no drag; every session moved my application forward.',
    who: 'Current client, MBA applicant',
    topics: ['Application Strategy', 'HEC Paris', 'SDA Bocconi', 'INSEAD'],
    currentClient: true,
  },
  {
    quote:
      'They helped me articulate my technical background in a way that resonated perfectly with the admissions committee.',
    who: 'MS admit, RWTH Aachen',
    topics: ['MS & Engineering'],
  },
  {
    quote:
      "They didn't just edit my essays; they architected a narrative that showcased my true leadership potential.",
    who: 'MBA admit, SDA Bocconi',
    topics: ['SDA Bocconi', 'HEC Paris', 'INSEAD', 'Application Strategy'],
  },
];

export const currentClientTestimonials = testimonialPool.filter((t) => t.currentClient);
