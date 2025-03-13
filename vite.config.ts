import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
   
    outDir: '../dist',
    lib: {
      entry: "src/index.ts",
      name: "MyReactLibrary",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
