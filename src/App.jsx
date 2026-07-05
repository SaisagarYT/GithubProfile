import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import { buildMarkdown } from './utils/markdown';
import { THEMES } from './data/themes';

function App() {
  const [formData, setFormData] = useState({
    username: 'sagar-dev',
    name: 'Sagar',
    pronouns: '',
    title: 'Full-Stack Developer & Final Year B.Tech Student',
    location: 'Parvathipuram, India',
    bio: 'I build full-stack apps and AI-powered tools, and create B.Tech career & placement content on YouTube.',
    working: '',
    learning: '',
    collab: '',
    askme: '',
    funfact: '',
    showBanner: true,
    showTyping: true,
    typingLines: 'Welcome to my GitHub!\nI build full-stack + AI powered apps\nFinal year B.Tech | MERN + RAG pipelines\nAlso making B.Tech career content on YouTube',
    showStats: true,
    showLangs: true,
    showStreak: true,
    showTrophy: true,
    showVisitor: true,
    showSnake: false,
    showActivity: false,
    showWakatime: false,
    wakatimeUsername: '',
    showSpotify: false,
    showQuote: false,
    showJoke: false,
    showPinnedRepos: false,
    showBlogPosts: false,
    blogUrl: '',
    showSupport: false,
    supportText: '',
    supportLinks: '',
    s_email: '',
    s_linkedin: '',
    s_twitter: '',
    s_instagram: '',
    s_youtube: '',
    s_portfolio: '',
    s_leetcode: '',
    s_discord: '',
    customImage: '',
    imageAlt: '',
  });

  const [currentTheme, setCurrentTheme] = useState('midnight');
  const [badgeStyle, setBadgeStyle] = useState('for-the-badge');
  const [bannerStyle, setBannerStyle] = useState('waving');
  const [statsLayout, setStatsLayout] = useState('default');
  const [selectedSkills, setSelectedSkills] = useState([
    'js', 'react', 'node', 'mongodb', 'python', 'tensorflow', 'git', 'github', 'tailwind'
  ]);

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const md = buildMarkdown(formData, currentTheme, badgeStyle, selectedSkills, bannerStyle, statsLayout);
    setMarkdown(md);
  }, [formData, currentTheme, badgeStyle, selectedSkills, bannerStyle, statsLayout]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans bg-[linear-gradient(var(--color-line-soft)_1px,transparent_1px)_0_0/100%_28px,linear-gradient(90deg,var(--color-line-soft)_1px,transparent_1px)_0_0/28px_100%,var(--color-bg)] bg-fixed">
      <TitleBar />
      <Hero />

      <div className="max-w-290 mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-4.5">
        <Sidebar
          formData={formData}
          updateField={updateField}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          badgeStyle={badgeStyle}
          setBadgeStyle={setBadgeStyle}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          bannerStyle={bannerStyle}
          setBannerStyle={setBannerStyle}
          statsLayout={statsLayout}
          setStatsLayout={setStatsLayout}
        />
        <Editor markdown={markdown} currentTheme={currentTheme} />
      </div>

      <footer className="max-w-290 mx-auto px-6 py-5 pb-14 font-mono text-[11.5px] text-muted-2 text-center">
        built with React + Tailwind CSS — no backend, no tracking, no build step. paste the output into &lt;your-username&gt;/README.md
      </footer>
    </div>
  );
}

export default App;
