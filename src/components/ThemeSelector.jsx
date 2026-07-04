import { THEMES } from '../data/themes';

const ThemeSelector = ({ currentTheme, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-1">
      {Object.entries(THEMES).map(([key, theme]) => (
        <div
          key={key}
          onClick={() => onChange(key)}
          className={`border-[1.5px] rounded-lg p-2.5 pb-2 cursor-pointer transition-all duration-100 relative ${
            currentTheme === key
              ? 'border-accent bg-accent-dim'
              : 'border-line hover:border-muted-2'
          }`}
        >
          <div
            className="h-[26px] rounded-md mb-[7px]"
            style={{ background: theme.swatch }}
          />
          <div className={`text-[11.5px] font-semibold font-mono ${
            currentTheme === key ? 'text-accent' : ''
          }`}>
            {theme.name}
          </div>
          <div className="text-[10.5px] text-muted-2 mt-0.5">
            {theme.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
