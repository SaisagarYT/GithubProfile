const FormInput = ({ label, type = 'text', value, onChange, placeholder, ...props }) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="mb-3">
      <label className="block text-[11.5px] text-muted mb-1.5 font-mono">
        {label}
      </label>
      <InputComponent
        type={!isTextarea ? type : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-panel-2 border border-line rounded-md text-text px-2.5 py-2 text-[13.5px] font-sans outline-none transition-colors duration-100 focus:border-accent placeholder:text-muted-2"
        {...(isTextarea && { rows: 3, className: 'w-full bg-panel-2 border border-line rounded-md text-text px-2.5 py-2 text-[13.5px] font-sans outline-none transition-colors duration-100 focus:border-accent placeholder:text-muted-2 resize-y min-h-[56px] leading-normal' })}
        {...props}
      />
    </div>
  );
};

export default FormInput;
