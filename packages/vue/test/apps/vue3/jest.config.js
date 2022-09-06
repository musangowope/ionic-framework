module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!ionicons|@stencil/core|@monorepo-starter/core|@monorepo-starter/vue|@monorepo-starter/vue-router)'],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
};
