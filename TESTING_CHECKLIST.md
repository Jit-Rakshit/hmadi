# ✅ HMADI Testing Checklist

Use this checklist to ensure everything works before presenting or deploying.

## 🖥️ Desktop Testing (Chrome/Firefox/Safari)

### Navigation
- [ ] Logo links to home page
- [ ] All 7 nav links work (Home, Services, Cafe, Gallery, About, Booking, Contact)
- [ ] Active page is highlighted in nav
- [ ] Navigation is sticky on scroll
- [ ] Smooth scroll to sections

### Home Page
- [ ] Hero image loads
- [ ] Hero CTAs work ("Book Appointment", "Explore Services")
- [ ] Featured services display correctly
- [ ] Cafe preview images load
- [ ] All links navigate correctly

### Services Page
- [ ] Category filters work (All, Haircuts, Nails, Facials)
- [ ] Service cards display with images
- [ ] Pricing shows correctly
- [ ] "Book This Service" buttons work
- [ ] "Contact Us" CTA works

### Cafe Page
- [ ] Intro section displays
- [ ] All menu sections load (Coffee, Teas, Cheesecakes)
- [ ] Menu items show name, description, price
- [ ] Images load for each section
- [ ] CTA buttons work

### Gallery Page
- [ ] Images load lazily (check network tab)
- [ ] Hover effect works on images
- [ ] Image captions appear on hover
- [ ] Grid is responsive
- [ ] Instagram link works
- [ ] "Book Your Transformation" button works

### About Page
- [ ] Story section displays
- [ ] Mission cards show with icons
- [ ] Team member profiles load with images
- [ ] Values list displays correctly
- [ ] All content is readable

### Booking Page
- [ ] Step-by-step guide shows
- [ ] Form displays all fields
- [ ] Required fields are marked
- [ ] Service dropdown populates
- [ ] Stylist dropdown populates
- [ ] Date picker allows future dates only
- [ ] Time dropdown populates
- [ ] "Book Appointment" button visible

### Booking Form Validation
- [ ] Empty name shows error
- [ ] Invalid email shows error
- [ ] Invalid phone shows error
- [ ] Empty service shows error
- [ ] Past date shows error
- [ ] Empty time shows error
- [ ] Valid submission shows success modal
- [ ] Modal displays correct booking details
- [ ] "Got it!" button closes modal
- [ ] Form clears after submission

### Contact Page
- [ ] Contact methods display with icons
- [ ] Phone link works (tel:)
- [ ] Email link works (mailto:)
- [ ] Opening hours display
- [ ] Social links work (Instagram, Facebook, TikTok)
- [ ] Map placeholder shows
- [ ] "Book Now" CTA works

### Footer
- [ ] All quick links work
- [ ] Contact info displays
- [ ] Social icons work
- [ ] Hours display
- [ ] Trust badges show
- [ ] Copyright year is current
- [ ] Privacy/Terms links present

---

## 📱 Mobile Testing (< 768px)

### Mobile Navigation
- [ ] Hamburger menu icon visible
- [ ] Hamburger opens mobile menu
- [ ] Mobile menu slides in from right
- [ ] Overlay appears behind menu
- [ ] Clicking overlay closes menu
- [ ] Nav links work in mobile menu
- [ ] Active page highlighted
- [ ] Menu closes after navigation
- [ ] No horizontal scroll

### Mobile Pages
- [ ] Hero text is readable
- [ ] CTAs are thumb-friendly (48px+ height)
- [ ] Images scale properly
- [ ] Cards stack vertically
- [ ] Gallery grid adjusts (1 or 2 columns)
- [ ] Forms are easy to fill
- [ ] Buttons are full-width where appropriate
- [ ] Footer stacks properly

### Mobile Form
- [ ] All inputs are large enough
- [ ] Date picker works on mobile
- [ ] Select dropdowns work
- [ ] Keyboard doesn't obscure inputs
- [ ] Submit button is easily tappable
- [ ] Modal is readable on small screens

---

## 🎨 Design & UI

