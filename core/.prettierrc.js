module.exports = {
  ...require('@loveless/prettier-config'),
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
