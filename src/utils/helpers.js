export const socialUrl = (platform, handle) => {
  if (!handle) return null;
  if (handle.startsWith('http')) return handle;

  switch (platform) {
    case 'linkedin':
      return `https://linkedin.com/in/${handle}`;
    case 'twitter':
      return `https://twitter.com/${handle}`;
    case 'instagram':
      return `https://instagram.com/${handle}`;
    case 'youtube':
      return `https://youtube.com/${handle.replace(/^@/, '@')}`;
    case 'leetcode':
      return `https://leetcode.com/${handle}`;
    case 'discord':
      return handle.startsWith('discord.gg') ? `https://${handle}` : handle;
    default:
      return handle;
  }
};

export const createBadge = (label, logo, color, link, badgeStyle) => {
  const img = `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=${badgeStyle}&logo=${logo}&logoColor=white`;
  const imgTag = `<img src="${img}" alt="${label}"/>`;
  return link ? `<a href="${link}">${imgTag}</a>` : imgTag;
};

export const escapeMarkdown = (s) => {
  return (s || '').replace(/\|/g, '\\|');
};

export const downloadFile = (content, filename) => {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};
