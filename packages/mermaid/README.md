# @leptosia/docute-mermaid

Using Mermaid in Docute.

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load these after docute.js -->
<script src="https://cdn.jsdelivr.net/npm/mermaid@8.0.0-rc.8/dist/mermaid.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@leptosia/docute-mermaid@1/dist/index.min.js"></script>
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

## License

MIT &copy; [LEPTOSIA](https://leptosia.org)