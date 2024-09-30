import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // @import "./src/styles/_animations.scss";
          // @import "./src/styles/_variables.scss";
          // @import "./src/styles/_mixins.scss";
          // @import "./src/styles/_helpers.scss";
          @import "./src/styles/mdc.scss";
        `
      }
    }
  },
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.html': 'text',
        // '.scss': 'text',
      },
    },
  },
  plugins: [
    aurelia({
      useDev: true,
    }),
    nodePolyfills(),
  ],
});
