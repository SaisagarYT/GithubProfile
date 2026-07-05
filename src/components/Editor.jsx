import { useState } from 'react';
import { copyToClipboard, downloadFile } from '../utils/helpers';
import { THEMES } from '../data/themes';

const Editor = ({ markdown, currentTheme }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copyStatus, setCopyStatus] = useState('');
  const theme = THEMES[currentTheme] || THEMES.midnight;

  const handleCopy = async () => {
    const success = await copyToClipboard(markdown);
    if (success) {
      setCopyStatus('✓ Copied!');
      setTimeout(() => setCopyStatus(''), 1600);
    }
  };

  const handleDownload = () => {
    downloadFile(markdown, 'README.md');
  };

  const renderPreview = (md) => {
    // Split into HTML-block vs plain-text segments so we don't inject <br/> inside <div> structures
    const htmlBlockRe = /(<(?:div|p|h[1-6]|ul|ol|li|blockquote|hr|img|a|span|b|i|br)[^>]*>[\s\S]*?<\/(?:div|p|h[1-6]|ul|ol|li|blockquote|a|span|b|i)>|<(?:img|br|hr)[^>]*\/?>)/gi;
    const parts = md.split(htmlBlockRe);
    return parts.map((part) => {
      if (/^</.test(part.trim())) return part;
      return part
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*(.*?)\*/g, '<i>$1</i>')
        .replace(/^> (.*$)/gm, '<blockquote style="border-left:3px solid #30363d;margin:0;padding:2px 12px;color:#8b949e;">$1</blockquote>')
        .replace(/\n\n/g, '<br/>');
    }).join('');
  };

  return (
    <div className="bg-panel border border-line rounded-[10px] overflow-hidden min-h-150 flex flex-col">
      <div className="flex border-b border-line bg-panel-2">
        <div
          onClick={() => setActiveTab('preview')}
          className={`font-mono text-[12.5px] px-5 py-3 cursor-pointer border-r border-line flex items-center gap-1.75 ${
            activeTab === 'preview'
              ? 'text-text bg-panel border-t-2 border-t-accent -mt-px'
              : 'text-muted'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-add"></span>
          Preview
        </div>
        <div
          onClick={() => setActiveTab('md')}
          className={`font-mono text-[12.5px] px-5 py-3 cursor-pointer border-r border-line ${
            activeTab === 'md'
              ? 'text-text bg-panel border-t-2 border-t-accent -mt-px'
              : 'text-muted'
          }`}
        >
          README.md
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2 px-3.5 py-2">
          <button
            onClick={handleCopy}
            className="font-mono text-xs px-3 py-1.75 rounded-md border border-line bg-panel-2 text-text cursor-pointer flex items-center gap-1.5 transition-all duration-100 hover:border-muted-2 whitespace-nowrap"
          >
            {copyStatus || '⧉ Copy markdown'}
          </button>
          <button
            onClick={handleDownload}
            className="font-mono text-xs px-3 py-1.75 rounded-md border border-add bg-add-dim text-add cursor-pointer flex items-center gap-1.5 transition-all duration-100 hover:bg-add hover:text-[#04150a] whitespace-nowrap"
          >
            ⬇ Download README.md
          </button>
        </div>
      </div>

      <div className="relative flex-1">
        {activeTab === 'preview' ? (
          <div
            className="p-6 relative overflow-auto"
            style={{
              background: theme.preview.bg,
              backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.preview.gridDot} 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          >
            <div
              id="previewInner"
              className="max-w-225 mx-auto leading-relaxed"
              style={{
                fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
                color: theme.preview.text
              }}
              dangerouslySetInnerHTML={{ __html: renderPreview(markdown) }}
            />
            <style>{`
              #previewInner h1, #previewInner h2, #previewInner h3 {
                color: ${theme.preview.headingText} !important;
                border-bottom-color: ${theme.preview.borderColor} !important;
              }
              #previewInner a {
                color: ${theme.preview.linkColor} !important;
              }
              #previewInner hr {
                border-top-color: ${theme.preview.borderColor} !important;
              }
              #previewInner img {
                border-radius: 8px;
                max-width: 100%;
              }
            `}</style>
          </div>
        ) : (
          <div className="p-6">
            <textarea
              value={markdown}
              readOnly
              spellCheck="false"
              className="w-full min-h-140 bg-transparent border-none outline-none text-[#9ecbff] font-mono text-[12.5px] leading-[1.7] resize-y"
            />
          </div>
        )}
      </div>

      <div className="px-6 py-2.5 border-t border-line bg-panel-2 font-mono text-[11.5px] text-muted-2 flex justify-between">
        <span>live preview loads real images from public services — same result as GitHub</span>
        <span><b className="text-add">●</b> auto-saving to memory, not to disk</span>
      </div>
    </div>
  );
};

export default Editor;
