# HMADI - Beauty, Coffee & Cheesecake

A modern, elegant website for HMADI salon featuring premium beauty services, specialty coffee, and artisanal cheesecakes. Built with React, Vite, and mobile-first design principles.

![HMADI Banner](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)

## Features

- **Responsive Design**: Mobile-first approach with elegant UI for all screen sizes
- **Service Booking**: Complete appointment booking system with client-side validation
- **Cafe Menu**: Beautiful presentation of coffee, teas, and cheesecakes
- **Gallery**: Lazy-loaded image gallery showcasing work and ambiance
- **About & Team**: Company story, mission, and team member profiles
- **SEO Optimized**: Meta tags, Open Graph, and structured data for LocalBusiness
- **Accessibility**: WCAG AA compliant with semantic HTML and keyboard navigation
- **Fast Performance**: Optimized images, lazy loading, and minimal dependencies

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Vanilla CSS** - Custom styles with CSS variables
- **LocalStorage** - Demo appointment persistence (ready for API integration)

## Project Structure

```
hmadi-salon/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── og-image.jpg
├── src/
│   ├── components/
│   │   ├── NavBar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── Footer.jsx/css
│   │   └── BookingForm.jsx/css
│   ├── pages/
│   │   ├── Home.jsx/css
│   │   ├── Services.jsx/css
│   │   ├── Cafe.jsx/css
│   │   ├── Gallery.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Booking.jsx/css
│   │   └── Contact.jsx/css
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── validation.js
│   │   └── localStorage.js
│   ├── config.json
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- A code editor (VS Code recommended)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd hmadi-salon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Configuration

All business details, services, menu items, team info, and contact information can be easily updated in:

**`src/config.json`**

Edit this file to customize:
- Business name, tagline, contact info
- Social media links
- Services and pricing
- Cafe menu items
- Team members
- Gallery images
- Opening hours

## Deployment

### Option 1: Netlify (Recommended)

1. **Via Drag & Drop:**
   - Run `npm run build`
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - Your site is live!

2. **Via Git:**
   - Push your code to GitHub/GitLab
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Option 2: Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Or use the Vercel web interface:
   - Go to [Vercel](https://vercel.com)
   - Import your Git repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'  // Add this line
   })
   ```

3. **Add deploy script to `package.json`:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Booking System

The booking form currently uses **localStorage** for demo purposes. To integrate with a real backend:

1. Open `src/utils/localStorage.js`
2. Find the `TODO` comments
3. Replace localStorage calls with your API endpoints:

```javascript
// Example API integration
export const saveAppointment = async (appointmentData) => {
  const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointmentData)
  });
  return await response.json();
};
```

Recommended backend options:
- **Supabase** (easiest, has free tier)
- **Firebase**
- **Your own Express/Node.js API**
- **Serverless functions** (Netlify/Vercel Functions)

## Performance Optimizations

- ✅ Lazy loading for images
- ✅ Code splitting via React Router
- ✅ Optimized image URLs (Unsplash with size params)
- ✅ Minimal JavaScript bundle
- ✅ CSS custom properties for theming
- ✅ Font preloading for Google Fonts
- ✅ Smooth animations under 200ms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Change Brand Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #8D5A97;    /* Your primary color */
  --color-accent: #C69C6D;     /* Your accent color */
  --color-background: #FFF9F5; /* Background color */
}
```

### Update Images

Replace image URLs in:
- `src/config.json` (services, gallery, team)
- `src/components/Hero.jsx` (hero background)
- Component files for feature images

Use [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) for free stock photos.

### Add Google Analytics

In `index.html`, uncomment and add your GA4 measurement ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Google Maps

In `src/pages/Contact.jsx`, replace the map placeholder with:

```jsx
<iframe
  title="HMADI Location"
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '8px' }}
  allowFullScreen
  loading="lazy"
></iframe>
```

Get your embed code from [Google Maps Embed API](https://developers.google.com/maps/documentation/embed).

## Troubleshooting

**Images not loading?**
- Check Unsplash URLs are accessible
- Replace with your own hosted images

**Routes not working after deployment?**
- Ensure your host supports SPA routing
- For Netlify: Create `public/_redirects` with `/* /index.html 200`
- For Vercel: Create `vercel.json` with rewrites config

**Build fails?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node -v` (should be 16+)

## License

This project is open source and available for use in your hackathon or commercial projects.

## Credits

- Design & Development: HMADI Team
- Images: Unsplash & Pexels
- Icons: Inline SVG (Feather Icons style)
- Fonts: Google Fonts (Playfair Display, Inter)

## Support

For questions or issues, please contact: hello@hmadi.salon

---

**Built with ❤️ for beautiful moments of self-care.**
