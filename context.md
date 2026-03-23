# Jokester Sandbox — AI Context File

## Project Overview
Jokester is a proof-of-concept (POC) frontend-only sandbox for a PPV (Pay-Per-View) VOD (Video On Demand) streaming service. The goal is to simulate the user experience for both viewers and comedians selling content. No backend, authentication, or real payments are implemented. All data is fake and stored in-memory only. The UI/UX should follow the Figma design and dev mode instructions.

## Key Features & Flows
- **Home Page:**
  - Shows all available content (videos, items, etc.)
  - "LOGIN" button in top right (visible when not logged in)
  - Sidebar navigation (always visible)
  - Clickable sidebar items for navigation (max 3 clicks to any content)
- **Login Page:**
  - Simple login form (no real authentication)
  - "Why you should use Jokester" section for comedians
  - Branding and landing visuals (per Figma)
- **User Inventory:**
  - After login, users can add content from the home page to their "inventory"
  - Inventory contents are accessible (sidebar or separate page)
- **Checkout Flow:**
  - Users can "purchase" items (no real payment/auth)
  - Checkout screen with form fields (accepts any input or left blank)
  - Example checkout flow (add to cart, proceed to checkout, confirmation)
  - Users can view purchased/accessed items
- **Fake Video Player:**
  - Placeholder area for video playback
  - UI elements as described in Figma (controls, title, etc.)
- **Shop Page:**
  - List of fake items for sale (uploaded by comedians)
  - Tour dates/stops and other purchasable items
- **Sidebar & User Dropdown:**
  - Sidebar navigation (always visible)
  - User icon/profile picture in top left of sidebar (after login)
  - Dropdown menu with fake user details (address, email, etc.)
  - Sidebar accessible to both logged-in and logged-out users

## UX & Navigation Constraints
- On site entry: All content visible, but purchases disabled until login.
- Not logged in: "LOGIN" button in top right, sidebar visible, content accessible.
- After login: Profile picture in sidebar top left, dropdown menu, inventory and purchase features enabled.
- All content accessible in ≤3 clicks.

## Figma Integration
- All styling, layout, and component structure should follow the Figma dev mode and design system.
- Use Figma-provided assets, colors, and spacing where possible.
- Refer to Figma dev mode prompts for detailed UI requirements.

## Data & Authentication
- No backend, no real authentication, no real payments.
- All data is fake and stored in-memory (e.g., React state, context, or local variables).
- No API calls or database connections.

## AI/Codegen Guidance
- Do not build for scale or production.
- Prioritize clarity, ease of navigation, and a playful, branded feel.
- All flows and features are for demonstration only.
- Use this context file as a reference for all future AI or codegen tasks.

---

**Ready for Figma dev prompts and further feature/component scaffolding.**
