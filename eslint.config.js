import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      ecmaVersion: "latest",
      sourceType: "script",
    },
  },
  {
    ignores: ["src/output.css", "eslint.config.js", "tailwind.config.js"],
  },
];
