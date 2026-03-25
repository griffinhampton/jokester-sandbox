# Jokester Design System

This document outlines the core branding, color palette, components, and UI patterns for the Jokester Sandbox. **All future UI updates should adhere to these guidelines.**

## 1. Color Palette

The Jokester theme relies on three primary scales: Black (Main Backgrounds), White (Text & Accents), and Pink (Primary Call-to-Action & Branding). Each color is defined at 100% opacity, accompanied by varying alpha-transparency steps (80%, 70%, 60%, 50%, 40%, 30%, 20%, 10%, 5%).

### Base Colors
- **Black (900):** `#0A0A0A` — The primary background color used for the main application canvas.
- **White (900):** `#FFFFFF` — Primary text color and accent text on very dark backgrounds.
- **Pink (900):** `#DB153D` — The primary brand color, used for buttons, active sidebar states, and highlights.

### Semantic Mapping
- `--bg-main` (`#0A0A0A`): The main workspace/page background.
- `--bg-sidebar` (`#121212` / fractional black): The sidebar navigation backdrop.
- `--text-primary` (`#FFFFFF`): Standard headings, active states, main paragraphs.
- `--text-secondary` (`rgba(255, 255, 255, 0.6)` / fractional white): Secondary descriptions, inactive states, meta-text.
- `--accent-pink` (`#DB153D`): Active indicators, Primary buttons, tags.

---

## 2. Typography

We default to `Inter`, `Roboto`, or the system sans-serif stack. 
- **Headings (h1, h2, h3):** High contrast (White), thick font-weights (700-800).
- **Body Text:** Less contrast (Secondary text), regular font-weights (400) for readability.
- **Button Labels:** Bold (600), clear and legible.

---

## 3. UI Components

### Buttons
All buttons maintain a completely rounded "pill-shape" (`border-radius: 9999px`) styling.
- **Primary Pink:** Background `#DB153D`, Text `#FFFFFF`. Used for the most important actions on a page (e.g., "Login", "Get Started").
- **Primary White:** Background `#FFFFFF`, Text `#0A0A0A`. Used for distinct secondary actions (e.g., "Get Tickets" on the hero banner).
- **Transparent / Light:** Background `rgba(255, 255, 255, 0.1)`, Text `#FFFFFF`. Used for contextual actions or secondary links.

### The Sidebar
- **Background:** Slightly lighter than the main black (`#121212` or similar).
- **Icons:** Outline SVGs from Lucide-React or `public/icons.svg`.
- **States:**
  - *Inactive:* `rgba(255, 255, 255, 0.6)`
  - *Hover:* Background tint of `rgba(255, 255, 255, 0.1)`
  - *Active:* Bright White icon + a persistent left border marker colored Pink (`#DB153D`).

### Content Cards
The homepage and internal pages use vertical and 16:9 rectangles for comedy specials.
- **Card Images:** Uses `public/images` or `public/comedianpics`. Fallback gradients should be used when images are missing.
- **Overlays:**
  - *Lock Icon:* Positioned Top-Right to signify gated/PPV content.
  - *Badges:* Pill-shaped badges positioned Top-Left in White (e.g., "New") or Blue (e.g., "Pre-0").

### Hero Banners
The Hero region takes up vast amounts of screen space horizontally, featuring:
- A large background image spanning the container.
- A strong dark gradient overlay from left-to-right (`linear-gradient(to right, rgba(10,10,10,0.9), transparent)`) to ensure the text remains legible.

---

## 4. Layout & Spacing
- **Containerization:** The main application limits the page content width dynamically but leaves the sidebar fully vertical.
- **Spacing:** Usage of Tailwind-like or Flexbox `gap` values:
  - Standard Item-to-Item Gap: `1rem` (16px) or `1.5rem` (24px).
  - Vertical Section Gaps: `2.5rem` (40px) or more to let the page breathe.
