/* globals mermaid */

export default ({ initOpts, evaluateOnly = false } = {}) => ({
  name: '@mermaid',
  extend(api) {
    if (typeof mermaid === 'undefined' || !mermaid.init) {
      console.error(
        `[docute] Cannot find global variable 'mermaid', you might forget to include it: https://mermaidjs.github.io`
      )
      return
    }

    api.extendMarkedRenderer(renderer => {
      const origCode = renderer.code
      renderer.code = function(code, lang, escaped, opts) {
        if (lang === 'mermaid' && (!evaluateOnly || opts.evaluate)) {
          return `<div class="mermaid">${code}</div>`
        }
        return origCode.call(this, code, lang, escaped, opts)
      }
    })

    api.onContentUpdated(() => {
      mermaid.init(initOpts, '.mermaid')
    })
  }
})
