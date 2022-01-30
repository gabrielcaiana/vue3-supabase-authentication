module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/require-default-prop": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
