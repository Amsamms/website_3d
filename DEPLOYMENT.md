# Deployment Guide

## 🚀 Multiple Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

#### Step 1: Prepare Repository
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit: 3D showcase website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/website-3d.git
git branch -M main
git push -u origin main
```

#### Step 2: Install Dependencies & Deploy
```bash
# Install gh-pages package
npm install

# Build and deploy to GitHub Pages
npm run deploy
```

#### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Source: Select **Deploy from a branch**
4. Branch: Select **gh-pages**
5. Folder: **/ (root)**
6. Click **Save**

Your site will be available at: `https://yourusername.github.io/website-3d/`

---

### Option 2: Netlify (Recommended for Professional)

#### Method A: Git Integration (Automatic Deploys)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **New site from Git**
4. Choose your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

#### Method B: Manual Deploy
```bash
# Build the project
npm run build

# Drag and drop the 'dist' folder to Netlify deploy page
```

---

### Option 3: Vercel (Great for Performance)

#### Method A: CLI Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: website-3d
# - Directory: ./
# - Override settings? No
```

#### Method B: Git Integration
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite settings
5. Click **Deploy**

---

### Option 4: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Choose:
# - Use existing project or create new
# - Public directory: dist
# - Single page app: Yes
# - GitHub integration: Optional

# Build and deploy
npm run build
firebase deploy
```

---

### Option 5: AWS S3 + CloudFront (Professional)

```bash
# Build the project
npm run build

# Upload dist folder to S3 bucket
# Configure S3 for static website hosting
# Set up CloudFront distribution for global CDN
```

---

## 📋 Pre-Deployment Checklist

### 1. Build and Test Production Version
```bash
# Build for production
npm run build

# Test production build locally
npm run preview
# Visit http://localhost:4173
```

### 2. Performance Optimization
- ✅ 3D effects optimized with fallbacks
- ✅ Images compressed and optimized
- ✅ CSS and JS minified (handled by Vite)
- ✅ Mobile-first responsive design

### 3. SEO and Meta Tags
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Alt text for images

### 4. Cross-Browser Testing
Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🌟 Recommended: GitHub Pages

**Why GitHub Pages?**
- **Free hosting**
- **Custom domain support**
- **HTTPS by default**
- **Automatic deploys** with GitHub Actions
- **Easy to maintain**

**Steps:**
1. Push code to GitHub
2. Run `npm run deploy`
3. Enable Pages in repository settings
4. Your site is live! 🎉

---

## 🔧 Custom Domain Setup (Optional)

### For GitHub Pages:
1. Buy domain from any registrar
2. Add `CNAME` file to repository root with your domain
3. Configure DNS records:
   - **A records:** Point to GitHub Pages IPs
   - **CNAME:** www.yourdomain.com → yourusername.github.io

### DNS Records:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     yourusername.github.io
```

---

## 📊 Analytics Setup (Optional)

Add Google Analytics to track visitors:

```html
<!-- Add to <head> section of all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Quick Deploy (GitHub Pages)

```bash
# One-command deploy
npm run deploy
```

That's it! Your amazing 3D website is now live! 🚀✨