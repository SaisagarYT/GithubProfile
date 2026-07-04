export const THEMES = {
  midnight: {
    name: 'Midnight Wave',
    desc: 'deep blue/purple gradient',
    swatch: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
    waveColor: '0f0c29,302b63,24243e',
    statsTheme: 'midnight-purple',
    trophyTheme: 'discord',
    typingColor: 'B983FF',
    badgeColor: '302b63',
    preview: {
      bg: '#0d1117',
      sectionBg: 'linear-gradient(135deg, rgba(15,12,41,0.3) 0%, rgba(48,43,99,0.1) 100%)',
      headerBg: 'linear-gradient(to right, #302b63, #24243e)',
      text: '#c9d1d9',
      headingText: '#b983ff',
      linkColor: '#b983ff',
      borderColor: '#302b63',
      gridDot: '#302b63'
    }
  },
  glass: {
    name: 'Glass Aurora',
    desc: 'soft pastel gradient',
    swatch: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    waveColor: 'a18cd1,fbc2eb',
    statsTheme: 'transparent',
    trophyTheme: 'juicyfresh',
    typingColor: 'C792EA',
    badgeColor: 'a18cd1',
    preview: {
      bg: '#ffffff',
      sectionBg: 'linear-gradient(135deg, rgba(161,140,209,0.1) 0%, rgba(251,194,235,0.1) 100%)',
      headerBg: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
      text: '#24292f',
      headingText: '#a18cd1',
      linkColor: '#c792ea',
      borderColor: '#fbc2eb',
      gridDot: '#e8d5f2'
    }
  },
  terminal: {
    name: 'Terminal Hack',
    desc: 'matrix green on black',
    swatch: 'linear-gradient(135deg,#000000,#0d3b1e,#0f0f0f)',
    waveColor: '000000,0d3b1e,000000',
    statsTheme: 'chartreuse-dark',
    trophyTheme: 'matrix',
    typingColor: '39FF14',
    badgeColor: '0d3b1e',
    preview: {
      bg: '#000000',
      sectionBg: 'linear-gradient(135deg, rgba(13,59,30,0.2) 0%, rgba(0,0,0,0.1) 100%)',
      headerBg: 'linear-gradient(to right, #0d3b1e, #000000)',
      text: '#39ff14',
      headingText: '#39ff14',
      linkColor: '#39ff14',
      borderColor: '#0d3b1e',
      gridDot: '#1a4d28'
    }
  },
  sunset: {
    name: 'Sunset Gradient',
    desc: 'warm orange to pink',
    swatch: 'linear-gradient(135deg,#ff512f,#dd2476)',
    waveColor: 'ff512f,dd2476',
    statsTheme: 'tokyonight',
    trophyTheme: 'tokyonight',
    typingColor: 'FF7E5F',
    badgeColor: 'dd2476',
    preview: {
      bg: '#1a0e13',
      sectionBg: 'linear-gradient(135deg, rgba(255,81,47,0.15) 0%, rgba(221,36,118,0.15) 100%)',
      headerBg: 'linear-gradient(to right, #ff512f, #dd2476)',
      text: '#ffe5f0',
      headingText: '#ff7e5f',
      linkColor: '#ff6b9d',
      borderColor: '#dd2476',
      gridDot: '#4d2640'
    }
  },
  ocean: {
    name: 'Ocean Breeze',
    desc: 'cyan to deep blue',
    swatch: 'linear-gradient(135deg,#00d2ff,#3a7bd5,#00d2ff)',
    waveColor: '00d2ff,3a7bd5,00d2ff',
    statsTheme: 'algolia',
    trophyTheme: 'onestar',
    typingColor: '00d2ff',
    badgeColor: '3a7bd5',
    preview: {
      bg: '#0a1628',
      sectionBg: 'linear-gradient(135deg, rgba(0,210,255,0.1) 0%, rgba(58,123,213,0.1) 100%)',
      headerBg: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
      text: '#e0f2ff',
      headingText: '#00d2ff',
      linkColor: '#4da8ff',
      borderColor: '#3a7bd5',
      gridDot: '#1e3a5f'
    }
  },
  forest: {
    name: 'Forest Mist',
    desc: 'emerald to forest green',
    swatch: 'linear-gradient(135deg,#11998e,#38ef7d)',
    waveColor: '11998e,38ef7d',
    statsTheme: 'dark',
    trophyTheme: 'gruvbox',
    typingColor: '38ef7d',
    badgeColor: '11998e',
    preview: {
      bg: '#0a1a14',
      sectionBg: 'linear-gradient(135deg, rgba(17,153,142,0.15) 0%, rgba(56,239,125,0.15) 100%)',
      headerBg: 'linear-gradient(to right, #11998e, #38ef7d)',
      text: '#e0fff2',
      headingText: '#38ef7d',
      linkColor: '#50e3c2',
      borderColor: '#11998e',
      gridDot: '#1e4d3a'
    }
  }
};

export const BANNER_STYLES = [
  { id: 'waving', name: 'Wave', desc: 'Smooth wave animation' },
  { id: 'soft', name: 'Soft', desc: 'Gentle curves' },
  { id: 'rect', name: 'Rect', desc: 'Sharp rectangles' },
  { id: 'rounded', name: 'Rounded', desc: 'Rounded shapes' },
  { id: 'cylinder', name: 'Cylinder', desc: '3D cylinder' },
  { id: 'slice', name: 'Slice', desc: 'Diagonal slices' },
  { id: 'shark', name: 'Shark', desc: 'Sharp edges' },
  { id: 'transparent', name: 'Transparent', desc: 'See-through' },
  { id: 'egg', name: 'Egg', desc: 'Egg shape' },
  { id: 'venom', name: 'Venom', desc: 'Organic flow' }
];

export const BADGE_STYLES = ['for-the-badge', 'flat-square', 'plastic'];

export const SKILLS = [
  'js', 'ts', 'html', 'css', 'react', 'next', 'vue', 'angular', 'node', 'express',
  'python', 'java', 'cpp', 'c', 'cs', 'php', 'go', 'rust', 'ruby', 'kotlin',
  'swift', 'dart', 'flutter', 'mongodb', 'mysql', 'postgres', 'redis', 'firebase',
  'docker', 'kubernetes', 'aws', 'gcp', 'azure', 'git', 'github', 'gitlab', 'figma',
  'tailwind', 'bootstrap', 'sass', 'redux', 'graphql', 'vscode', 'vim', 'postman',
  'linux', 'npm', 'vite', 'webpack', 'jest', 'cypress', 'tensorflow', 'pytorch',
  'pandas', 'numpy', 'r', 'django', 'flask', 'spring', 'dotnet', 'unity',
  'photoshop', 'illustrator', 'nginx', 'jenkins', 'notion', 'slack'
];