### Visual Consistency
- [ ] Brand colors used throughout (#8D5A97, #C69C6D, #FFF9F5)
- [ ] Fonts consistent (Playfair Display for headings, Inter for body)
- [ ] Spacing is consistent
- [ ] Buttons have uniform style
- [ ] Cards have consistent shadows
- [ ] Images have proper aspect ratios

### Animations
- [ ] Hover effects work smoothly
- [ ] Transitions are under 200ms
- [ ] No jarring animations
- [ ] Loading states work (if applicable)
- [ ] Scroll animations are smooth

### Typography
- [ ] Text is readable on all backgrounds
- [ ] Line heights are comfortable
- [ ] No text overflow issues
- [ ] Headings have proper hierarchy
- [ ] Links are distinguishable

---

## ⚡ Performance

### Load Time
- [ ] Home page loads in < 3 seconds
- [ ] Images appear progressively
- [ ] No render-blocking resources
- [ ] Fonts load without flash

### Images
- [ ] Images use lazy loading
- [ ] Proper image sizes (not oversized)
- [ ] Images have alt text
- [ ] No broken image links

### Network
- [ ] Check DevTools Network tab
- [ ] Total page size < 2MB
- [ ] No 404 errors
- [ ] External links use HTTPS

---

## ♿ Accessibility

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Skip to main content available
- [ ] Modal can be closed with Escape
- [ ] Form can be submitted with Enter
- [ ] No keyboard traps

### Screen Reader
- [ ] Heading hierarchy makes sense (H1 → H2 → H3)
- [ ] All images have alt text
- [ ] Form labels are associated
- [ ] Buttons have descriptive text
- [ ] ARIA labels where needed

### Color & Contrast
- [ ] Text meets contrast ratio (WCAG AA: 4.5:1)
- [ ] Links are distinguishable
- [ ] Focus states are visible
- [ ] Error messages are clear

---

## 🔧 Technical

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Console
- [ ] No JavaScript errors
- [ ] No console warnings
- [ ] No CORS errors
- [ ] No missing resources

### Routes
- [ ] All routes work on initial load
- [ ] Routes work after navigation
- [ ] Back/forward buttons work
- [ ] Refresh on any page works

### LocalStorage
- [ ] Bookings save to localStorage
- [ ] Can view saved bookings (DevTools → Application → LocalStorage)
- [ ] Multiple bookings can be saved
- [ ] Data persists after refresh

---

## 📊 SEO

### Meta Tags
- [ ] Title tag present on all pages
- [ ] Meta description present
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter card tags present
- [ ] Viewport meta tag present

### Content
- [ ] Unique H1 on each page
- [ ] Semantic HTML used (<header>, <nav>, <main>, <footer>)
- [ ] Structured data present (LocalBusiness schema)
- [ ] Internal links work
- [ ] No duplicate content

### URLs
- [ ] Clean URLs (no hash routing on Netlify/Vercel)
- [ ] URLs are descriptive (/services, /booking, etc.)
- [ ] Canonical URLs set if needed

---

## 🚀 Pre-Deployment

### Build
- [ ] `npm run build` succeeds
- [ ] No build errors
- [ ] No build warnings
- [ ] Dist folder created

### Configuration
- [ ] config.json has correct business info
- [ ] Social links point to correct URLs
- [ ] Contact info is accurate
- [ ] Opening hours are correct

### Assets
- [ ] Favicon displays
- [ ] Manifest.json is valid
- [ ] All images are accessible
- [ ] No broken links

---

## 🎯 Post-Deployment

### Live Site
- [ ] All pages load on live URL
- [ ] Navigation works
- [ ] Forms submit
- [ ] Images load
- [ ] Mobile responsive
- [ ] SSL/HTTPS enabled

### Third-Party Tools
- [ ] Google Lighthouse audit (aim for 90+ in all categories)
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] PageSpeed Insights: https://pagespeed.web.dev/

### Analytics (if added)
- [ ] Google Analytics tracking code fires
- [ ] Page views are tracked
- [ ] Events are tracked (if configured)

---

## 🐛 Common Issues

**Issue:** Routes show 404 on refresh
- **Fix:** Check `_redirects` file for Netlify, `vercel.json` for Vercel

**Issue:** Images not loading
- **Fix:** Check network tab, ensure Unsplash URLs are accessible

**Issue:** Form not submitting
- **Fix:** Check console for errors, verify validation logic

**Issue:** Mobile menu not working
- **Fix:** Check z-index, overflow settings, JavaScript

**Issue:** Build fails
- **Fix:** Clear node_modules, reinstall, check Node version (16+)

---

## ✅ Final Pre-Launch Checklist

- [ ] All pages tested on desktop
- [ ] All pages tested on mobile
- [ ] Forms work correctly
- [ ] All links functional
- [ ] Images load properly
- [ ] No console errors
- [ ] Responsive on all sizes
- [ ] Accessible via keyboard
- [ ] Build succeeds
- [ ] Deployed and live
- [ ] Lighthouse score checked
- [ ] README updated
- [ ] Demo URL ready

---

## 📝 Notes

Use this space to track issues found during testing:

```
[Date] - [Issue] - [Status]
Example: 2024-01-08 - Mobile menu z-index too low - FIXED
```

---

**Happy Testing! When all checkboxes are marked, you're ready to present!** 🎉
