import ResizeObserver from 'resize-observer-polyfill'

const random = () =>
  Math.random()
    .toString(36)
    .substring(7)

const hasComment = (code, lang) => {
  if (lang === 'js' || lang === 'javascript') {
    return /^\/\/\s*@run-code\s*$/m.test(code)
  }
  if (lang === 'html') {
    return /^<!--\s*@run-code\s*-->$/m.test(code)
  }
  return false
}

export default globalOpts => ({
  name: 'run-code',
  extend(api) {
    const stack = []
    api.extendMarkedRenderer(renderer => {
      const origCode = renderer.code
      renderer.code = function(code, lang, escaped, codeOpts) {
        const opts = Object.assign({
          sandbox: 'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts',
          noModule: false,
          // updateCode,
          autoResize: true,
          keepCode: false
        }, globalOpts, codeOpts)

        if (hasComment(code, lang) || opts.runCode) {
          if (lang === 'js' || lang === 'javascript' || lang === 'html') {
            const id = `code-${random()}`
            stack.push({
              id,
              code,
              lang,
              opts
            })
            const codeFence = opts.keepCode ? origCode.call(this, code, lang, escaped, codeOpts) : ''
            return codeFence + `<div id="${id}"></div>`
          }
        }
        return origCode.call(this, code, lang, escaped, codeOpts)
      }
    })

    api.onContentUpdated(() => {
      while (stack.length) {
        const node = stack.shift()
        const holder = document.getElementById(node.id)
        if (!holder) continue

        const iframe = document.createElement('iframe')
        iframe.src = 'about:self'
        iframe.className = 'code-iframe'
        iframe.frameBorder = 0
        iframe.width = '100%'
        iframe.sandbox = node.opts.sandbox
        iframe.style = `
        border: 1px solid var(--border-color);
        `

        holder.parentNode.replaceChild(iframe, holder)

        const doc = iframe.contentWindow.document

        let code = node.code
        if (node.lang === 'js' || node.lang === 'javascript') {
          code = `<div id="app"></div><script${node.opts.noModule ? '' : ' type="module"'}>${code}</script>`
        }

        if (node.opts.autoResize) {
          code += `<script>
          document.addEventListener('DOMContentLoaded', () => {
            new ResizeObserver((entries, observer) => {
              window.__iframeElement.height = document.body.scrollHeight + 'px'
            }).observe(document.body)
          })
          </script>`
        }
        
        if (node.opts.updateCode) {
          code = node.opts.updateCode(code, node.lang)
        }

        iframe.contentWindow.ResizeObserver = ResizeObserver
        // TODO: google how to do this in standard way
        iframe.contentWindow.__iframeElement = iframe

        doc.open().write(code)
        doc.close()
      }
    })
  }
})
