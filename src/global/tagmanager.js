const TagManager = {

  install(Vue) {
    // Ex: $gtmBannerEvent(nome)
    // ACIONA EVENTO GOOGLE TAG MANAGER EM BANNER
    Vue.prototype.$gtmBannerEvent = function (nome, data, destino) {

      let dataRecebida = data.slice(0, 10);
      let nomeFormatado = dataRecebida + '-' + nome.toLowerCase().replace(" ", "-");

      window.dataLayer.push({
        event: 'promotionClick',
        ecommerce: {
          promoClick: {
            promotions: [{
              name: 'Banners',
              creative: nomeFormatado,
              position: 0
            }]
          }
        }
      });

      destino != undefined ? window.location.href = destino : destino = null
    }

    // Ex: $gtmVitrineDataLayer(titulo,produtos)
    // OBTÉM O ATRIBUTO ÚNICO DO PRODUTO
    Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto =  function (produto){
      //VERIFICA A EXISTÊNCIA DE ATRIBUTOS
      if(!produto.atributos || !produto.atributos.unico) return "Único";

      //VERIFICA O ATRIBUTO ÚNICO SELECIONADO
      let atributoUnico = produto.atributos.unico.valores.find(function(item){
        return item.selecionado;
      });

      //RETORNA O VALOR SELECIONADO
      return atributoUnico ? atributoUnico.label.trim() : produto.atributos.unico.valores[0].label.trim();
    }

    // Ex: $gtmVitrineDataLayer(titulo,produtos)
    // ADICIONA DATALAYERS DE VITRINES
    Vue.prototype.$gtmVitrineDataLayer = function (titulo, produtos) {
      //IMPRESSÕES
      let impressions = [];

      //VALIDAÇÃO TO TÍTULO
      titulo = titulo ?? "Vitrine";

      //ITERA OS PRODUTOS
      produtos.map(function(value){

        //ATRIBUTO ÚNICO DO PRODUTO
        let atributoUnico = Vue.prototype.$gtmDataLayerGetAtributoUnicoProduto(value);

        //IMPRESSION FIELD OBJECT
        impressions.push({
                        id: value.id,
                        name: value.nome.trim(),
                        list: titulo.trim(),
                        list_name: titulo.trim(),
                        brand: value.marca.nome.trim(),
                        variant: atributoUnico,
                        position: (impressions.length + 1),
                        list_position: (impressions.length + 1),
                        price: value.precos.por
                      });
      });

      //DATALAYER PUSH
      window.dataLayer.push({
        ecommerce:{
          currencyCode: "BRL",
          impressions: impressions
        }
      });
    }
  }
}

export default TagManager;





// SE NÃO RECEBER PARAMETRO DE DATA, ACIONA A DATA ATUAL
// let dataAtual = new Date().toLocaleString("en-CA", {timeZone: "America/Fortaleza"}).slice(0,10);
// let dataRecebida = data ? data : dataAtual;
