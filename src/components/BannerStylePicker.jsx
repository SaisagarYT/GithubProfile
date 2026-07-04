import { BANNER_STYLES } from '../data/themes';

const BannerStylePicker = ({ currentStyle, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-1.5 mt-1">
      {BANNER_STYLES.map(style => (
        <div
          key={style.id}
          onClick={() => onChange(style.id)}
          className={`text-center py-1.5 px-2 border rounded-md font-mono text-[10.5px] cursor-pointer transition-all ${
            currentStyle === style.id
              ? 'border-accent text-accent bg-accent-dim'
              : 'border-line text-muted hover:border-muted-2'
          }`}
        >
          <div className="font-semibold">{style.name}</div>
          <div className="text-[9px] text-muted-2 mt-0.5">{style.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default BannerStylePicker;
