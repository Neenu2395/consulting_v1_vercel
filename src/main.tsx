import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, app, initialState }) => {},
  { rootContainer: '#root' }
);
