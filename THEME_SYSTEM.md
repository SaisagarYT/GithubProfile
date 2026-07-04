# Enhanced Theme System

## Overview
The app now features a complete theme system that changes the entire UI appearance when you select a theme, not just the README markdown output.

## What Changes with Theme Selection

### 1. **UI Colors** (Entire App)
- Background color
- Panel/card backgrounds
- Border colors
- Text colors
- Accent colors
- Button colors
- Grid pattern background

### 2. **README Output**
- Banner animation colors
- Stats card theme
- Trophy theme
- Typing animation color
- Badge colors
- All generated markdown styling

## Available Themes

### 🌙 Midnight Wave
- **UI**: Dark blue/purple with soft gradients
- **Colors**: Deep blues, purples, soft whites
- **Feel**: Professional, calming, night-coder aesthetic

### 🌸 Glass Aurora  
- **UI**: Light pastel with glass-morphism vibes
- **Colors**: Soft purples, pinks, white backgrounds
- **Feel**: Modern, clean, ethereal

### 💚 Terminal Hack
- **UI**: Pure black background with matrix green
- **Colors**: Black, neon green (#39FF14)
- **Feel**: Hacker, retro terminal, cyberpunk

### 🌅 Sunset Gradient
- **UI**: Dark with warm orange/pink accents
- **Colors**: Deep purples, hot pinks, warm oranges
- **Feel**: Warm, vibrant, creative

### 🌊 Ocean Breeze
- **UI**: Deep blue with cyan accents
- **Colors**: Dark blues, bright cyans, aqua
- **Feel**: Cool, professional, tech-forward

### 🌲 Forest Mist
- **UI**: Dark green with emerald accents
- **Colors**: Forest greens, bright emeralds
- **Feel**: Natural, calming, growth-focused

## Banner Animation Styles

Select from **10 different banner styles**:

1. **Wave** - Smooth flowing waves
2. **Soft** - Gentle curved shapes
3. **Rect** - Sharp rectangular blocks
4. **Rounded** - Smooth rounded shapes
5. **Cylinder** - 3D cylindrical effect
6. **Slice** - Diagonal sliced sections
7. **Shark** - Sharp aggressive edges
8. **Transparent** - See-through overlay
9. **Egg** - Oval/egg shaped design
10. **Venom** - Organic flowing patterns

## How It Works

### CSS Variables System
When a theme is selected, the app updates CSS custom properties:

```javascript
root.style.setProperty('--color-bg', theme.ui.bg);
root.style.setProperty('--color-panel', theme.ui.panel);
root.style.setProperty('--color-accent', theme.ui.accent);
// ... and more
```

### Theme Structure
```javascript
{
  name: 'Theme Name',
  desc: 'Short description',
  swatch: 'linear-gradient(...)', // Preview gradient
  
  // Markdown generation
  waveColor: '...',
  statsTheme: '...',
  trophyTheme: '...',
  typingColor: '...',
  badgeColor: '...',
  
  // UI colors (applied to entire app)
  ui: {
    bg: '#...',          // Main background
    panel: '#...',       // Card backgrounds
    panel2: '#...',      // Secondary panels
    line: '#...',        // Borders
    lineSoft: '#...',    // Subtle borders
    text: '#...',        // Main text
    muted: '#...',       // Secondary text
    muted2: '#...',      // Tertiary text
    accent: '#...',      // Accent/highlight color
    accentDim: '#...',   // Dimmed accent
    add: '#...',         // Success/add color
    addDim: '#...',      // Dimmed success
    gridBg: '#...'       // Grid background
  }
}
```

## Adding New Themes

1. Add to `src/data/themes.js`:
```javascript
yourtheme: {
  name: 'Your Theme',
  desc: 'description',
  swatch: 'linear-gradient(...)',
  waveColor: 'color1,color2,color3',
  statsTheme: 'github-dark', // see github-readme-stats themes
  trophyTheme: 'discord',    // see github-profile-trophy themes
  typingColor: 'HEXCODE',
  badgeColor: 'HEXCODE',
  ui: {
    // Define all UI colors
  }
}
```

2. Theme will automatically appear in the selector!

## Banner Style Customization

Banner styles use the [capsule-render](https://github.com/kyechan99/capsule-render) API.

The banner automatically uses the theme's `waveColor` palette, so changing themes changes the banner appearance completely.

## Real-time Updates

- ✅ Change theme → Entire UI updates instantly
- ✅ Change banner style → Preview updates immediately
- ✅ All changes reflected in markdown output
- ✅ Live preview shows actual appearance

## Tips

- **Light themes** work better with darker text
- **Dark themes** allow for vibrant accent colors
- **Terminal theme** is perfect for developer-focused profiles
- **Ocean/Forest** themes are great for tech/environmental projects
- Mix and match **banner styles** with themes for unique combinations!
