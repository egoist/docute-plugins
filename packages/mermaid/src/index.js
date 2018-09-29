/* globals mermaid */

export default () => ({
  name: '@mermaid',
  extend(api) {
    api.extendMarkedRenderer(renderer => {
      const origCode = renderer.code
      renderer.code = function(code, lang, escaped, opts) {
        if (lang === 'mermaid') {
          if (typeof mermaid === 'undefined' || !mermaid.render) {
            console.error(`[docute] Cannot find global variable 'mermaid', you might forget to include it: https://mermaidjs.github.io`)
          }
          const ID = `mermaid-${Date.now()}`
          return `<div class="mermaid-result">
              <evaluate-tag tag="style">
                #${ID} {height: auto}
              </evaluate-tag>
            ${mermaid.render(ID, code)}
            </div>`
        }
        return origCode.call(this, code, lang, escaped, opts)
      }
    })
  }
})
