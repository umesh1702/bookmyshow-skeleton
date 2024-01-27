module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.js', // Make sure this matches your config file name
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // Assuming your code is using ES6 modules
  },
  rules: {
    // Custom rules go here
  },
};
