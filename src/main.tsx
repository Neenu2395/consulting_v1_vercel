import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FAQ } from './pages/FAQ';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

<li><a href="/faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
