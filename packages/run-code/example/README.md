<div id="example-app"></div>

```js {keepCode:true}
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
      <h1>asdad</h1>
      <h1>asdad</h1>
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

---

hmmm...