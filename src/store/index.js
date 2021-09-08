import Vue from 'vue'
import Vuex from 'vuex'

import famosos from './modules/famosos.js'
import duvidas from './modules/faq.js'
import depoimentos from './modules/depoimentos.js'
import head from './modules/head.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    screenWidth: window.screen.width,
    menuLoaded: false,
    menuData: null,
    dadosUser: null,
    screenDevice: {
      anterior: null,
      atual: null
    }
  },
  getters: {
    tipoImg() {
      if (navigator.userAgent.toLowerCase().indexOf('mac') != -1) {
        return {
          banner: 'imagemOriginal',
          produto: 'arquivosOriginais'
        };
      }
      return {
        banner: 'imagem',
        produto: 'arquivos'
      };
    }
  },
  mutations: {
    changeConfig(state, payload) {
      state.config = payload;
    },
    changeScreenWidth(state, payload) {
      state.screenWidth = payload
    },
    changeScreenDevice(state) {
      state.screenDevice.anterior = state.screenDevice.atual;
      if (screen.width > 1023) {
        state.screenDevice.atual = 'desktop';
      }
      else if (screen.width > 767 && screen.width <= 1023) {
        state.screenDevice.atual = 'tablet';
      }
      else {
        state.screenDevice.atual = 'mobile';
      }
    },
    changeStatusMenu(state, payload) {
      state.menuLoaded = payload;
    },
    changeMainMenuData(state, payload) {
      state.menuData = payload;
    },
    changeDadosUser(state, payload) {
      state.dadosUser = payload;
    }
  },
  actions: {
    getConfig(context) {
      this._vm.$requestSend('get', '/v2/front/settings', {}, (success, response) => {
        if (success) {
          context.commit('changeConfig', response.data);
        }
      });
    },
    resizeWindow(store) {
      let timeout;
      store.commit('changeScreenDevice');

      window.addEventListener('resize', function () {
        store.commit('changeScreenWidth', window.screen.width);
        store.commit('changeScreenDevice');
        if (store.state.screenDevice.atual != store.state.screenDevice.anterior) {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            store.commit('changeStatusMenu', false);
            store.dispatch('getMainMenu');
          }, 500);
        }
      });
    },
    getMainMenu(store) {
      this._vm.$requestSend(
        "get",
        `/v2/front/struct/menus/${store.state.screenWidth > 1023 ? 'menu-principal' : 'menu-mobile'}`,
        {},
        (success, response) => {
          if (success) {
            store.commit('changeStatusMenu', success);
            store.commit('changeMainMenuData', response.data);
          }
        }
      );
    },
    getDadosUser(store){
      this._vm.$requestSend(
        "get",
        "/v2/front/checkout/user",
        {},
        (success, response) => {
          store.commit('changeDadosUser', response.data);
        }
      );
    }
  },
  modules: {
    famosos,
    duvidas,
    depoimentos,
    head
  }
});
