# docute-google-analytics

Using Google Analytics in Docute.

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load these after docute.js -->
<script src="https://unpkg.com/docute-google-analytics@1/dist/index.min.js"></script>
```

This plugin is exposed as `window.docuteGoogleAnalytics`:

```js
new Docute({
  // ...
  plugins: [
    // Your track ID
    docuteGoogleAnalytics('X-00000-000')
  ]
})
```

## License

MIT &copy; [LEPTOSIA](https://leptosia.org)