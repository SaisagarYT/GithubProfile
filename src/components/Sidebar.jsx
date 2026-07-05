import FormSection from './FormSection';
import FormInput from './FormInput';
import Toggle from './Toggle';
import ThemeSelector from './ThemeSelector';
import SkillSelector from './SkillSelector';
import BadgeStylePicker from './BadgeStylePicker';
import BannerStylePicker from './BannerStylePicker';
import StatsLayoutPicker from './StatsLayoutPicker';

const Sidebar = ({ formData, updateField, currentTheme, setCurrentTheme, badgeStyle, setBadgeStyle, selectedSkills, setSelectedSkills, bannerStyle, setBannerStyle, statsLayout, setStatsLayout }) => {
  return (
    <div className="bg-panel border border-line rounded-[10px] overflow-hidden self-start sticky top-14 max-h-[calc(100vh-76px)] overflow-y-auto">
      <FormSection number="01" title="basic_info" defaultOpen={true}>
        <FormInput
          label="github username *"
          value={formData.username}
          onChange={(val) => updateField('username', val)}
          placeholder="e.g. sagar-dev"
        />
        <div className="grid grid-cols-2 gap-2.5">
          <FormInput
            label="full name"
            value={formData.name}
            onChange={(val) => updateField('name', val)}
            placeholder="Sagar"
          />
          <FormInput
            label="pronouns"
            value={formData.pronouns}
            onChange={(val) => updateField('pronouns', val)}
            placeholder="he/him"
          />
        </div>
        <FormInput
          label="title / role"
          value={formData.title}
          onChange={(val) => updateField('title', val)}
          placeholder="Full-Stack Developer & B.Tech Final Year Student"
        />
        <FormInput
          label="location"
          value={formData.location}
          onChange={(val) => updateField('location', val)}
          placeholder="Parvathipuram, India"
        />
        <FormInput
          label="short bio (1-2 lines)"
          type="textarea"
          value={formData.bio}
          onChange={(val) => updateField('bio', val)}
          placeholder="Building things at the intersection of AI and web dev..."
        />
      </FormSection>

      <FormSection number="02" title="whats_happening">
        <FormInput
          label="🔭 currently working on"
          value={formData.working}
          onChange={(val) => updateField('working', val)}
          placeholder="a Flutter job aggregator app"
        />
        <FormInput
          label="🌱 currently learning"
          value={formData.learning}
          onChange={(val) => updateField('learning', val)}
          placeholder="system design & DevOps"
        />
        <FormInput
          label="🤝 open to collaborate on"
          value={formData.collab}
          onChange={(val) => updateField('collab', val)}
          placeholder="AI/RAG projects, hackathons"
        />
        <FormInput
          label="💬 ask me about"
          value={formData.askme}
          onChange={(val) => updateField('askme', val)}
          placeholder="MERN, RAG pipelines, placements"
        />
        <FormInput
          label="⚡ fun fact"
          value={formData.funfact}
          onChange={(val) => updateField('funfact', val)}
          placeholder="I animate my own YouTube doodle videos"
        />
      </FormSection>

      <FormSection number="03" title="banner_headline">
        <Toggle
          label="Animated banner"
          description="capsule-render header"
          checked={formData.showBanner}
          onChange={(val) => updateField('showBanner', val)}
        />
        {formData.showBanner && (
          <div className="mb-3">
            <label className="block text-[11.5px] text-muted mb-1.5 font-mono">banner style</label>
            <BannerStylePicker currentStyle={bannerStyle} onChange={setBannerStyle} />
          </div>
        )}
        <Toggle
          label="Typing headline"
          description="rotating text under banner"
          checked={formData.showTyping}
          onChange={(val) => updateField('showTyping', val)}
        />
        <div className="mt-2.5">
          <FormInput
            label="typing lines (one per line)"
            type="textarea"
            value={formData.typingLines}
            onChange={(val) => updateField('typingLines', val)}
            placeholder="I build things for the web;I write code that ships"
          />
        </div>
      </FormSection>

      <FormSection number="04" title="theme">
        <ThemeSelector currentTheme={currentTheme} onChange={setCurrentTheme} />
      </FormSection>

      <FormSection number="05" title="tech_stack">
        <SkillSelector selectedSkills={selectedSkills} onChange={setSelectedSkills} />
      </FormSection>

      <FormSection number="06" title="stats_widgets">
        <div className="mb-3">
          <label className="block text-[11.5px] text-muted mb-1.5 font-mono">stats layout</label>
          <StatsLayoutPicker currentLayout={statsLayout} onChange={setStatsLayout} />
        </div>
        <Toggle
          label="GitHub stats card"
          description="commits, stars, PRs"
          checked={formData.showStats}
          onChange={(val) => updateField('showStats', val)}
        />
        <Toggle
          label="Top languages"
          description="compact language card"
          checked={formData.showLangs}
          onChange={(val) => updateField('showLangs', val)}
        />
        <Toggle
          label="Streak stats"
          description="current streak counter"
          checked={formData.showStreak}
          onChange={(val) => updateField('showStreak', val)}
        />
        <Toggle
          label="Trophies"
          description="achievement row"
          checked={formData.showTrophy}
          onChange={(val) => updateField('showTrophy', val)}
        />
        <Toggle
          label="Profile view counter"
          description="visitor badge"
          checked={formData.showVisitor}
          onChange={(val) => updateField('showVisitor', val)}
        />
        <Toggle
          label="Contribution snake"
          description="needs a one-time GitHub Action (steps included)"
          checked={formData.showSnake}
          onChange={(val) => updateField('showSnake', val)}
        />
        <Toggle
          label="Activity graph"
          description="contribution activity over time"
          checked={formData.showActivity}
          onChange={(val) => updateField('showActivity', val)}
        />
        <Toggle
          label="WakaTime stats"
          description="coding time tracker"
          checked={formData.showWakatime}
          onChange={(val) => updateField('showWakatime', val)}
        />
        {formData.showWakatime && (
          <FormInput
            label="wakatime username"
            value={formData.wakatimeUsername}
            onChange={(val) => updateField('wakatimeUsername', val)}
            placeholder="your-wakatime-username"
          />
        )}
      </FormSection>

      <FormSection number="07" title="socials_and_badges">
        <div className="mb-3">
          <label className="block text-[11.5px] text-muted mb-1.5 font-mono">badge style</label>
          <BadgeStylePicker currentStyle={badgeStyle} onChange={setBadgeStyle} />
        </div>
        <FormInput
          label="email"
          type="email"
          value={formData.s_email}
          onChange={(val) => updateField('s_email', val)}
          placeholder="you@example.com"
        />
        <FormInput
          label="linkedin (username or url)"
          value={formData.s_linkedin}
          onChange={(val) => updateField('s_linkedin', val)}
          placeholder="your-linkedin-id"
        />
        <FormInput
          label="twitter / x"
          value={formData.s_twitter}
          onChange={(val) => updateField('s_twitter', val)}
          placeholder="yourhandle"
        />
        <FormInput
          label="instagram"
          value={formData.s_instagram}
          onChange={(val) => updateField('s_instagram', val)}
          placeholder="yourhandle"
        />
        <FormInput
          label="youtube (channel handle)"
          value={formData.s_youtube}
          onChange={(val) => updateField('s_youtube', val)}
          placeholder="@yourchannel"
        />
        <FormInput
          label="portfolio / website"
          type="url"
          value={formData.s_portfolio}
          onChange={(val) => updateField('s_portfolio', val)}
          placeholder="https://yoursite.com"
        />
        <FormInput
          label="leetcode"
          value={formData.s_leetcode}
          onChange={(val) => updateField('s_leetcode', val)}
          placeholder="yourhandle"
        />
        <FormInput
          label="discord (server invite or tag)"
          value={formData.s_discord}
          onChange={(val) => updateField('s_discord', val)}
          placeholder="discord.gg/xxxx"
        />
      </FormSection>

      <FormSection number="08" title="extra_content">
        <Toggle
          label="Random dev quote"
          description="inspirational programming quotes"
          checked={formData.showQuote}
          onChange={(val) => updateField('showQuote', val)}
        />
        <Toggle
          label="Random dev joke"
          description="programming humor"
          checked={formData.showJoke}
          onChange={(val) => updateField('showJoke', val)}
        />
        <Toggle
          label="Spotify now playing"
          description="show current spotify track"
          checked={formData.showSpotify}
          onChange={(val) => updateField('showSpotify', val)}
        />
        <Toggle
          label="Pinned repositories"
          description="showcase your top repos"
          checked={formData.showPinnedRepos}
          onChange={(val) => updateField('showPinnedRepos', val)}
        />
        <Toggle
          label="Latest blog posts"
          description="from dev.to, medium, hashnode"
          checked={formData.showBlogPosts}
          onChange={(val) => updateField('showBlogPosts', val)}
        />
        {formData.showBlogPosts && (
          <FormInput
            label="blog RSS feed URL"
            type="url"
            value={formData.blogUrl}
            onChange={(val) => updateField('blogUrl', val)}
            placeholder="https://dev.to/feed/username"
          />
        )}
      </FormSection>

      <FormSection number="09" title="support">
        <Toggle
          label="Show support section"
          description="buy me a coffee, sponsor, etc"
          checked={formData.showSupport}
          onChange={(val) => updateField('showSupport', val)}
        />
        {formData.showSupport && (
          <>
            <FormInput
              label="support message"
              type="textarea"
              value={formData.supportText}
              onChange={(val) => updateField('supportText', val)}
              placeholder="If you like my work, consider supporting me!"
            />
            <FormInput
              label="support links (one per line)"
              type="textarea"
              value={formData.supportLinks}
              onChange={(val) => updateField('supportLinks', val)}
              placeholder="https://buymeacoffee.com/username&#10;https://ko-fi.com/username"
            />
          </>
        )}
      </FormSection>

      <FormSection number="10" title="media">
        <FormInput
          label="profile / banner image URL"
          type="url"
          value={formData.customImage}
          onChange={(val) => updateField('customImage', val)}
          placeholder="https://raw.githubusercontent.com/you/repo/main/photo.png"
        />
        <small className="text-muted-2 text-[11px] block -mt-2 mb-2">
          (optional — image must already be hosted)
        </small>
        <FormInput
          label="image caption / alt text"
          value={formData.imageAlt}
          onChange={(val) => updateField('imageAlt', val)}
          placeholder="A photo of me"
        />
      </FormSection>
    </div>
  );
};

export default Sidebar;
