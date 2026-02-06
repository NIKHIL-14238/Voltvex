import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // Allows external access
    allowedHosts: ['.ngrok-free.app'], // Allows all ngrok subdomains
    port: 5173, // Ensure this matches your dev server port
  },
});

