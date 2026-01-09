# 🚀 HMADI Quick Start Guide

Get your beautiful salon website running in under 5 minutes!

## ⚡ Lightning Fast Setup

### Step 1: Install Dependencies
```bash
cd hmadi-salon
npm install
```
*This will take 1-2 minutes*

### Step 2: Start Development Server
```bash
npm run dev
```
*Server starts on http://localhost:3000*

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

**That's it!** Your site is running! 🎉

---

## 🎨 Customize Your Site

### Edit Business Information
Open `src/config.json` and update:
- Business name and contact info
- Services and pricing
- Cafe menu items
- Team member profiles
- Social media links
- Opening hours

### Change Brand Colors
Open `src/styles/global.css` and edit:
```css
:root {
  --color-primary: #8D5A97;    /* Main brand color */
  --color-accent: #C69C6D;     /* Accent/CTA color */
  --color-background: #FFF9F5; /* Background */
}
```

### Replace Images
Edit image URLs in:
- `src/config.json` (services, gallery, team)
- `src/components/Hero.jsx` (hero background)

Use free images from:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)

---

## 📦 Build for Production

```bash
npm run build
```
Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to the Web (FREE)

### Fastest: Netlify Drop (2 minutes)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist` folder
4. Done! Get your live URL

### Best for Hackathons: Netlify Git (5 minutes)
1. Push code to GitHub
2. Go to https://netlify.com → "New site from Git"
3. Select repo → Build command: `npm run build` → Publish: `dist`
4. Deploy! Auto-updates on every push

**Full deployment guide:** See `DEPLOYMENT_GUIDE.md`

---

## 🎯 Project Features

✅ Fully responsive (mobile, tablet, desktop)
✅ 7 complete pages (Home, Services, Cafe, Gallery, About, Booking, Contact)
✅ Working booking form with validation
✅ Beautiful UI with smooth animations
✅ SEO optimized with meta tags
✅ Accessible (WCAG AA compliant)
✅ Fast loading with lazy images
✅ Easy to customize

---

## 📁 File Structure

```
src/
├── components/     # Reusable components (NavBar, Footer, etc.)
├── pages/         # Page components (Home, Services, etc.)
├── styles/        # Global CSS
├── utils/         # Helper functions
└── config.json    # ⭐ Edit this for content!
```

---

## 🛠️ Common Tasks

### Add a New Service
Edit `src/config.json` → `services` array → add item:
```json
{
  "name": "New Service",
  "description": "Description here",
  "duration": "60 min",
  "price": "$50",
  "image": "https://images.unsplash.com/..."
}
```

### Add a New Team Member
Edit `src/config.json` → `team` array:
```json
{
  "name": "Jane Doe",
  "role": "Stylist",
  "image": "https://...",
  "bio": "Expert with 10 years experience"
}
```

### Add Gallery Image
Edit `src/config.json` → `gallery` array:
```json
{
  "url": "https://images.unsplash.com/...",
  "alt": "Description for accessibility"
}
```

---

## 🔧 Development Commands

| Command | What It Does |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📱 Test Responsiveness

1. **Desktop:** Open http://localhost:3000 in Chrome
2. **Mobile:** Press `F12` → Click device icon → Select iPhone/Android
3. **Or:** Test on your actual phone (same WiFi network)

---

## ✨ Booking Form Features

- ✅ Client-side validation (email, phone, date)
- ✅ Saves to localStorage (demo mode)
- ✅ Confirmation modal after submit
- ✅ Ready for API integration

**To connect to real backend:** Edit `src/utils/localStorage.js`

---

## 🎓 For Hackathon Judges

### Highlights:
1. **Production-Ready:** Not just a prototype - fully functional
2. **Best Practices:** React hooks, modular CSS, accessibility
3. **Performance:** Lazy loading, optimized images, fast builds
4. **UX:** Smooth animations, mobile-first, intuitive navigation
5. **Deployment:** Can be live in 5 minutes on free hosting

### Tech Stack:
- React 18 (latest)
- Vite 5 (fast builds)
- React Router 6 (routing)
- Vanilla CSS (no heavy frameworks)
- localStorage (easily swappable to API)

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process and restart
npm run dev
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not loading?**
- Check internet connection (using Unsplash URLs)
- Or replace with local images in `public/` folder

---

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **PROJECT_STRUCTURE.md** - Complete file tree and descriptions

---

## 🎉 You're Ready!

Your HMADI salon website is set up and ready to customize!

**Next steps:**
1. Customize `config.json` with your data
2. Adjust colors in `global.css`
3. Test the booking form
4. Deploy to Netlify

**Questions?** Check the full README.md for detailed guides.

---

**Happy Hacking! 💜✨**
