# docute-katex

Using [Katex](https://katex.org/) (The fastest math typesetting library for the web) in Docute.

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load the CSS in <head> -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.min.css">

<!-- Load the scripts after docute.js -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/docute-katex@1/dist/index.min.js"></script>
```

This plugin is exposed as `window.docuteKatex`:

```js
new Docute({
  // ...
  plugins: [
    docuteKatex()
  ]
})
```

Then you can use Vue components to write Tex expressions:

````vue
<InlineMath>c = \\pm\\sqrt{a^2 + b^2}</InlineMath>
<!-- or -->
<InlineMath math="c = \\pm\\sqrt{a^2 + b^2}"></InlineMath>

<BlockMath>c = \\pm\\sqrt{a^2 + b^2}</BlockMath>
<!-- or -->
<BlockMath math="c = \\pm\\sqrt{a^2 + b^2}"></BlockMath>
````

`<InlineMath>` wraps the generated HTML with `<span>` tag while `<BlockMath>` uses `<div>` tag.

Optionally you can transform code fences too:

````markdown
```katex {evaluate: true}
c = \\pm\\sqrt{a^2 + b^2}
```
````

Then it will be transformed to `<BlockMath>` component.

## License

MIT &copy; [LEPTOSIA](https://leptosia.org)