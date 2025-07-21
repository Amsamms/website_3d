# Creative Studio - 3D Interactive Website

A professional showcase website featuring cutting-edge 3D interactive experiences, built with Three.js, WebGL, and GSAP animations. Inspired by modern design trends and optimized for performance across all devices.

## 🚀 Features

- **3D Interactive Hero Section** with WebGL particles and floating geometry
- **Smooth Scroll Animations** powered by GSAP ScrollTrigger
- **Mobile-First Responsive Design** that works flawlessly on all devices
- **Character-by-Character Text Animations** for dramatic effect
- **Interactive 3D Elements** that respond to mouse movement
- **Performance Optimized** for fast loading and smooth interactions
- **Modern Design** with bold typography and striking visuals
- **Complete Multi-Page Site** with Home, About, Services, Blog, Contact, and Careers

## 🛠️ Technologies Used

- **Three.js** - 3D graphics and WebGL rendering
- **GSAP** - High-performance animations and scroll triggers
- **Vite** - Fast development and build tool
- **Vanilla JavaScript** - Clean, performance-focused code
- **CSS3** - Modern styling with custom properties and animations
- **HTML5** - Semantic markup and accessibility

## 📁 Project Structure

```
website_3d/
├── css/
│   └── style.css          # Main stylesheet with animations and responsive design
├── js/
│   └── main.js           # Three.js scene, animations, and interactions
├── assets/
│   ├── images/           # Image assets
│   └── models/           # 3D model files
├── public/               # Static assets
├── index.html           # Home page with 3D hero and portfolio preview
├── about.html           # About page with team and company info
├── services.html        # Services page with pricing and packages
├── blog.html            # Blog/portfolio page with case studies
├── contact.html         # Contact page with interactive form
├── careers.html         # Careers page with job listings and application form
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Pages Overview

### Home Page (`index.html`)
- Interactive 3D hero section with animated particles
- Company stats with animated counters
- Services preview with hover effects
- Client testimonials slider
- Portfolio showcase
- Call-to-action sections

### About Page (`about.html`)
- Company mission and values
- Team member profiles with skills
- Interactive process timeline
- Company culture highlights

### Services Page (`services.html`)
- Detailed service offerings
- Pricing packages with comparisons
- Process overview
- Technology stack highlights

### Blog Page (`blog.html`)
- Featured project case studies
- Portfolio showcases with results
- Technical articles and insights
- Industry trend discussions

### Contact Page (`contact.html`)
- Interactive contact form with validation
- Company contact information
- FAQ section
- Project inquiry process

### Careers Page (`careers.html`)
- Open position listings
- Company benefits and culture
- Application form with file upload
- Team values and expectations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd website_3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will automatically reload when you make changes

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Serve static files (after build)
npm run serve
```

## 🎨 Design Features

### 3D Elements
- Interactive particle systems
- Floating geometric shapes
- Mouse-responsive camera movement
- WebGL-powered effects

### Animations
- Character-by-character text reveals
- Scroll-triggered animations
- Smooth parallax effects
- Hover and interaction feedback

### Performance
- Optimized 3D rendering
- Lazy loading for images
- Efficient animation timelines
- Mobile-first responsive design

## 📱 Mobile Optimization

- Touch-friendly interactions
- Optimized 3D performance for mobile GPUs
- Responsive typography and spacing
- Gesture-based navigation
- Reduced animation complexity on mobile devices

## 🔧 Customization

### Colors and Theming
Edit CSS custom properties in `css/style.css`:
```css
:root {
  --primary-color: #000000;
  --accent-color: #ff4444;
  --text-color: #ffffff;
  /* ... more variables */
}
```

### 3D Scene Configuration
Modify 3D elements in `js/main.js`:
```javascript
// Adjust particle count
const particleCount = 1000;

// Modify camera settings
this.camera.position.z = 5;

// Change material colors
color: 0xff4444
```

### Content Updates
- Update text content directly in HTML files
- Replace images in the `assets/images/` folder
- Modify team information in `about.html`
- Update service packages in `services.html`

## 🌟 Key Features Explained

### Three.js Integration
- Custom WebGL renderer with alpha transparency
- Particle system with custom colors and movement
- Interactive geometric shapes with wireframe materials
- Mouse-responsive camera controls

### GSAP Animations
- ScrollTrigger for scroll-based animations
- Timeline-based character animations
- Smooth transitions and micro-interactions
- Performance-optimized animation loops

### Form Handling
- Client-side validation
- File upload support (careers page)
- Interactive feedback
- Ready for backend integration

## 📊 Performance Optimization

- **Efficient 3D Rendering**: Optimized geometry and materials
- **Lazy Loading**: Images load as needed
- **Animation Optimization**: Use of `will-change` and `transform3d`
- **Bundle Optimization**: Vite handles code splitting and minification
- **Mobile Performance**: Reduced particle count and effects on smaller screens

## 🎯 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers with WebGL support

## 🚀 Deployment

### Static Hosting (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

### Server Requirements
- Static file server (no backend required)
- HTTPS recommended for best performance
- CDN for global content delivery

## 📈 SEO and Accessibility

- Semantic HTML structure
- Meta tags and Open Graph data
- Alt text for images
- Keyboard navigation support
- Screen reader friendly content
- Fast loading times for better search rankings

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly on multiple devices
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Credits

- **Three.js** - 3D graphics library
- **GSAP** - Animation library
- **Vite** - Build tool
- **Design Inspiration** - Modern portfolio websites and MxnnCreates.com

## 📞 Support

For questions or support:
- Email: hello@creativestudio.com
- GitHub Issues: Create an issue for bug reports
- Documentation: Check this README for detailed setup instructions

---

**Built with passion and 3D magic** ✨

Happy coding! 🚀