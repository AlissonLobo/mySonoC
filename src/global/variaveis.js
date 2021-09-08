const globalVars = {
  /* eslint-disable */
  install(Vue) {
    Vue.prototype.$siteUrl    = 'https://www.sonocaps.com.br/',
    Vue.prototype.$requestUrl = 'https://www.sonocaps.com.br/api',
    Vue.prototype.$screen     = {
      width: window.screen.width,
      height: window.screen.height,
    },
    Vue.prototype.$imgDefaultB = 'assets/img/geral/prods-default/b_default.jpg',
    Vue.prototype.$imgDefaultM = 'assets/img/geral/prods-default/m_default.jpg',
    Vue.prototype.$imgDefaultS = 'assets/img/geral/prods-default/s_default.jpg',
    Vue.prototype.$imgDefault  = 'assets/img/geral/prods-default/default.jpg',
    Vue.prototype.$masks       = {
      tel: '(xx) xxxxx-xxxx',
      cep: 'xxxxx-xxx'
    }
  }
}

export default globalVars;
