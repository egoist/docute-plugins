const getCode = ctx => {
  return ctx.props.math || ctx.children.map(v => v.text).join('')
}

export default () => ({
  name: '@katex',
  extend(api) {
    const props = {
      math: {
        type: String
      }
    }

    Vue.component('BlockMath', {
      functional: true,
      name: 'BlockMath',
      props,
      render(h, ctx) {
        return h('div', {
          ...ctx.data,
          class: ['BlockMath', ctx.data.class],
          domProps: {
            ...ctx.data.domProps,
            innerHTML: katex.renderToString(getCode(ctx))
          }
        })
      }
    })

    Vue.component('InlineMath', {
      functional: true,
      name: 'InlineMath',
      props,
      render(h, ctx) {
        return h('span', {
          ...ctx.data,
          class: ['InlineMath', ctx.data.class],
          domProps: {
            ...ctx.data.domProps,
            innerHTML: katex.renderToString(getCode(ctx))
          }
        })
      }
    })

    api.extendMarkedRenderer(renderer => {
      const origCode = renderer.code
      renderer.code = function(code, lang, escaped, opts) {
        if (lang === 'katex' && opts.evaluate) {
          return `<BlockMath>${code}</BlockMath>`
        }
        return origCode.call(this, code, lang, escaped, opts)
      }
    })
  }
})
