import { BADGE_STYLES } from '../data/themes';

const BadgeStylePicker = ({ currentStyle, onChange }) => {
  const displayName = (style) => {
    return style.replace('for-the-badge', 'badge').replace('flat-square', 'flat-sq');
  };

  return (
    <div className="flex gap-1.5">
      {BADGE_STYLES.map(style => (
        <div
          key={style}
          onClick={() => onChange(style)}
          className={`flex-1 text-center py-[7px] px-1 border rounded-md font-mono text-[11px] cursor-pointer ${
            currentStyle === style
              ? 'border-accent text-accent bg-accent-dim'
              : 'border-line text-muted'
          }`}
        >
          {displayName(style)}
        </div>
      ))}
    </div>
  );
};

export default BadgeStylePicker;
