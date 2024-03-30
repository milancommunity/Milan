import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import path from "path"

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  const VITE_PORT = env.PORT || 3000;
  const VITE_EXPOSE_NETWORK = env.EXPOSE_NETWORK === "true";

  const HOST_NAME  = VITE_EXPOSE_NETWORK ? true :  env.HOST_NAME || 'localhost';

  return {
    plugins: [
      svgr(),
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "robots.txt"],
        injectRegister: "auto",
        manifest: {
          short_name: "Milan",
          name: "Milan",
          start_url: "./",
          display: "standalone",
          theme_color: "#000000",
          background_color: "#ffffff",
          icons: [
            {
              src: "assets/icons/icon-48x48.png",
              sizes: "48x48",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
              purpose: "maskable any",
            },
            {
              src: "assets/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable any",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,

          runtimeCaching: [
            {
              // Caches Google Fonts with a Cache First strategy.
              urlPattern: new RegExp(
                "^https://fonts.(?:googleapis|gstatic).com/(.*)",
              ),
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts",
                expiration: {
                  maxEntries: 30,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              // Caches images with a Cache First strategy.
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 60,
                },
              },
            },
            {
              urlPattern: new RegExp("^https://api.milanhub.org/(.*)"),
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "api",
                expiration: {
                  maxAgeSeconds: 86400,
                },
                cacheableResponse: {
                  statuses: [0, 200, 201],
                },
              },
            },
            {
              urlPattern: new RegExp("^http://localhost:5000/(.*)"),
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "api-dev",
                expiration: {
                  maxAgeSeconds: 86400,
                },
                cacheableResponse: {
                  statuses: [0, 200, 201],
                },
              },
            },
          ],
        },
      }),
    ],
    server: {
      host: HOST_NAME,
      strictPort: true,
      port: VITE_PORT,
    },
    watch: {
      usePolling: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    }
  }
});
