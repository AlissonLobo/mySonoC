const globalMethods = {
  install(Vue) {
    // REALIZA REQUISIÇÕES HTTP
    Vue.prototype.$requestSend = function(method,resource,data = {},callback = function(){}, externalAPI = false){
      //Header app token
      var headers = {
        'App-Token': 'wapstore',
        'Session': this.$getCookie('PHPSESSID')
      }

      //Executa a requisição
      this.$http.request({method: method.toLowerCase(),
        url: externalAPI ? resource : this.$requestUrl+resource,
        data: data,
        headers: externalAPI ? {} : headers
      })
      .then(response => {
        return callback(true,response);
      })
      .catch(response => {
        return callback(false,response);
      });
    }

    // PEGA COOKIES
    Vue.prototype.$getCookie = function(name){
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      return (parts.length == 2) ? parts.pop().split(";").shift() : '';
    }

    // FORMATA VALORES PARA BRL(REAL)
    Vue.prototype.$formatPrice = function (value) {
      value = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

      return value
    }

    //FORMATA A DATA EM FORMATO BRASILEIRO
    Vue.prototype.$formatDate = function (value) {
      return (new Date(value)).toLocaleString('pt-br').split(' ')[0];
    }

    //FORMATA A DATA E HORA EM FORMATO BRASILEIRO
    Vue.prototype.$formatDateTime = function (value) {
      return (new Date(value)).toLocaleString('pt-br');
    }

    // GERA STRING DE CONDIÇÕES DE PARCELAMENTO, USADO NAS VITRINES E DETALHE DO PRODUTO
    Vue.prototype.$stringParcelamentoProds = function (dataParcelas) {
      let i = 1;
      let ultimoSemJuros = dataParcelas[dataParcelas.length - i];

      while (ultimoSemJuros.taxa != 0 && dataParcelas.length != i) {
        i++;
        ultimoSemJuros = dataParcelas[dataParcelas.length - i]
      }

      if (ultimoSemJuros.taxa > 0) {
        ultimoSemJuros = dataParcelas[dataParcelas.length - 1];
        const stringFinal = `${ ultimoSemJuros.parcelas }x de <b>${ this.$formatPrice(ultimoSemJuros.valorParcela) }</b>`;
        return stringFinal;
      }


      const stringFinal = `${ ultimoSemJuros.parcelas }x sem juros de <b>${ this.$formatPrice(ultimoSemJuros.valorParcela) }</b>`;
      return stringFinal;

    }

    // APLICA LINKS E META TAGS NO HEAD DO SITE
    Vue.prototype.$aplicaSEO = function (itens) {
      document.querySelector('title').innerText = itens.seo.title;
      document.querySelector('meta[name="description"]').setAttribute('content', itens.seo.description);
      document.querySelector('meta[name="keywords"]').setAttribute('content', itens.seo.keywords);
      document.querySelector('link[rel="canonical"]').setAttribute('href', itens.seo.canonical);
      if (!itens.seo.indexar) {
        const noIndex = document.createElement('meta');
        noIndex.setAttribute('name', 'robots');
        noIndex.setAttribute('content', 'noindex, nofollow');
        document.querySelector('head').appendChild(noIndex)
      }
    }

    // MÁSCARAS PARA INPUT
    Vue.prototype.$mask = function (text, molde) {
      if (!molde) {
        console.error('Tipo de máscara não especificado');
        return;
      }
      if (event.keyCode != 8 && text != '') {
        text = text.split('');
        let model = this.$masks[molde];
        model.split('').forEach((item, index) => {
          if (item != 'x' && text[index] && text[index] != item) {
            text[index] = text[index].replace(text[index], item+text[index]);
          }
        });

        text = text.join('');

        event.target.value = text;
      }
    }

    // ABRE ELEMENTOS COM ANIMAÇÃO SLIDE
    Vue.prototype.$slideToggle = function (el, config) {

      config = {
        speed: config && config.speed ? config.speed : 300,
        height: config && config.height ? config.height : 0
      }

      if (el.classList.contains('slideToggle-open')) {
        el.classList.remove('slideToggle-open')
        el.style.transition = config.speed+'ms'
        el.style.maxHeight  = config.height+'px';
        setTimeout(function () {
          el.style.transition = '';
          el.style.display    = config.height == 0 ? 'none' : '';
        }, config.speed+10);
        return;
      }
      let closeHeight = el.offsetHeight,
          openHeight,
          elAberto = el.closest('.duvidasContainer').querySelector('.slideToggle-open');

      if (elAberto) {
        elAberto.classList.remove('slideToggle-open')
        elAberto.style.transition = config.speed+'ms'
        elAberto.style.maxHeight  = config.height+'px';
        setTimeout(function () {
          elAberto.style.transition = '';
          elAberto.style.display    = config.height == 0 ? 'none' : '';
        }, config.speed+10);
      }

      el.style.maxHeight = closeHeight+'px';
      el.style.display = getComputedStyle(el).display == 'none' ? 'block' : '';

      setTimeout(() => {

        el.classList.add('slideToggle-open');
        el.style.maxHeight = '';
        openHeight = el.offsetHeight;
        el.style.maxHeight = closeHeight+'px';

        setTimeout(function () {
          el.style.transition = config.speed+'ms';
          el.style.maxHeight = openHeight+'px';
          setTimeout(function () {
            el.style.transition = '';
          }, config.speed+10);
        }, 10);
      }, 10);
    }

    Vue.prototype.$alertaEbit = function () {
      alert("Cópia proibida! A certificação e-bit é de uso exclusivo de lojas conveniadas à e-bit.");
    }

  }
}

export default globalMethods;
