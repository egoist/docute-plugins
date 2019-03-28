# Docute Plugins

## Official Docute Plugins

- [docute-mermaid](./packages/mermaid)
- [docute-google-analytics](./packages/google-analytics)
- [docute-katex](./packages/katex)
- [docute-run-code](./packages/run-code)

## Community Plugins

- PR to add here..

## Add an Official Plugin

1. Create a folder inside `./packages`
2. Create a `package.json` with following contents:

```json
{
  "name": "docute-foo",
  "version": "0.0.0",
  "scripts": {
    "build": "bili",
    "prepublishOnly": "yarn build"
  },
  "main": "dist/index.min.js",
  "files": [
    "dist"
  ],
  "license": "MIT",
  "devDependencies": {
    "bili": "^4.7.2"
  }
}
```
3. Create a `bili.config.ts` with following contents:

```ts
import {Config} from 'bili'

const config: Config = {
  output: {
    fileName: 'index[min].js',
    format: ['umd', 'umd-min'],
    moduleName: '{{ replace this with moduleName }}'
  }
}

export default config
```
4. Create `src/index.js`