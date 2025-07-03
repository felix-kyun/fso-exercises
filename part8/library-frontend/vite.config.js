import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginGraphqlLoader from "vite-plugin-graphql-loader";

export default defineConfig({
  plugins: [react(), vitePluginGraphqlLoader()],
});
