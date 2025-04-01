import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
    },
  },
]);
