const Carrinho = {

  install(Vue) {

    //OBJETO CARRINHO
    Vue.prototype.$carrinho = {};

    //REDIRECIONA O USUÁRIO PARA O CARRINHO
    Vue.prototype.$carrinho.redirect = function(){
      return window.location.href = Vue.prototype.$siteUrl+'checkout/carrinho';
    }

    Vue.prototype.$carrinho.add = function(tipo,itens,callback = function(){}){
      Vue.prototype.$requestSend('post', '/v2/front/checkout/cart', {
        tipo: tipo,
        itens: itens
      }, callback);
    }

    //ATUALIZAR O PRODUTO NO CARRINHO
    Vue.prototype.$carrinho.update = function(item,callback = function(){}){
      Vue.prototype.$requestSend('put', '/v2/front/checkout/cart', item, callback);
    }

    //REMOVE O PRODUTO DO CARRINHO
    Vue.prototype.$carrinho.remove = function(item,callback = function(){}){
      Vue.prototype.$requestSend('delete', '/v2/front/checkout/cart', item, callback);
    }

    //OBTÉM O CARRINHO
    Vue.prototype.$carrinho.get = function(callback = function(){}){
      Vue.prototype.$requestSend('get', '/v2/front/checkout/cart', {}, callback);
    }

  }
}

export default Carrinho;
