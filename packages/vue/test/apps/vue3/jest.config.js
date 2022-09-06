module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!ionicons|@stencil/core|@loveless/core|@loveless/vue|@loveless/vue-router)'],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
};
