import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@monorepo-starter/vue';

/* Core CSS required for Ionic components to work properly */
import '@monorepo-starter/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@monorepo-starter/vue/css/normalize.css';
import '@monorepo-starter/vue/css/structure.css';
import '@monorepo-starter/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@monorepo-starter/vue/css/padding.css';
import '@monorepo-starter/vue/css/float-elements.css';
import '@monorepo-starter/vue/css/text-alignment.css';
import '@monorepo-starter/vue/css/text-transformation.css';
import '@monorepo-starter/vue/css/flex-utils.css';
import '@monorepo-starter/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/**
 * Vue 3 has its own error handling.
 * Throwing errors in promises go through
 * this handler, but Cypress does not
 * pick up on them so tests that are meant
 * to fail will pass. By listening for unhandledrejection
 * we can throw an error outside of Vue that will
 * cause the test to fail as it should.
 * See https://github.com/cypress-io/cypress/issues/5385#issuecomment-547642523
 */
window.addEventListener('unhandledrejection', (err) => {
  throw new Error(err.reason);
});

const app = createApp(App)
  .use(IonicVue, { hardwareBackButton: true })
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
