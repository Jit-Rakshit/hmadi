# HMADI Project Structure

## Complete File Tree

```
hmadi-salon/
│
├── public/
│   ├── favicon.svg              # Brand favicon (H logo)
│   ├── manifest.json            # PWA manifest
│   └── _redirects               # Netlify SPA routing config
│
├── src/
│   ├── components/              # Reusable React components
│   │   ├── NavBar.jsx          # Sticky navigation with mobile menu
│   │   ├── NavBar.css
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── Hero.css
│   │   ├── Footer.jsx          # Site-wide footer
│   │   ├── Footer.css
│   │   ├── BookingForm.jsx     # Appointment booking form
│   │   └── BookingForm.css
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Home.jsx            # Landing page
│   │   ├── Home.css
│   │   ├── Services.jsx        # All salon services
│   │   ├── Services.css
│   │   ├── Cafe.jsx            # Cafe menu
│   │   ├── Cafe.css
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── Gallery.css
│   │   ├── About.jsx           # About & team
│   │   ├── About.css
│   │   ├── Booking.jsx         # Booking page
│   │   ├── Booking.css
│   │   ├── Contact.jsx         # Contact info & map
│   │   └── Contact.css
│   │
│   ├── styles/
│   │   └── global.css          # Global styles, CSS variables, utilities
│   │
│   ├── utils/
│   │   ├── validation.js       # Form validation functions
│   │   └── localStorage.js     # LocalStorage helpers (ready for API)
│   │
│   ├── config.json             # All business data (editable!)
│   ├── App.jsx                 # Main app component with routes
│   └── main.jsx                # React entry point
│
├── index.html                   # HTML entry point with SEO meta tags
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # Main documentation
└── PROJECT_STRUCTURE.md        # This file

```

## Key Features by File

### Configuration & Setup
- **package.json**: React 18, React Router, Vite build tools
- **vite.config.js**: Vite dev server on port 3000
- **config.json**: Single source of truth for all content

### Components
- **NavBar**: Responsive sticky header, hamburger menu, active route highlighting
- **Hero**: Full-screen hero with overlay, CTA buttons, trust badges
- **Footer**: Multi-column footer with contact info, social links, hours
- **BookingForm**: Full appointment form with validation, localStorage, confirmation modal

### Pages
- **Home**: Hero + welcome + featured services + cafe preview + CTA
- **Services**: Filterable service grid by category with pricing
- **Cafe**: Coffee, tea, and cheesecake menu with images
- **Gallery**: Lazy-loaded responsive image grid with hover overlays
- **About**: Story, mission cards, team profiles, values list
- **Booking**: Booking form with step-by-step guide and policy
- **Contact**: Contact methods, social links, map placeholder, hours

### Utilities
- **validation.js**: Email, phone, date validation + booking form validator
- **localStorage.js**: CRUD operations for appointments (ready for API swap)

### Styles
- **global.css**: CSS custom properties, typography, buttons, cards, forms, modals, responsive utilities

## Quick Reference

### To Run Development Server:
```bash
npm run dev
```

### To Build for Production:
```bash
npm run build
```

### To Edit Business Info:
Edit `src/config.json`

### To Change Colors/Branding:
Edit CSS variables in `src/styles/global.css`

### To Add API Integration:
Replace functions in `src/utils/localStorage.js`

## Total Files Created: 35+

- 7 Page components (+ 7 CSS files)
- 4 Shared components (+ 4 CSS files)
- 2 Utility modules
- 1 Global CSS file
- 1 Config JSON
- 1 App component
- 1 Main entry
- 1 HTML template
- 3 Public assets
- 4 Config/docs files
