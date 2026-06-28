import { useEffect } from 'react';

// ---------------------------------------------------------------------------
// Cusdis comments (https://cusdis.com): lightweight, privacy-friendly, and
// readers can comment with just a name (no account required).
//
// SETUP (one time):
//   1. Sign up free at https://cusdis.com and add this website.
//   2. Copy the "App ID" it gives you.
//   3. Set it as VITE_CUSDIS_APP_ID in Vercel (Project > Settings > Environment
//      Variables) and locally in a .env file, then redeploy. The App ID is
//      public (it ships in the page HTML), so it is safe to expose/commit.
//   4. Moderate new comments from the Cusdis dashboard (you get email pings).
//
// Until the App ID is set, this component renders nothing, so the site never
// shows a broken/empty widget.
// ---------------------------------------------------------------------------

const env = import.meta.env as Record<string, string | undefined>;
// Public App ID (safe to commit, it ships in the page HTML). Override via the
// VITE_CUSDIS_APP_ID env var if you ever rotate sites.
const CUSDIS_APP_ID = env.VITE_CUSDIS_APP_ID ?? '265c733c-49fd-488e-ae55-86fcdc6460b6';
const CUSDIS_HOST = 'https://cusdis.com';

declare global {
  interface Window {
    CUSDIS?: { initial: () => void };
  }
}

interface CommentsProps {
  pageId: string;
  pageUrl: string;
  pageTitle: string;
}

export function Comments({ pageId, pageUrl, pageTitle }: CommentsProps) {
  useEffect(() => {
    if (!CUSDIS_APP_ID) return;

    const SCRIPT_ID = 'cusdis-script';
    const render = () => window.CUSDIS?.initial();

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      // Script already loaded (e.g. client-side navigation to another post):
      // re-render the thread for the new page id.
      render();
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `${CUSDIS_HOST}/js/cusdis.es.js`;
    script.async = true;
    script.defer = true;
    script.onload = render;
    document.body.appendChild(script);
  }, [pageId]);

  if (!CUSDIS_APP_ID) return null;

  return (
    <section className="max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-8">Join the conversation</h2>
      <div
        id="cusdis_thread"
        data-host={CUSDIS_HOST}
        data-app-id={CUSDIS_APP_ID}
        data-page-id={pageId}
        data-page-url={pageUrl}
        data-page-title={pageTitle}
      />
    </section>
  );
}
