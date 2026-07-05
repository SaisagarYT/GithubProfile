import { STATS_LAYOUTS } from '../data/themes';

const StatsLayoutPicker = ({ currentLayout, onChange }) => {
  return (
    <div className="grid grid-cols-1 gap-1.5 mt-1">
      {STATS_LAYOUTS.map(layout => (
        <div
          key={layout.id}
          onClick={() => onChange(layout.id)}
          className={`flex items-center justify-between py-2 px-3 border rounded-md cursor-pointer transition-all ${
            currentLayout === layout.id
              ? 'border-accent text-accent bg-accent-dim'
              : 'border-line text-muted hover:border-muted-2'
          }`}
        >
          <div>
            <div className="font-mono text-[11px] font-semibold">{layout.name}</div>
            <div className="text-[9px] text-muted-2 mt-0.5">{layout.desc}</div>
          </div>
          {currentLayout === layout.id && (
            <span className="text-accent text-xs">✓</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsLayoutPicker;
