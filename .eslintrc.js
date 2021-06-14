module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['cypress', 'prettier'],
  // add your custom rules here
  rules: {},
}
