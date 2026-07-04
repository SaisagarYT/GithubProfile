const TitleBar = () => {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-panel border-b border-line sticky top-0 z-50">
      <div className="flex gap-[7px] mr-1.5">
        <span className="w-[11px] h-[11px] rounded-full bg-del"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-accent"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-add"></span>
      </div>
      <div className="font-mono text-[12.5px] text-muted flex items-center gap-1.5">
        ~/profile-readme-maker/ <b className="text-text font-semibold">README.md</b>
      </div>
      <div className="ml-auto flex items-center gap-3.5">
        <div className="font-mono text-xs text-add flex items-center gap-1.5 before:content-['⎇'] before:text-[13px]">
          main
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
