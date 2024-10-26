import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-irregular-whitespace": "error"
    },
  },
  {
    ignores: ["**/__tests__/"]
  }
];