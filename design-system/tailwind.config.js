/* Argyros Tailwind config — paste into your tailwind.config = {...} (CDN)
   or export default / module.exports for build-tool setups. */
const argyrosTailwind = {
  theme: {
    extend: {
      colors: {
        space:  { DEFAULT: '#050914', 900: '#050914', 800: '#0a1020', 700: '#0f172f', 600: '#172240' },
        silver: { DEFAULT: '#c9ced6', 100: '#e8eaef', 200: '#c9ced6', 300: '#9ca3af', 400: '#6b7280', 500: '#4b5563' },
        tech:   { DEFAULT: '#4aa8ff', 400: '#6cbcff', 500: '#4aa8ff', 600: '#2b87e0', 700: '#1a5fa8' },
        ok:     '#22c55e',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        btn:  '10px',
      },
      boxShadow: {
        tech:   '0 4px 24px rgba(74, 168, 255, 0.3)',
        'tech-lg': '0 6px 32px rgba(74, 168, 255, 0.5)',
        ok:     '0 4px 24px rgba(34, 197, 94, 0.25)',
      },
    },
  },
};

/* For Tailwind CDN: */
// tailwind.config = argyrosTailwind;

/* For build tools (vite/webpack): */
// export default argyrosTailwind;
// or: module.exports = argyrosTailwind;
