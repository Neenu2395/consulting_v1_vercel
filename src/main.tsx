import { ViteReactSSG } from 'vite-react-ssg';
import { inject } from '@vercel/analytics';
import { routes } from './App';
import './index.css';

// Vercel Web Analytics (cookieless). Browser-only: this file also runs in
// Node during the SSG build, where inject() must not execute.
if (typeof window !== 'undefined') {
  inject();
}

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, app, initialState }) => {},
  { rootContainer: '#root' }
);
