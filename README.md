# StorybookMigration

Contains the following:

**PROJECTS**

- Angular App -> (Should _not_ be migrated)
- React + Webpack App -> (Should be migrated)
- React + Vite App -> (Should be migrated)
- Vue App -> (Should be migrated)
- Remix App -> (Should be migrated)

- Angular Lib -> (Should _not_ be migrated)
- React Lib -> (Should be migrated)
- Vue Lib -> (Should be migrated)

**NOTE**: Some projects contains stories, others do not.

### React + Webpack App (`reactappwebpack`)
For `@nx/storybook:storybook`: `webpackStatsJson` -> `stats-json`
For `@nx/storybook:build`: `configurations.ci.disableTelemetry` -> `configurations.ci.disable-telemetry` 

### React + Vite App (`reactapp`)
The `.storybook/main.ts` file should be updated to have `viteConfigPath` changed to a relative path

### Vue + Vite App (`vueapp`)
The `.storybook/main.ts` file should be updated to have `viteConfigPath` changed to a relative path

### Vue Lib (`vuelib`)
For `@nx/storybook:storybook`: `docsMode` -> `docs`

