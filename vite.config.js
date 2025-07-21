import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        services: './services.html',
        blog: './blog.html',
        contact: './contact.html',
        careers: './careers.html'
      }
    }
  }
});