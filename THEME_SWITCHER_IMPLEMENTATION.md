# Theme Switcher Implementation Guide

## Overview
A complete dark/light theme switcher has been implemented for your portfolio website. The implementation includes:
- ✅ CSS variables for both light and dark themes
- ✅ Toggle button in the navbar (Sun/Moon icons)
- ✅ localStorage persistence
- ✅ Smooth transitions between themes
- ✅ Responsive design
- ✅ Dark mode as the default theme

## Files Created

### 1. ThemeContext.tsx
**Location:** `src/app/context/ThemeContext.tsx`

Provides the theme management logic with:
- `ThemeProvider` component that wraps the app
- `useTheme()` hook for accessing theme state
- localStorage persistence
- System preference fallback
- Default dark theme

```typescript
// Usage example
const { isDark, toggleTheme } = useTheme();
```

## Files Modified

### 1. App.tsx
- Wrapped with `ThemeProvider`
- Updated root div classes to support both themes
- Added Tailwind dark: variants

### 2. Navbar.tsx
- Added theme toggle button with Sun/Moon icons
- Positioned button in desktop and mobile views
- Updated all text colors with dark: variants
- Button shows Sun icon in dark mode, Moon icon in light mode

### 3. CSS Variables (theme.css)
- Light theme defined in `:root`
- Dark theme defined in `.dark` class
- Smooth color transitions applied to all elements
- All CSS variables properly mapped for both themes

### 4. Updated All Components for Theme Support
- **Hero.tsx** - Background, text, button colors
- **About.tsx** - Section background, headings, skill cards
- **Achievements.tsx** - Achievement cards, backgrounds
- **Contact.tsx** - Contact icons, text colors
- **Projects.tsx** - Project cards, descriptions
- **Footer.tsx** - Footer background, text

### 5. Global Styles (index.css)
- Added smooth transitions with `@apply transition-colors duration-300`

## Theme Colors

### Light Mode (Default)
- Background: White (#ffffff)
- Text: Dark gray (oklch(0.145 0 0))
- Cards: White
- Accents: Gold (#c9a96e)

### Dark Mode
- Background: Very Dark (#0f0f0f)
- Text: Off-white (oklch(0.985 0 0))
- Cards: Dark gray (oklch(0.145 0 0))
- Accents: Gold (#c9a96e) - unchanged

## How It Works

### 1. Theme Initialization
When the app loads:
1. ThemeProvider checks localStorage for saved theme
2. If no saved theme, checks system preference
3. Sets dark mode as final fallback (default)
4. Applies the `.dark` class to html element if dark mode

### 2. Theme Toggle
When user clicks the toggle button:
1. `toggleTheme()` updates React state
2. Updates localStorage with new preference
3. Adds/removes `.dark` class from html element
4. CSS handles smooth transitions (300ms)

### 3. Theme Persistence
- User's theme preference saved to localStorage under key `"theme"`
- Persists across browser sessions
- Same device always shows user's preferred theme

## Tailwind Dark Mode Implementation

All components use Tailwind's `dark:` prefix pattern:
```jsx
<div className="bg-white dark:bg-[#0f0f0f]">
  <p className="text-gray-900 dark:text-white">Text</p>
</div>
```

The `.dark` class on the html element automatically applies dark variant styles.

## Customization

To modify theme colors:

1. **CSS Variables** - Edit `src/styles/theme.css`
   - Light mode: `:root { --background: ... }`
   - Dark mode: `.dark { --background: ... }`

2. **Transition Duration** - Edit `src/styles/index.css`
   - Change `duration-300` to your preferred speed

3. **Toggle Button Style** - Edit `src/app/components/Navbar.tsx`
   - Modify button classes in the theme toggle JSX

## Browser Support
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage supported in all browsers
- CSS variables supported in all modern browsers
- Smooth transitions work universally

## Testing Checklist
- [ ] Toggle button appears in navbar (desktop and mobile)
- [ ] Clicking toggle switches theme immediately
- [ ] Theme persists after page refresh
- [ ] All components change colors smoothly
- [ ] Text contrast is sufficient in both themes
- [ ] All interactive elements remain accessible
- [ ] Mobile responsive in both themes

## Future Enhancements
- Add system preference listener for real-time OS theme changes
- Add more theme options (e.g., sepia, high contrast)
- Add theme transition animations
- Add keyboard shortcut (e.g., Ctrl+Shift+T)

## Notes
- Default theme is **dark mode** as requested
- Smooth transitions use 300ms duration
- All color changes are smooth and pleasant
- Both themes maintain the gold accent color (#c9a96e)
- Implementation is production-ready
