import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class SimpleRippleScene {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.ripplePlane = null;
    this.mouse = new THREE.Vector2();
    this.time = 0;
    
    this.init();
    this.createRipples();
    this.setupEventListeners();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.canvas = document.getElementById('three-canvas');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
  }

  createRipples() {
    const geometry = new THREE.PlaneGeometry(20, 20, 64, 64);
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        varying float vWave;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          vec2 mousePos = mouse * 10.0;
          float dist = distance(pos.xy, mousePos);
          
          float wave1 = sin(dist * 3.0 - time * 6.0) * 0.3 * exp(-dist * 0.2);
          float wave2 = sin(dist * 6.0 - time * 8.0) * 0.2 * exp(-dist * 0.3);
          float wave3 = sin(dist * 12.0 - time * 10.0) * 0.1 * exp(-dist * 0.5);
          
          vWave = wave1 + wave2 + wave3;
          pos.z = vWave;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 mouse;
        varying vec2 vUv;
        varying float vWave;
        
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        
        void main() {
          vec2 mousePos = mouse * 10.0;
          float dist = distance(vUv * 20.0 - 10.0, mousePos);
          
          float hue = fract(time * 0.1 + dist * 0.1 + vWave * 2.0);
          float saturation = 0.8;
          float value = 0.6 + abs(vWave) * 2.0;
          
          vec3 color = hsv2rgb(vec3(hue, saturation, value));
          
          // Add some base colors
          color = mix(color, vec3(0.2, 0.8, 1.0), 0.2);
          color = mix(color, vec3(1.0, 0.2, 0.6), sin(time + dist) * 0.1 + 0.1);
          
          float alpha = abs(vWave) * 2.0 + 0.1;
          alpha *= 1.0 - smoothstep(0.0, 8.0, dist);
          
          gl_FragColor = vec4(color, alpha * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    this.ripplePlane = new THREE.Mesh(geometry, material);
    this.ripplePlane.rotation.x = -Math.PI / 2;
    this.scene.add(this.ripplePlane);

    // Add some particles
    this.createParticles();
  }

  createParticles() {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.016;

    if (this.ripplePlane) {
      this.ripplePlane.material.uniforms.time.value = this.time;
      this.ripplePlane.material.uniforms.mouse.value = this.mouse;
    }

    this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.mouse.y * 2 - this.camera.position.y) * 0.05;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

// Simple fallback animations without 3D
class FallbackAnimations {
  constructor() {
    this.initScrollAnimations();
    this.initTextAnimations();
    this.initLoadingScreen();
  }

  initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        gsap.to(loadingScreen, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loadingScreen.style.display = 'none';
            this.initHeroAnimations();
          }
        });
      }, 1000);
    });
  }

  initHeroAnimations() {
    const tl = gsap.timeline();
    
    tl.to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .to('.cta-button', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3');
  }

  initScrollAnimations() {
    gsap.utils.toArray('.fade-in').forEach(element => {
      gsap.fromTo(element, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    gsap.utils.toArray('.slide-in-left').forEach(element => {
      gsap.fromTo(element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    gsap.utils.toArray('.slide-in-right').forEach(element => {
      gsap.fromTo(element,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }

  initTextAnimations() {
    const animateText = (element) => {
      const text = element.textContent;
      element.innerHTML = '';
      
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        element.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.03,
          ease: 'power3.out'
        });
      });
    };

    document.querySelectorAll('.animate-text').forEach(animateText);
  }
}

class NavigationController {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.header = document.querySelector('header');
    
    this.initNavigation();
    this.initScrollHeader();
  }

  initNavigation() {
    this.menuToggle?.addEventListener('click', () => {
      this.navLinks.classList.toggle('open');
      this.menuToggle.classList.toggle('active');
    });

    this.navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.navLinks.classList.remove('open');
        this.menuToggle.classList.remove('active');
      });
    });
  }

  initScrollHeader() {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        this.header.style.background = 'rgba(0, 0, 0, 0.95)';
        this.header.style.backdropFilter = 'blur(20px)';
      } else {
        this.header.style.background = 'rgba(0, 0, 0, 0.8)';
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        this.header.style.transform = 'translateY(-100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Try to initialize 3D scene
    const rippleScene = new SimpleRippleScene();
    console.log('3D Ripple effects loaded successfully');
  } catch (error) {
    console.log('3D effects failed, using fallback animations:', error);
    // Hide the canvas if 3D fails
    const canvas = document.getElementById('three-canvas');
    if (canvas) canvas.style.display = 'none';
  }
  
  // Always initialize these
  const fallbackAnimations = new FallbackAnimations();
  const navigationController = new NavigationController();
  
  // Add simple mouse tracking for fallback
  if (!window.rippleScene) {
    let mouseTrail = [];
    document.addEventListener('mousemove', (e) => {
      mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
      if (mouseTrail.length > 10) mouseTrail.shift();
      
      // Create simple CSS ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.borderRadius = '50%';
      ripple.style.background = `hsl(${Date.now() * 0.01 % 360}, 70%, 60%)`;
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.zIndex = '999';
      ripple.style.opacity = '0.7';
      document.body.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 3,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    });
  }
});

export { SimpleRippleScene, FallbackAnimations, NavigationController };