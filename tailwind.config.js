/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e14',
        panel: '#0e131c',
        'panel-2': '#121826',
        line: '#1c2430',
        'line-soft': '#161d29',
        text: '#dbe2ec',
        muted: '#6b7686',
        'muted-2': '#4b5563',
        add: '#3fb950',
        'add-dim': '#1a3a24',
        del: '#f85149',
        'del-dim': '#3a1a1a',
        accent: '#e3b341',
        'accent-dim': '#3a2f14',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
