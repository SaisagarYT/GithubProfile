const Toggle = ({ label, description, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-line-soft last:border-b-0 text-[13px]">
      <div className="flex flex-col gap-0.5">
        <span>{label}</span>
        {description && <small className="text-muted-2 text-[11px]">{description}</small>}
      </div>
      <label className="relative w-9 h-5 flex-none cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="opacity-0 w-0 h-0 absolute"
        />
        <span
          className={`absolute inset-0 rounded-full transition-all duration-150 ${
            checked ? 'bg-add-dim border border-add' : 'bg-panel-2 border border-line'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full transition-all duration-150 ${
              checked ? 'translate-x-4 bg-add' : 'translate-x-0 bg-muted'
            }`}
          />
        </span>
      </label>
    </div>
  );
};

export default Toggle;
