/* globals mermaid */

export default ({ initOpts, code = true } = {}) => ({
  name: '@mermaid',
  extend(api) {
    if (typeof mermaid === 'undefined' || !mermaid.init) {
      console.error(
        `[docute] Cannot find global variable 'mermaid', you might forget to include it: https://mermaidjs.github.io`
      )
      return
    }

    if (code) {
      api.extendMarkedRenderer(renderer => {
        const origCode = renderer.code
        renderer.code = function(code, lang, escaped, opts) {
          if (lang === 'mermaid') {
            return `<div class="mermaid">${code}</div>`
          }
          return origCode.call(this, code, lang, escaped, opts)
        }
      })
    }

    api.onContentUpdated(() => {
      mermaid.init(initOpts, '.mermaid')
    })
  }
})
