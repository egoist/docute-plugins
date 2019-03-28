# docute-mermaid

Using Mermaid in Docute.

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load these after docute.js -->
<script src="https://cdn.jsdelivr.net/npm/mermaid@8.0.0-rc.8/dist/mermaid.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/docute-mermaid@1/dist/index.min.js"></script>
```

This plugin is exposed as `window.docuteMermaid`:

```js
new Docute({
  // ...
  plugins: [
    docuteMermaid()
  ]
})
```

Then you can use code fences to write mermaid code to generate charts:

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

## options

### options.initOpts

Options for `mermaid.init()`.

### options.evaluateOnly

- Type: `boolean`
- Default: `false`

Only convert code to chart only when `evaluate: true`:

````markdown
```mermaid {evaluate: true}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

## License

MIT &copy; [LEPTOSIA](https://leptosia.org)