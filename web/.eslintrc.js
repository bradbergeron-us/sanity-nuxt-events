module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "prettier",
    "prettier/vue",
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
