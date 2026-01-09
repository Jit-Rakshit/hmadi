# HMADI Deployment Guide

This guide provides step-by-step instructions for deploying your HMADI website to three free hosting platforms.

## 🚀 Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (Fastest)

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site is live! 🎉

### Method B: Git Integration (Best for updates)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

3. **Done!** Your site will auto-deploy on every git push.

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update your DNS records as instructed

---

## 🔷 Option 2: Vercel

### Deploy via CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. Follow the prompts (defaults work fine)

### Deploy via Web Interface

1. **Push code to GitHub** (see Netlify Method B, step 1)

2. **Import to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Auto-deploys on every push.

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed

---

## 📦 Option 3: GitHub Pages

### Setup

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`:**

   Replace the entire file with:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/hmadi-salon/',  // Replace with your repo name
     server: {
       port: 3000
     }
   })
   ```

3. **Add deploy scripts to `package.json`:**

   Add these to the `"scripts"` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Click "Save"

6. **Access your site:**
   - `https://YOUR_USERNAME.github.io/hmadi-salon/`

### Update on GitHub Pages

Every time you want to update:
```bash
npm run deploy
```

---

## 🔧 Troubleshooting

### Routes Not Working (404 on page refresh)

**Netlify:** Already configured with `public/_redirects`

**Vercel:** Create `vercel.json` in root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**GitHub Pages:** You may need to use hash routing instead of browser routing.

### Build Fails

1. **Clear cache:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version:**
   ```bash
   node -v  # Should be 16+
   ```

3. **Verify all files are committed:**
   ```bash
   git status
   ```

### Images Not Loading

- Ensure Unsplash URLs are accessible
- Check console for CORS errors
- Replace with your own hosted images if needed

### Environment Variables

If you add API keys later:

**Netlify:**
- Site settings → Build & deploy → Environment

**Vercel:**
- Project Settings → Environment Variables

**GitHub Pages:**
- Not recommended for sensitive data; use Netlify/Vercel instead

---

## 📊 Performance Check

After deployment, test your site:

1. **Lighthouse Audit:**
   - Open DevTools → Lighthouse
   - Run audit
   - Aim for 90+ in all categories

2. **Mobile Testing:**
   - Test on real devices
   - Use Chrome DevTools device emulation

3. **Load Testing:**
   - https://www.webpagetest.org/
   - https://gtmetrix.com/

---

## 🎯 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Booking form submits successfully
- [ ] Images load properly
- [ ] Social links point to correct URLs
- [ ] Contact information is accurate
- [ ] Mobile menu works
- [ ] SEO meta tags are present
- [ ] Favicon displays
- [ ] All links work (no 404s)

---

## 🔄 Making Updates

### For Netlify/Vercel (Git-based):
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
4. Site auto-deploys!

### For GitHub Pages:
1. Make changes locally
2. Test with `npm run dev`
3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 💡 Pro Tips

1. **Use Netlify for hackathons** - fastest setup, great free tier
2. **Use Vercel for Next.js** - if you later migrate to Next.js
3. **Custom domains** - available on all three platforms (free on Netlify/Vercel)
4. **SSL/HTTPS** - automatically provided by all three platforms
5. **Analytics** - Add Google Analytics or use Netlify/Vercel built-in analytics

---

## 🆘 Need Help?

- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs
- GitHub Pages: https://docs.github.com/en/pages
- Vite Docs: https://vitejs.dev/guide/

---

**Ready to launch? Pick your platform and follow the steps above!** 🚀
