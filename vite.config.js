import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-frames-dir',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/Use_the_uploaded_image_as_the_frames/') || req.url.startsWith('/frames/'))) {
            const filename = req.url
              .replace('/Use_the_uploaded_image_as_the_frames/', '')
              .replace('/frames/', '')
              .split('?')[0];
            const filePath = path.resolve(__dirname, 'public', 'Use_the_uploaded_image_as_the_frames', filename);
            const fallbackPath = path.resolve(__dirname, 'Use_the_uploaded_image_as_the_frames', filename);
            const resolved = fs.existsSync(filePath) ? filePath : (fs.existsSync(fallbackPath) ? fallbackPath : null);
            if (resolved) {
              res.setHeader('Content-Type', 'image/png');
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
              return fs.createReadStream(resolved).pipe(res);
            }
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/Use_the_uploaded_image_as_the_frames/') || req.url.startsWith('/frames/'))) {
            const filename = req.url
              .replace('/Use_the_uploaded_image_as_the_frames/', '')
              .replace('/frames/', '')
              .split('?')[0];
            const filePath = path.resolve(__dirname, 'public', 'Use_the_uploaded_image_as_the_frames', filename);
            const fallbackPath = path.resolve(__dirname, 'Use_the_uploaded_image_as_the_frames', filename);
            const resolved = fs.existsSync(filePath) ? filePath : (fs.existsSync(fallbackPath) ? fallbackPath : null);
            if (resolved) {
              res.setHeader('Content-Type', 'image/png');
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
              return fs.createReadStream(resolved).pipe(res);
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    open: false
  }
});
