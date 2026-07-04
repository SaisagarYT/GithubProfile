import { useState } from 'react';
import { SKILLS } from '../data/themes';

const SkillSelector = ({ selectedSkills, onChange }) => {
  const [filter, setFilter] = useState('');

  const filteredSkills = SKILLS.filter(skill =>
    skill.toLowerCase().includes(filter.toLowerCase())
  );

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      onChange(selectedSkills.filter(s => s !== skill));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="filter skills…"
        className="w-full bg-panel-2 border border-line rounded-md text-text px-2.5 py-[7px] text-[12.5px] outline-none transition-colors focus:border-accent placeholder:text-muted-2 mb-2"
      />
      <div className="flex flex-wrap gap-1.5 max-h-[220px] overflow-y-auto pr-0.5">
        {filteredSkills.map(skill => (
          <div
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`font-mono text-[11px] px-2.5 py-1.5 rounded-md border cursor-pointer select-none transition-all duration-100 ${
              selectedSkills.includes(skill)
                ? 'border-add text-add bg-add-dim'
                : 'border-line text-muted bg-panel-2 hover:border-muted-2 hover:text-text'
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSelector;
