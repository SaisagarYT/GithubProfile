import { THEMES } from '../data/themes';
import { createBadge, socialUrl, escapeMarkdown } from './helpers';

const createThemedSection = (content, theme, title = '', icon = '') => {
  const t = THEMES[theme];
  if (!t?.preview) return content;

  return `
<div align="center">

${title ? `
<div style="margin: 8px 0 4px 0;">
  ${icon ? `<img src="${icon}" width="22" height="22" style="vertical-align: middle; margin-right: 6px;"/>` : ''}
  <span style="color: ${t.preview.headingText}; font-weight: bold; font-size: 20px; vertical-align: middle;">${title}</span>
</div>
` : ''}

<div style="background: ${t.preview.sectionBg}; border: 1px solid ${t.preview.borderColor}; border-radius: 8px; padding: 12px; margin: 4px 0;">

${content}

</div>
</div>
`;
};

export const buildMarkdown = (formData, currentTheme, badgeStyle, selectedSkills, bannerStyle = 'waving', statsLayout = 'default') => {
  const t = THEMES[currentTheme];
  const username = formData.username || 'your-username';
  const name = formData.name || 'Your Name';
  const lines = [];

  // Banner
  if (formData.showBanner) {
    const waveHeight = bannerStyle === 'transparent' ? 160 : 220;
    const fontColor = t.bannerFontColor || 'ffffff';
    const bannerUrl = `https://capsule-render.vercel.app/api?type=${bannerStyle}&color=${t.waveColor}&height=${waveHeight}&section=header&text=${encodeURIComponent(name)}&fontSize=42&fontColor=${fontColor}&animation=fadeIn&fontAlignY=38`;
    lines.push(`<div align="center">`);
    lines.push(`  <img src="${bannerUrl}" width="100%"/>`);
    lines.push(`</div>`);
  } else {
    lines.push(`# Hi, I'm ${name} 👋`);
  }

  // Typing animation
  if (formData.showTyping && formData.typingLines) {
    const rawLines = formData.typingLines.split('\n').map(l => l.trim()).filter(Boolean);
    const encoded = rawLines.map(l => encodeURIComponent(l)).join(';');
    const typingUrl = `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=${t.typingColor}&center=true&vCenter=true&width=600&lines=${encoded}`;
    lines.push(`<div align="center">`);
    lines.push(`  <img src="${typingUrl}" alt="typing banner"/>`);
    lines.push(`</div>`);
  }

  // Custom image
  if (formData.customImage) {
    lines.push(`<div align="right">`);
    lines.push(`  <img src="${formData.customImage}" width="140" style="border-radius:50%" alt="${escapeMarkdown(formData.imageAlt || name)}"/>`);
    lines.push(`</div>`);
  }

  // Title and bio
  if (formData.title) {
    const locationIcon = formData.location ? `<img src="https://api.iconify.design/mdi/map-marker.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="16" style="vertical-align: middle;"/> ${formData.location}` : '';
    lines.push(`<h3 align="center">${formData.title}${locationIcon ? `<br/>${locationIcon}` : ''}</h3>`);
  }
  if (formData.bio) {
    lines.push(`<p align="center">${formData.bio}</p>`);
  }
  if (formData.pronouns) {
    lines.push(`<p align="center"><i>Pronouns: ${formData.pronouns}</i></p>`);
  }

  // What's happening section
  const wh = [];
  if (formData.working) wh.push(`<img src="https://api.iconify.design/mdi/telescope.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="20" style="vertical-align: middle;"/> Currently working on **${formData.working}**`);
  if (formData.learning) wh.push(`<img src="https://api.iconify.design/mdi/sprout.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="20" style="vertical-align: middle;"/> Currently learning **${formData.learning}**`);
  if (formData.collab) wh.push(`<img src="https://api.iconify.design/mdi/handshake.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="20" style="vertical-align: middle;"/> Open to collaborate on **${formData.collab}**`);
  if (formData.askme) wh.push(`<img src="https://api.iconify.design/mdi/chat.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="20" style="vertical-align: middle;"/> Ask me about **${formData.askme}**`);
  if (formData.funfact) wh.push(`<img src="https://api.iconify.design/mdi/lightning-bolt.svg?color=${encodeURIComponent(t.preview.linkColor)}" width="20" style="vertical-align: middle;"/> Fun fact: ${formData.funfact}`);

  if (wh.length) {
    const whContent = wh.map(line => `<p align="left" style="margin: 4px 0;">${line}</p>`).join('\n');
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(whContent, currentTheme, 'About Me', `https://api.iconify.design/mdi/account.svg?color=${iconColor}`));
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
    const socialContent = `<p align="center">${socials.join(' ')}</p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(socialContent, currentTheme, 'Connect with Me', `https://api.iconify.design/mdi/link-variant.svg?color=${iconColor}`));
  }

  // Skills
  if (selectedSkills.length) {
    const skillsContent = `<p align="center"><img src="https://skillicons.dev/icons?i=${selectedSkills.join(',')}" alt="tech stack icons"/></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(skillsContent, currentTheme, 'Tech Stack', `https://api.iconify.design/mdi/tools.svg?color=${iconColor}`));
  }

  // Stats with different layouts
  if (formData.showStats || formData.showLangs || formData.showStreak) {
    let statsContent = '';

    // All cards use width=495 on the API so SVGs are the same size before scaling
    const statsUrl = `https://github-readme-stats-fast.vercel.app/api?username=${username}&show_icons=true&theme=${t.statsTheme}&hide_border=true&count_private=true&card_width=495`;
    const langsUrl = `https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${t.statsTheme}&hide_border=true&card_width=495`;
    const streakUrl = `https://streak-stats.demolab.com?user=${username}&theme=${t.streakTheme}&hide_border=true`;

    switch(statsLayout) {
      case 'default': { // Stats + langs side by side, streak full width below
        const parts = [];
        if (formData.showStats) parts.push(`<img src="${statsUrl}" alt="GitHub stats" width="49%"/>`);
        if (formData.showLangs) parts.push(`<img src="${langsUrl}" alt="Top languages" width="49%"/>`);
        const streakLine = formData.showStreak ? `<br/><img src="${streakUrl}" alt="GitHub streak" width="100%"/>` : '';
        statsContent = `<p align="center">${parts.join('\n')}${streakLine}</p>`;
        break;
      }

      case 'stacked': { // All stacked, all same width
        const parts = [];
        if (formData.showStats) parts.push(`<img src="${statsUrl}" alt="GitHub stats" width="100%"/>`);
        if (formData.showLangs) parts.push(`<img src="${langsUrl}" alt="Top languages" width="100%"/>`);
        if (formData.showStreak) parts.push(`<img src="${streakUrl}" alt="GitHub streak" width="100%"/>`);
        statsContent = `<p align="center">${parts.join('<br/>\n')}</p>`;
        break;
      }

      case 'compact': { // 3 cards in a row
        const parts = [];
        if (formData.showStats) parts.push(`<img src="${statsUrl}" alt="GitHub stats" width="32%"/>`);
        if (formData.showLangs) parts.push(`<img src="${langsUrl}" alt="Top languages" width="32%"/>`);
        if (formData.showStreak) parts.push(`<img src="${streakUrl}" alt="GitHub streak" width="32%"/>`);
        statsContent = `<p align="center">${parts.join('\n')}</p>`;
        break;
      }

      case 'detailed': { // Full-width cards stacked
        const parts = [];
        if (formData.showStats) parts.push(`<img src="https://github-readme-stats-fast.vercel.app/api?username=${username}&show_icons=true&theme=${t.statsTheme}&hide_border=true&count_private=true&include_all_commits=true&line_height=24&card_width=600" alt="GitHub stats" width="100%"/>`);
        if (formData.showLangs) parts.push(`<img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=${username}&layout=normal&theme=${t.statsTheme}&hide_border=true&langs_count=8&card_width=600" alt="Top languages" width="100%"/>`);
        if (formData.showStreak) parts.push(`<img src="https://streak-stats.demolab.com?user=${username}&theme=${t.streakTheme}&hide_border=true" alt="GitHub streak" width="100%"/>`);
        statsContent = `<p align="center">${parts.join('<br/>\n')}</p>`;
        break;
      }

      case 'grid': { // 2x2 grid — stats+langs top row, streak+activity bottom row
        const top = [];
        const bottom = [];
        if (formData.showStats) top.push(`<img src="${statsUrl}" alt="GitHub stats" width="49%"/>`);
        if (formData.showLangs) top.push(`<img src="${langsUrl}" alt="Top languages" width="49%"/>`);
        if (formData.showStreak) bottom.push(`<img src="${streakUrl}" alt="GitHub streak" width="49%"/>`);
        bottom.push(`<img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${t.activityTheme}&hide_border=true&area=true" alt="Activity Graph" width="49%"/>`);
        statsContent = `<p align="center">${[...top, ...(top.length && bottom.length ? ['<br/>'] : []), ...bottom].join('\n')}</p>`;
        break;
      }

      default:
        statsContent = '';
    }

    if (statsContent) {
      const iconColor = encodeURIComponent(t.preview.headingText);
      lines.push(createThemedSection(statsContent, currentTheme, 'GitHub Stats', `https://api.iconify.design/mdi/chart-bar.svg?color=${iconColor}`));
    }
  }

  if (formData.showTrophy) {
    const trophyContent = `<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=${t.trophyTheme}" alt="Stats" width="32%"/>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=${t.trophyTheme}" alt="Top Languages" width="32%"/>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${username}&theme=${t.trophyTheme}&utcOffset=5.5" alt="Productive Time" width="32%"/>
</p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(trophyContent, currentTheme, 'Achievements', `https://api.iconify.design/mdi/trophy.svg?color=${iconColor}`));
  }

  if (formData.showSnake) {
    lines.push('### 🐍 Contribution graph');
    lines.push('');
    lines.push(`<p align="center"><img src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg" alt="snake animation"/></p>`);
    lines.push('');
    lines.push(`> To make the snake animation actually appear, add the [github-contributions-svg-generator](https://github.com/Platane/snk) action to a repo named \`${username}/${username}\` — one workflow file, no server needed. Details are in that project's README.`);
  }

  if (formData.showVisitor) {
    lines.push(`<p align="center"><img src="https://komarev.com/ghpvc/?username=${username}&color=${t.badgeColor}&style=flat&label=Profile+views" alt="visitor badge"/></p>`);
  }

  // Activity Graph
  if (formData.showActivity) {
    const activityContent = `<p align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${t.activityTheme}&hide_border=true&area=true" alt="Activity Graph" width="100%"/></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(activityContent, currentTheme, 'Contribution Activity', `https://api.iconify.design/mdi/chart-line.svg?color=${iconColor}`));
  }

  // WakaTime Stats
  if (formData.showWakatime && formData.wakatimeUsername) {
    const wakatimeContent = `<p align="center"><img src="https://github-readme-stats-fast.vercel.app/api/wakatime?username=${formData.wakatimeUsername}&theme=${t.statsTheme}&hide_border=true&layout=compact" alt="WakaTime Stats" width="100%"/></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(wakatimeContent, currentTheme, 'Coding Time', `https://api.iconify.design/mdi/clock-outline.svg?color=${iconColor}`));
  }

  // Random Dev Quote
  if (formData.showQuote) {
    const quoteContent = `<p align="center"><img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${t.statsTheme === 'default' ? 'light' : 'dark'}" alt="Random Dev Quote"/></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(quoteContent, currentTheme, 'Quote of the Day', `https://api.iconify.design/mdi/format-quote-close.svg?color=${iconColor}`));
  }

  // Random Dev Joke
  if (formData.showJoke) {
    const jokeContent = `<p align="center"><img src="https://readme-jokes.vercel.app/api?theme=${t.statsTheme === 'default' ? 'default' : 'dark'}" alt="Jokes Card"/></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(jokeContent, currentTheme, 'Dev Humor', `https://api.iconify.design/mdi/emoticon-happy-outline.svg?color=${iconColor}`));
  }

  // Spotify Now Playing
  if (formData.showSpotify) {
    const spotifyContent = `<p align="center"><img src="https://spotify-github-profile.vercel.app/api/view?uid=${username}&cover_image=true&theme=default&show_offline=false&background_color=${t.preview.bg.replace('#', '')}&interchange=false&bar_color=${t.preview.linkColor.replace('#', '')}&bar_color_cover=true" alt="Spotify Now Playing"/></p>
<p align="center"><small>⚠️ Spotify requires OAuth setup at <a href="https://spotify-github-profile.vercel.app">spotify-github-profile.vercel.app</a> — connect your account first, then it auto-updates.</small></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(spotifyContent, currentTheme, 'Now Playing', `https://api.iconify.design/simple-icons/spotify.svg?color=${iconColor}`));
  }

  // Pinned Repositories
  if (formData.showPinnedRepos) {
    const pinnedContent = `<p align="center">
  <!-- Replace REPO_1 and REPO_2 with your actual repository names -->
  <a href="https://github.com/${username}?tab=repositories">
    <img src="https://github-readme-stats-fast.vercel.app/api/pin/?username=${username}&repo=REPO_1&theme=${t.statsTheme}&hide_border=true" alt="Pinned Repo 1" width="48%"/>
  </a>
  <a href="https://github.com/${username}?tab=repositories">
    <img src="https://github-readme-stats-fast.vercel.app/api/pin/?username=${username}&repo=REPO_2&theme=${t.statsTheme}&hide_border=true" alt="Pinned Repo 2" width="48%"/>
  </a>
</p>
<p align="center"><sub>✏️ Replace <code>REPO_1</code> and <code>REPO_2</code> above with your actual repository names</sub></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(pinnedContent, currentTheme, 'Featured Projects', `https://api.iconify.design/mdi/star-outline.svg?color=${iconColor}`));
  }

  // Latest Blog Posts
  if (formData.showBlogPosts && formData.blogUrl) {
    const blogContent = `<p align="center"><i>📝 Latest posts — auto-updated via GitHub Actions</i></p>

<!-- BLOG-POST-LIST:START -->
<!-- Posts will appear here after GitHub Action runs -->
<!-- BLOG-POST-LIST:END -->

<p align="center"><sub>Add the <a href="https://github.com/gautamkrishnar/blog-post-workflow">blog-post-workflow</a> action with feed: <code>${formData.blogUrl}</code></sub></p>`;
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(blogContent, currentTheme, 'Latest Blog Posts', `https://api.iconify.design/mdi/rss.svg?color=${iconColor}`));
  }

  // Support Section
  if (formData.showSupport && (formData.supportText || formData.supportLinks)) {
    let supportContent = '';
    if (formData.supportText) {
      supportContent += `<p align="center">${formData.supportText}</p>\n`;
    }
    if (formData.supportLinks) {
      const links = formData.supportLinks.split('\n').filter(Boolean);
      const badges = links.map(link => {
        let label = 'Support';
        let logo = 'buymeacoffee';
        if (link.includes('buymeacoffee')) { label = 'Buy Me A Coffee'; logo = 'buymeacoffee'; }
        else if (link.includes('ko-fi')) { label = 'Ko-fi'; logo = 'kofi'; }
        else if (link.includes('patreon')) { label = 'Patreon'; logo = 'patreon'; }
        else if (link.includes('paypal')) { label = 'PayPal'; logo = 'paypal'; }
        return `<a href="${link}"><img src="https://img.shields.io/badge/${label}-${t.badgeColor}?style=for-the-badge&logo=${logo}&logoColor=white" alt="${label}"/></a>`;
      });
      supportContent += `<p align="center">${badges.join(' ')}</p>`;
    }
    const iconColor = encodeURIComponent(t.preview.headingText);
    lines.push(createThemedSection(supportContent, currentTheme, 'Support My Work', `https://api.iconify.design/mdi/heart.svg?color=${iconColor}`));
  }

  lines.push('---');
  lines.push(`<p align="center"><i>Thanks for stopping by — this README was generated with a no-backend profile builder ✨</i></p>`);

  return lines.join('\n');
};
