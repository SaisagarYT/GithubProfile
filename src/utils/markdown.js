import { THEMES } from '../data/themes';
import { createBadge, socialUrl, escapeMarkdown } from './helpers';

export const buildMarkdown = (formData, currentTheme, badgeStyle, selectedSkills) => {
  const t = THEMES[currentTheme];
  const username = formData.username || 'your-username';
  const name = formData.name || 'Your Name';
  const lines = [];

  // Banner
  if (formData.showBanner) {
    const bannerUrl = `https://capsule-render.vercel.app/api?type=${t.waveType}&color=${encodeURIComponent(t.waveColor)}&height=${t.waveHeight}&section=header&text=${encodeURIComponent(name)}&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38`;
    lines.push(`<div align="center">`);
    lines.push(`  <img src="${bannerUrl}" width="100%"/>`);
    lines.push(`</div>`);
    lines.push('');
  } else {
    lines.push(`# Hi, I'm ${name} 👋`);
    lines.push('');
  }

  // Typing animation
  if (formData.showTyping && formData.typingLines) {
    const rawLines = formData.typingLines.split('\n').map(l => l.trim()).filter(Boolean);
    const encoded = rawLines.map(l => encodeURIComponent(l)).join(';');
    const typingUrl = `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=${t.typingColor}&center=true&vCenter=true&width=600&lines=${encoded}`;
    lines.push(`<div align="center">`);
    lines.push(`  <img src="${typingUrl}" alt="typing banner"/>`);
    lines.push(`</div>`);
    lines.push('');
  }

  // Custom image
  if (formData.customImage) {
    lines.push(`<div align="right">`);
    lines.push(`  <img src="${formData.customImage}" width="140" style="border-radius:50%" alt="${escapeMarkdown(formData.imageAlt || name)}"/>`);
    lines.push(`</div>`);
    lines.push('');
  }

  // Title and bio
  if (formData.title) {
    lines.push(`### ${formData.title}${formData.location ? `  \n📍 ${formData.location}` : ''}`);
    lines.push('');
  }
  if (formData.bio) {
    lines.push(formData.bio);
    lines.push('');
  }
  if (formData.pronouns) {
    lines.push(`*Pronouns: ${formData.pronouns}*`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  // What's happening section
  const wh = [];
  if (formData.working) wh.push(`- 🔭 Currently working on **${formData.working}**`);
  if (formData.learning) wh.push(`- 🌱 Currently learning **${formData.learning}**`);
  if (formData.collab) wh.push(`- 🤝 Open to collaborate on **${formData.collab}**`);
  if (formData.askme) wh.push(`- 💬 Ask me about **${formData.askme}**`);
  if (formData.funfact) wh.push(`- ⚡ Fun fact: ${formData.funfact}`);

  if (wh.length) {
    lines.push('### 🚀 A bit about me');
    lines.push('');
    lines.push(...wh);
    lines.push('');
  }

  // Socials
  const socials = [];
  if (formData.s_email) socials.push(createBadge(formData.s_email, 'gmail', t.badgeColor, `mailto:${formData.s_email}`, badgeStyle));
  if (formData.s_linkedin) socials.push(createBadge('LinkedIn', 'linkedin', '0A66C2', socialUrl('linkedin', formData.s_linkedin), badgeStyle));
  if (formData.s_twitter) socials.push(createBadge('Twitter', 'x', '000000', socialUrl('twitter', formData.s_twitter), badgeStyle));
  if (formData.s_instagram) socials.push(createBadge('Instagram', 'instagram', 'E4405F', socialUrl('instagram', formData.s_instagram), badgeStyle));
  if (formData.s_youtube) socials.push(createBadge('YouTube', 'youtube', 'FF0000', socialUrl('youtube', formData.s_youtube), badgeStyle));
  if (formData.s_portfolio) socials.push(createBadge('Portfolio', 'googlechrome', t.badgeColor, formData.s_portfolio, badgeStyle));
  if (formData.s_leetcode) socials.push(createBadge('LeetCode', 'leetcode', 'FFA116', socialUrl('leetcode', formData.s_leetcode), badgeStyle));
  if (formData.s_discord) socials.push(createBadge('Discord', 'discord', '5865F2', socialUrl('discord', formData.s_discord), badgeStyle));

  if (socials.length) {
    lines.push('### 🔗 Connect with me');
    lines.push('');
    lines.push(`<p align="left">${socials.join(' ')}</p>`);
    lines.push('');
  }

  // Skills
  if (selectedSkills.length) {
    lines.push('### 🛠️ Tech stack');
    lines.push('');
    lines.push(`<p align="left"><img src="https://skillicons.dev/icons?i=${selectedSkills.join(',')}" alt="tech stack icons"/></p>`);
    lines.push('');
  }

  // Stats
  const statBlocks = [];
  if (formData.showStats) {
    statBlocks.push(`<img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${t.statsTheme}&hide_border=true&count_private=true" alt="GitHub stats" width="49%"/>`);
  }
  if (formData.showLangs) {
    statBlocks.push(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${t.statsTheme}&hide_border=true" alt="Top languages" width="49%"/>`);
  }
  if (statBlocks.length) {
    lines.push('### 📊 GitHub stats');
    lines.push('');
    lines.push(`<p align="center">`);
    lines.push(`  ${statBlocks.join('\n  ')}`);
    lines.push(`</p>`);
    lines.push('');
  }

  if (formData.showStreak) {
    lines.push(`<p align="center"><img src="https://streak-stats.demolab.com?user=${username}&theme=${t.statsTheme}&hide_border=true" alt="GitHub streak"/></p>`);
    lines.push('');
  }

  if (formData.showTrophy) {
    lines.push('### 🏆 Trophies');
    lines.push('');
    lines.push(`<p align="center"><img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${t.trophyTheme}&column=7&margin-w=12&margin-h=12&no-frame=true" alt="trophies"/></p>`);
    lines.push('');
  }

  if (formData.showSnake) {
    lines.push('### 🐍 Contribution graph');
    lines.push('');
    lines.push(`<p align="center"><img src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg" alt="snake animation"/></p>`);
    lines.push('');
    lines.push(`> To make the snake animation actually appear, add the [github-contributions-svg-generator](https://github.com/Platane/snk) action to a repo named \`${username}/${username}\` — one workflow file, no server needed. Details are in that project's README.`);
    lines.push('');
  }

  if (formData.showVisitor) {
    lines.push(`<p align="center"><img src="https://komarev.com/ghpvc/?username=${username}&color=${t.badgeColor}&style=flat&label=Profile+views" alt="visitor badge"/></p>`);
    lines.push('');
  }

  lines.push('---');
  lines.push(`<p align="center"><i>Thanks for stopping by — this README was generated with a no-backend profile builder ✨</i></p>`);

  return lines.join('\n');
};
