//eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:astro/recommended, plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
};

module.exports = config;
