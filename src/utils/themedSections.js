import { THEMES } from '../data/themes';

export const wrapSection = (content, theme, sectionType = 'default') => {
  const t = THEMES[theme];
  if (!t || !t.preview) return content;

  const styles = {
    default: `
      <div style="
        background: ${t.preview.sectionBg};
        border: 1px solid ${t.preview.borderColor};
        border-radius: 12px;
        padding: 20px;
        margin: 16px 0;
        position: relative;
        overflow: hidden;
      ">
        ${content}
      </div>
    `,
    header: `
      <div style="
        background: ${t.preview.headerBg};
        border-radius: 12px;
        padding: 24px;
        margin: 20px 0;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      ">
        ${content}
      </div>
    `,
    stats: `
      <div style="
        background: ${t.preview.sectionBg};
        border: 2px solid ${t.preview.borderColor};
        border-radius: 16px;
        padding: 24px;
        margin: 20px 0;
      ">
        ${content}
      </div>
    `
  };

  return styles[sectionType] || styles.default;
};

export const createThemedDivider = (theme) => {
  const t = THEMES[theme];
  if (!t || !t.preview) return '<hr/>';

  return `
    <div style="
      height: 3px;
      background: linear-gradient(to right, transparent, ${t.preview.borderColor}, transparent);
      margin: 30px 0;
      border: none;
    "></div>
  `;
};

export const createThemedHeading = (text, level, theme) => {
  const t = THEMES[theme];
  if (!t || !t.preview) return `<h${level}>${text}</h${level}>`;

  return `
    <h${level} style="
      color: ${t.preview.headingText};
      background: ${t.preview.headerBg};
      padding: 12px 20px;
      border-radius: 8px;
      border-left: 4px solid ${t.preview.linkColor};
      margin: 20px 0 16px 0;
    ">${text}</h${level}>
  `;
};
