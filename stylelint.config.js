module.exports = {
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: 'postcss-js',
    },
  ],
  rules: {
    'color-hex-case': 'upper', // força uso de #FFF
  },
};
