import ga from 'vue-ga'

export default id => ({
  name: '@google-analytics',
  extend(api) {
    ga(api.router, id)
  }
})