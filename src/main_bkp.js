import Vue from 'vue'
import App from './App.vue'
import VueGtm from 'vue-gtm';
import store from './store/index.js';
import router from './router'
import variaveis from '@/global/variaveis.js'
import carrinho from '@/global/carrinho.js'
import methods from '@/global/methods.js'
import comunicacao from '@/comunicacao.js'
import {mapState} from 'vuex'

import './plugins/axios.js'
import '@/assets/css/geral.css'
import '@/assets/css/slider-styles.css'
import '@/assets/css/estilos-varejao.css'


Vue.config.productionTip = false

Vue.use(variaveis);
Vue.use(methods);
Vue.use(carrinho);
new Vue({
  store,
  router,
  render: h => h(App),
  computed: {
    ...mapState(['config'])
  },
  watch: {
    config(newVal) {
      //ADICIONA O GTM
      Vue.use(VueGtm, {
        id: newVal.configuracoes.google.ga.gtm,
        enabled: false,
        loadScript: true,
        vueRouter: router
      });
      comunicacao.$emit('configCarregada', newVal);
    }
  },
  created(){
    this.$store.dispatch('getConfig');
    this.$store.dispatch('resizeWindow');
  }
}).$mount('#app')

window.addEventListener('load', () => {
  comunicacao.$emit('siteLoaded');
});
