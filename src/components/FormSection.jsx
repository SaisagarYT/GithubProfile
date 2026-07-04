import { useState } from 'react';

const FormSection = ({ number, title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line last:border-b-0">
      <div
        className="flex items-center gap-2 px-4 py-3 cursor-pointer select-none font-mono text-[12.5px] text-muted tracking-wide hover:text-text hover:bg-panel-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-accent">{number}</span>
        <span>{title}</span>
        <span
          className={`text-muted-2 text-[10px] ml-auto transition-transform duration-150 ${
            isOpen ? 'rotate-90' : ''
          }`}
        >
          ▸
        </span>
      </div>
      <div
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-[2400px] px-4 pt-0.5 pb-4' : 'max-h-0 px-4 pt-0 pb-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FormSection;
