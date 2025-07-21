import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class WebGL3DScene {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.ripplePlanes = [];
    this.mouse = new THREE.Vector2();
    this.mouseTarget = new THREE.Vector2();
    this.mousePrevious = new THREE.Vector2();
    this.mouseVelocity = new THREE.Vector2();
    this.time = 0;
    this.ripples = [];
    
    this.init();
    this.createRippleEffect();
    this.createFloatingElements();
    this.setupEventListeners();
    this.animate();
  }

  init() {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x000000, 1, 1000);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer setup
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

  createRippleEffect() {
    // Create multiple ripple planes with different sizes and effects
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.PlaneGeometry(15, 15, 128, 128);
      
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          mouse: { value: new THREE.Vector2() },
          mouseVelocity: { value: new THREE.Vector2() },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          layer: { value: i },
          ripples: { value: [] }
        },
        vertexShader: `
          uniform float time;
          uniform vec2 mouse;
          uniform vec2 mouseVelocity;
          uniform vec2 resolution;
          uniform float layer;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vElevation;
          
          void main() {
            vUv = uv;
            vPosition = position;
            
            vec3 pos = position;
            
            // Convert mouse to world coordinates
            vec2 mouseWorld = mouse * 15.0;
            
            // Distance from mouse
            float dist = distance(pos.xy, mouseWorld);
            
            // Create ripple effect from mouse position
            float ripple = sin(dist * 2.0 - time * 8.0) * exp(-dist * 0.3);
            ripple += sin(dist * 4.0 - time * 12.0) * 0.5 * exp(-dist * 0.5);
            ripple += sin(dist * 8.0 - time * 16.0) * 0.25 * exp(-dist * 0.8);
            
            // Add mouse velocity influence
            float velocityEffect = length(mouseVelocity) * 2.0;
            ripple *= (1.0 + velocityEffect);
            
            // Layer offset
            ripple *= (1.0 - layer * 0.3);
            
            // Add some base wave motion
            float baseWave = sin(pos.x * 0.5 + time * 2.0) * cos(pos.y * 0.3 + time * 1.5) * 0.2;
            
            pos.z += ripple * 0.8 + baseWave;
            vElevation = pos.z;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec2 mouse;
          uniform vec2 mouseVelocity;
          uniform float layer;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vElevation;
          
          vec3 hsv2rgb(vec3 c) {
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }
          
          void main() {
            // Distance from mouse
            vec2 mouseWorld = mouse * 15.0;
            float distFromMouse = distance(vPosition.xy, mouseWorld);
            
            // Create dynamic hue based on position and time
            float hue = fract(time * 0.1 + distFromMouse * 0.1 + vElevation * 2.0 + layer * 0.2);
            
            // Dynamic saturation and value based on elevation and mouse proximity
            float saturation = 0.8 + vElevation * 0.5;
            float value = 0.6 + abs(vElevation) * 2.0;
            
            // Add mouse velocity color influence
            float velocityInfluence = length(mouseVelocity);
            hue += velocityInfluence * 0.3;
            value += velocityInfluence * 0.5;
            
            // Convert HSV to RGB for rainbow effect
            vec3 color = hsv2rgb(vec3(hue, saturation, value));
            
            // Add some base colors for richness
            color = mix(color, vec3(0.1, 0.8, 1.0), 0.3); // Cyan base
            color = mix(color, vec3(1.0, 0.2, 0.8), sin(time + distFromMouse) * 0.2 + 0.1); // Pink highlights
            color = mix(color, vec3(0.8, 1.0, 0.2), cos(time * 1.5 + vElevation * 5.0) * 0.15 + 0.1); // Yellow accents
            
            // Alpha based on elevation and distance from mouse
            float alpha = (abs(vElevation) * 3.0 + 0.1) * (1.0 - layer * 0.3);
            alpha *= (1.0 - smoothstep(0.0, 8.0, distFromMouse)) * 0.5 + 0.3;
            
            // Enhance alpha with velocity
            alpha += velocityInfluence * 0.3;
            
            // Add some pulsing
            alpha *= sin(time * 4.0 + distFromMouse) * 0.2 + 0.8;
            
            gl_FragColor = vec4(color, alpha * 0.4);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = -2 - i * 0.5;
      mesh.rotation.x = -Math.PI / 2 + (Math.random() - 0.5) * 0.2;
      mesh.rotation.z = (Math.random() - 0.5) * 0.3;
      
      this.scene.add(mesh);
      this.ripplePlanes.push(mesh);
    }
  }

  createFloatingElements() {
    // Add some floating particle elements for extra visual interest
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Rainbow colors
      const hue = Math.random();
      colors[i * 3] = Math.sin(hue * Math.PI * 2) * 0.5 + 0.5;
      colors[i * 3 + 1] = Math.sin((hue + 0.33) * Math.PI * 2) * 0.5 + 0.5;
      colors[i * 3 + 2] = Math.sin((hue + 0.66) * Math.PI * 2) * 0.5 + 0.5;
      
      sizes[i] = Math.random() * 0.02 + 0.005;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2() }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform vec2 mouse;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          
          vec3 pos = position;
          
          // Gentle floating motion
          pos.y += sin(time + position.x * 0.5) * 0.5;
          pos.x += cos(time * 0.7 + position.z * 0.3) * 0.3;
          
          // Mouse attraction
          vec2 mouseWorld = mouse * 15.0;
          vec2 direction = mouseWorld - pos.xy;
          float dist = length(direction);
          if (dist < 5.0) {
            pos.xy += normalize(direction) * (5.0 - dist) * 0.1;
          }
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * 400.0 * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vColor;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= sin(time * 3.0) * 0.3 + 0.7;
          
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(geometry, material);
    this.scene.add(particleSystem);
    this.ripplePlanes.push(particleSystem);
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
    const newMouseTarget = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
    
    // Calculate mouse velocity
    this.mouseVelocity.subVectors(newMouseTarget, this.mouseTarget).multiplyScalar(50);
    this.mouseTarget.copy(newMouseTarget);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.02;

    // Store previous mouse position for velocity calculation
    this.mousePrevious.copy(this.mouse);
    
    // Smooth mouse interpolation
    this.mouse.lerp(this.mouseTarget, 0.05);
    
    // Update mouse velocity with decay
    this.mouseVelocity.multiplyScalar(0.95);

    // Update all ripple planes
    this.ripplePlanes.forEach((plane, index) => {
      if (plane.material.uniforms) {
        plane.material.uniforms.time.value = this.time;
        plane.material.uniforms.mouse.value = this.mouse;
        plane.material.uniforms.mouseVelocity.value = this.mouseVelocity;
        
        // Gentle rotation for ripple planes
        if (plane.material.uniforms.layer !== undefined) {
          plane.rotation.z += 0.001 + index * 0.0002;
        }
      }
      
      // Animate floating particles
      if (plane.isPoints) {
        const positions = plane.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          // Gentle floating motion
          positions[i + 1] += Math.sin(this.time + i * 0.01) * 0.003;
          positions[i] += Math.cos(this.time * 0.7 + i * 0.02) * 0.002;
          
          // Mouse influence
          const mouseWorldX = this.mouse.x * 15;
          const mouseWorldY = this.mouse.y * 15;
          const distToMouse = Math.sqrt(
            Math.pow(positions[i] - mouseWorldX, 2) + 
            Math.pow(positions[i + 1] - mouseWorldY, 2)
          );
          
          if (distToMouse < 3) {
            const force = (3 - distToMouse) * 0.01;
            const dirX = (positions[i] - mouseWorldX) / distToMouse;
            const dirY = (positions[i + 1] - mouseWorldY) / distToMouse;
            positions[i] += dirX * force;
            positions[i + 1] += dirY * force;
          }
        }
        plane.geometry.attributes.position.needsUpdate = true;
      }
    });

    // Gentle camera movement
    const targetX = this.mouse.x * 1;
    const targetY = this.mouse.y * 0.5;
    
    this.camera.position.x += (targetX - this.camera.position.x) * 0.03;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.03;
    this.camera.position.z = 8 + Math.sin(this.time * 0.3) * 0.5;
    
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

class AnimationController {
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
    // Fade in elements on scroll
    gsap.utils.toArray('.fade-in').forEach(element => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 30
        },
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

    // Slide in from left
    gsap.utils.toArray('.slide-in-left').forEach(element => {
      gsap.fromTo(element,
        {
          opacity: 0,
          x: -50
        },
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

    // Slide in from right
    gsap.utils.toArray('.slide-in-right').forEach(element => {
      gsap.fromTo(element,
        {
          opacity: 0,
          x: 50
        },
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

    // Parallax effect for sections
    gsap.utils.toArray('.parallax').forEach(element => {
      gsap.fromTo(element,
        {
          y: -50
        },
        {
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });
  }

  initTextAnimations() {
    // Character-by-character text animation similar to MxnnCreates
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

    // Apply text animation to specific elements
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

    // Close menu when clicking on a link
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

class InteractiveElements {
  constructor() {
    this.initCardHovers();
    this.initSmoothScroll();
    this.initClientSlider();
  }

  initCardHovers() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          gsap.to(window, {
            scrollTo: target,
            duration: 1,
            ease: 'power3.inOut'
          });
        }
      });
    });
  }

  initClientSlider() {
    const slider = document.querySelector('.client-track');
    if (slider) {
      const cloneSlider = slider.cloneNode(true);
      slider.parentNode.appendChild(cloneSlider);
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const webglScene = new WebGL3DScene();
  const animationController = new AnimationController();
  const navigationController = new NavigationController();
  const interactiveElements = new InteractiveElements();

  // Performance optimization
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all animation elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
});

export { WebGL3DScene, AnimationController, NavigationController, InteractiveElements };