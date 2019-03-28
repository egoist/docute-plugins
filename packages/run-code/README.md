# docute-run-code

Run code fences in your markdown.

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load these after docute.js -->
<script src="https://unpkg.com/docute-run-code@1/dist/index.min.js"></script>
```

This plugin is exposed as `window.docuteRunCode`:

```js
new Docute({
  // ...
  plugins: [
    docuteRunCode()
  ]
})
```

Then in code fences, you can use `// @run-code` comment to indicate that it's runnable:

````markdown
Here's a demo for [HTM](https://github.com/developit/htm):

```js
// @run-code
import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.mjs';

class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ page }, { todos = [] }) {
    return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button onClick=${this.addTodo.bind(this)}>Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `;
  }
}
  
const Header = ({ name }) => html`<header><h1>${name} List</h1></header>`

const Footer = props => html`<footer ...${props} />`

render(html`<${App} page="All" />`, document.body);
```
````

### Supported Languages

- js: with `// @run-code` comment
- javascript: with `// @run-code` comment
- html: with `<!-- @run-code -->` comment

## Options

### options.noModules

- Type: `boolean`
- Default: `undefined`

For `js` or `javascript` code fences, the code will be wrapped in `<script type="module">` tag by default, if you're targeting some browsers that do not support [JavaScript modules](https://caniuse.com/#search=module), pass `true` here to disable this feature.

### options.keepCode

- Type: `boolean`
- Default: `false`

Remove original code fences.

### options.sandbox

- Type: `string`
- Default: `'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts'`

The iframe's `sanbox` attribute.

### options.autoResize

- Type: `boolean`
- Default: `true`

Auto-resize iframe when content height changes.

## License

MIT &copy; [LEPTOSIA](https://leptosia.org)