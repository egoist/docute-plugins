# Docute Plugins

## Official Docute Plugins

- [@leptosia/docute-mermaid](./packages/mermaid)
- [@leptosia/docute-google-analytics](./packages/google-analytics)
- [@leptosia/docute-katex](./packages/katex)
- [@leptosia/docute-run-code](./packages/run-code)

## Community Plugins

- PR to add here..

## Add an Official Plugin

1. Create a folder inside `./packages`
2. Create a `package.json` with following contents:

```json
{
  "name": "@leptosia/docute-foo",
  "version": "0.0.0",
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "bili",
    "prepublishOnly": "npm run build"
  },
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "license": "MIT",
  "devDependencies": {
    "bili": "^3.1.2"
  },
  "bili": {
    "filename": "index.js",
    "name": "docuteFoo",
    "format": ["umd", "umd-min"]
  }
}
```
3. Create `src/index.js`