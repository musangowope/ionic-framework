import { angularOutputTarget } from '@stencil/angular-output-target';
import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

// @ts-ignore
import { apiSpecGenerator } from './scripts/api-spec-generator';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'Ionic',
  plugins: [
    sass({
      injectGlobalPaths: ['src/themes/ionic.skip-warns.scss']
    })
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ionic/core',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: '../packages/react/src/components/proxies.ts',
      excludeComponents: [
        // Routing
        'ion-router',
        'ion-route',
        'ion-route-redirect',
        'ion-router-link',
        'ion-router-outlet',
        'ion-back-button',
        'ion-breadcrumb',
        'ion-tab-button',
        'ion-tabs',
        'ion-tab-bar',
        'ion-button',
        'ion-card',
        'ion-fab-button',
        'ion-item',
        'ion-item-option',

        // Overlays
        'ion-action-sheet',
        'ion-alert',
        'ion-loading',
        'ion-modal',
        'ion-picker',
        'ion-popover',
        'ion-toast',

        'ion-app',
        'ion-icon'
      ]
    }),
    vueOutputTarget({
      componentCorePackage: '@ionic/core',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: '../packages/vue/src/proxies.ts',
      excludeComponents: [
        // Routing
        'ion-router',
        'ion-route',
        'ion-route-redirect',
        'ion-router-link',
        'ion-router-outlet',
        'ion-back-button',
        'ion-tab-button',
        'ion-tabs',
        'ion-tab',
        'ion-tab-bar',

        // Overlays
        'ion-action-sheet',
        'ion-alert',
        'ion-loading',
        'ion-modal',
        'ion-picker',
        'ion-popover',
        'ion-toast',

        'ion-app',
        'ion-icon'
      ],
      componentModels: [
        {
          elements: ['ion-checkbox', 'ion-toggle'],
          targetAttr: 'checked',
          event: 'v-ion-change',
          externalEvent: 'ionChange'
        },
        {
          elements: ['ion-datetime', 'ion-input', 'ion-radio-group', 'ion-radio', 'ion-range', 'ion-searchbar', 'ion-segment', 'ion-segment-button', 'ion-select', 'ion-textarea', 'ion-accordion-group'],
          targetAttr: 'value',
          event: 'v-ion-change',
          externalEvent: 'ionChange'
        }
      ],
    }),
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/ionic-team/ionic/tree/main/core/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    apiSpecGenerator({
      file: 'api.txt'
    }) as any
    // {
    //   type: 'stats',
    //   file: 'stats.json'
    // },
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true
  },
  testing: {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec)|[//](e2e))\\.[jt]sx?$',
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    moduleNameMapper: {
      "@utils/test": ["<rootDir>/src/utils/test/utils"],
      "@utils/logging": ["<rootDir>/src/utils/logging"],

    },
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      }
    ]
  },
  preamble: '(C) Ionic http://ionicframework.com - MIT License',
  enableCache: true,
};
