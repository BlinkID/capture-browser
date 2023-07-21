const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,

  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "module",
  },

  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/consistent-type-definitions": 0,
      },
    },
    {
      files: ["*.{js,mjs,cjs}"],
    },
  ],
});
