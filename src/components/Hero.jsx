const Hero = () => {
  return (
    <div className="max-w-290 mx-auto px-6 pt-14 pb-7">
      <div className="font-mono text-[12.5px] text-accent tracking-wider mb-3.5 flex items-center gap-2 before:content-['$'] before:text-muted-2">
        ./build_profile.sh --no-backend --pure-markdown
      </div>
      <h1 className="font-mono font-extrabold text-[clamp(28px,4.4vw,48px)] leading-tight tracking-tight mb-3.5">
        <span className="text-add">+</span> Build a GitHub profile README{' '}
        <span className="text-del line-through opacity-55">that looks copy-pasted</span>
      </h1>
      <p className="text-[15.5px] text-muted max-w-160 leading-relaxed">
        Fill in your details on the left, pick a theme, and get real, working GitHub-flavored markdown — banners, badges, stats cards and skill icons — powered entirely by public image services. No servers, no build step. Paste the output straight into a repo named exactly like your username, in a file called <code>README.md</code>.
      </p>
      <div className="mt-5 font-mono text-[12.5px] border border-line rounded-lg overflow-hidden max-w-160">
        <div className="flex gap-2 px-3 py-1 bg-del-dim text-[#f5a3a0]">
          <span className="text-muted-2 w-3.5 flex-none">-</span>
          <span>a wall of default badges nobody customized</span>
        </div>
        <div className="flex gap-2 px-3 py-1 bg-add-dim text-[#8fd99d]">
          <span className="text-muted-2 w-3.5 flex-none">+</span>
          <span>a themed, animated, genuinely yours profile page</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
