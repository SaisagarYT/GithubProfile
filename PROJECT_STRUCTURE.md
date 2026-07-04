# Project Structure

```
app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── TitleBar.jsx          # Editor window chrome/header
│   │   ├── Hero.jsx              # Landing section with title
│   │   ├── FormSection.jsx       # Collapsible form section wrapper
│   │   ├── FormInput.jsx         # Reusable input/textarea field
│   │   ├── Toggle.jsx            # Toggle switch component
│   │   ├── ThemeSelector.jsx     # Theme selection cards
│   │   ├── SkillSelector.jsx     # Skill chips with search
│   │   ├── BadgeStylePicker.jsx  # Badge style selector
│   │   ├── Sidebar.jsx           # Left sidebar with all forms
│   │   └── Editor.jsx            # Right pane with preview/markdown tabs
│   │
│   ├── data/
│   │   └── themes.js    # Theme configurations and skills data
│   │
│   ├── utils/
│   │   ├── helpers.js   # Helper functions (social URLs, badges, clipboard)
│   │   └── markdown.js  # Markdown generation logic
│   │
│   ├── App.jsx          # Main app component with state management
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles + Tailwind imports
│
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite bundler config (if needed)
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## Component Hierarchy

```
App
├── TitleBar
├── Hero
├── Sidebar
│   ├── FormSection (x8)
│   │   ├── FormInput (multiple)
│   │   ├── Toggle (multiple)
│   │   ├── ThemeSelector
│   │   ├── SkillSelector
│   │   └── BadgeStylePicker
└── Editor
    └── Tabs (Preview / Markdown)
```

## Key Features by Component

### Sidebar
- **Section 1**: Basic info (username, name, title, location, bio)
- **Section 2**: What's happening (working on, learning, collaborate, ask me, fun fact)
- **Section 3**: Banner & headline (toggles for banner and typing animation)
- **Section 4**: Theme selector (5 pre-built themes)
- **Section 5**: Tech stack (70+ skill icons)
- **Section 6**: Stats widgets (GitHub stats, languages, streak, trophies, visitor, snake)
- **Section 7**: Socials (email, LinkedIn, Twitter, Instagram, YouTube, portfolio, LeetCode, Discord)
- **Section 8**: Media (custom image URL and alt text)

### Editor
- Preview tab: Live rendered HTML preview (GitHub-flavored)
- Markdown tab: Raw markdown code view
- Copy button: Copy markdown to clipboard
- Download button: Download as README.md

## State Management

All state is managed in `App.jsx`:
- `formData`: All form field values
- `currentTheme`: Selected theme key
- `badgeStyle`: Badge style preference
- `selectedSkills`: Array of selected skill slugs
- `markdown`: Generated markdown (derived from above)

State flows down via props, updates flow up via callbacks.

## Styling

- **Tailwind CSS** for utility-first styling
- Custom color palette defined in `tailwind.config.js`
- Google Fonts: JetBrains Mono (mono) + Inter (sans)
- Grid background pattern via CSS gradients
- Dark theme optimized for code/editor aesthetic
