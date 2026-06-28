import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name]-[hash].js`,
          chunkFileNames: `assets/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        },
      },
    },
    ssgOptions: {
      // Must be 'defer' (not 'async'): the app bundle reads
      // window.__VITE_REACT_SSG_HASH__, which is set by an inline script at the
      // end of <body>. An async module can run before that script, leaving the
      // hash undefined -> it fetches static-loader-data-manifest-undefined.json,
      // gets a 404 page, JSON.parse throws, and the page renders an error
      // boundary (Google sees a Soft 404). 'defer' guarantees correct ordering.
      script: 'defer',
      // This vite-react-ssg version only supports 'none' | 'prettify'. 'none'
      // keeps the pre-rendered HTML compact (smallest output).
      formatting: 'none',
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
