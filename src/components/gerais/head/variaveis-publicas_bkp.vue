<template lang="html">
  <div class="row" style="none"></div>
</template>

<script>
import comunicacao from '@/comunicacao.js'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      usuario: false,
      carrinho: false,
      pagina: false,
      success: false,
      responsePagina: false,
      wapstore:{
        pagina: {},
        usuario: {},
        categoria: {},
        categoriaSecundaria: {},
        marca: {},
        busca: {},
        listagem: {},
        carrinho: {},
        produto: {},
        pedido: {}
      }
    }
  },
  computed: {
    ...mapState(['config', 'dadosUser'])
  },
  watch: {
    success: function(success) {
      if (success) this.print();
    },
    config(newVal) {
      if (newVal != null) {
        // IMPRIME AS META TAGS DO GOOGLE SITE VERIFICATION
        this.googleSiteVerification();
      }
    },
    dadosUser(newVal) {
      this.setUsuario(newVal);
    }
  },
  methods: {
    googleSiteVerification() {
      let el,
          head = document.querySelector('head');
      this.config.configuracoes.google.tag.verification.forEach(hash => {
        el = document.createElement('meta');
        el.setAttribute('name', 'google-site-verification');
        el.setAttribute('content', hash);
        head.appendChild(el);
      });
    },
    print(){
      //IN BROWSER
      if(typeof window !== 'undefined'){
        //DEFINE O VALOR DE WAPSTORE
        window.WapStore = this.wapstore;

        //EVENTO DE VARIÁVEIS PÚBLICAS CARREGADAS
        comunicacao.$emit('variaveisPublicasCarregadas', this.responsePagina);
      }
    },
    setUsuario(responseUsuario){
      //DADOS PÚBLICOS
      this.wapstore.usuario = {
        "id": parseInt(responseUsuario.id),
        "nome": responseUsuario.nomeRazao,
        "email": responseUsuario.email,
        "logado": responseUsuario.logado
      }

      //CONTROLE
      this.usuario = true;
      this.success = this.usuario && this.carrinho && this.pagina;
    },
    setCarrinho(responseCarrinho){
      //PRODUTOS
      this.wapstore.carrinho.produtos = [];
      this.wapstore.carrinho.quantidade = parseInt(responseCarrinho.quantidadeItens);
      this.wapstore.carrinho.frete = [];

      //TOTAIS
      this.wapstore.carrinho.valores = {};
      this.wapstore.carrinho.valores.subtotal  = 0.00;
      this.wapstore.carrinho.valores.frete     = 0.00;
      this.wapstore.carrinho.valores.embalagem = 0.00;
      this.wapstore.carrinho.valores.total     = 0.00;

      //CONTROLE
      this.carrinho = true;
      this.success  = this.usuario && this.carrinho && this.pagina;
    },
    setPagina(responsePagina){
      //TITULO DA PÁGINA
      this.responsePagina = responsePagina;

      //DETALHES DAS VARIÁVEIS
      switch (responsePagina.estrutura.nivel) {
        case 'home':
          return this.setPaginaHome();

        case '404':
          return this.setPagina404();

        case 'product/listing/category':
        case 'product/listing/brand':
        case 'product/listing/landing-page':
        case 'product/listing/search':
          return this.setPaginaListagem(responsePagina);

        // case 'product/detail':
        //   return this.setPaginaDetalheProduto(responsePagina);
      }
    },
    setPaginaHome(){
      //DADOS DA HOME
      this.wapstore.pagina.nome      = "home";
      this.wapstore.pagina.secao     = "home";
      this.wapstore.pagina.subsecao  = "home";
      this.wapstore.pagina.total     = 1;
      this.wapstore.pagina.atual     = 1;

      //RESET
      this.wapstore.categoria           = {};
      this.wapstore.categoriaSecundaria = {};
      this.wapstore.marca               = {};
      this.wapstore.busca               = {};
      this.wapstore.listagem            = {};
      this.wapstore.produto             = {};
      this.wapstore.pedido              = {};

      //CONTROLE
      this.pagina  = true;
      this.success = this.usuario && this.carrinho && this.pagina;
    },
    setPagina404(){
      //DADOS DA PAGINA NÃO ENCONTRADA
      this.wapstore.pagina.nome      = "Página não encontrada";
      this.wapstore.pagina.secao     = "404";
      this.wapstore.pagina.subsecao  = "404";
      this.wapstore.pagina.total     = 1;
      this.wapstore.pagina.atual     = 1;

      //RESET
      this.wapstore.categoria           = {};
      this.wapstore.categoriaSecundaria = {};
      this.wapstore.marca               = {};
      this.wapstore.busca               = {};
      this.wapstore.listagem            = {};
      this.wapstore.produto             = {};
      this.wapstore.pedido              = {};

      //CONTROLE
      this.pagina  = true;
      this.success = this.usuario && this.carrinho && this.pagina;

    },
    setPaginaListagem(responseListagem){
      //RESET
      this.wapstore.categoria           = {};
      this.wapstore.categoriaSecundaria = {};
      this.wapstore.marca               = {};
      this.wapstore.busca               = {};
      this.wapstore.listagem            = {};
      this.wapstore.produto             = {};
      this.wapstore.pedido              = {};


      //DADOS DAS LISTAGENS
      switch (responseListagem.estrutura.nivel) {
        case 'product/listing/category':
          //PAGINA
          this.wapstore.pagina.nome      = responseListagem.conteudo.categoria.nome;
          this.wapstore.pagina.secao     = "listagem-produtos";
          this.wapstore.pagina.subsecao  = "categoria";

          //CATEGORIA
          this.wapstore.categoria.id   = responseListagem.conteudo.categoria.id;
          this.wapstore.categoria.nome = responseListagem.conteudo.categoria.nome;
          this.wapstore.categoria.url  = responseListagem.estrutura.seo.canonical;
          break;

        case 'product/listing/brand':
          //PAGINA
          this.wapstore.pagina.nome      = responseListagem.conteudo.marca.nome;
          this.wapstore.pagina.secao     = "listagem-produtos";
          this.wapstore.pagina.subsecao  = "marca";

          //MARCA
          this.wapstore.marca.id   = responseListagem.conteudo.marca.id;
          this.wapstore.marca.nome = responseListagem.conteudo.marca.nome;
          this.wapstore.marca.url  = responseListagem.estrutura.seo.canonical;
          break;

        case 'product/listing/landing-page':
          //PAGINA
          this.wapstore.pagina.nome      = responseListagem.conteudo.landingPage.nome;
          this.wapstore.pagina.secao     = "listagem-produtos";
          this.wapstore.pagina.subsecao  = "categoria-secundaria";

          //LANDING PAGE
          this.wapstore.categoriaSecundaria.id   = responseListagem.conteudo.landingPage.id;
          this.wapstore.categoriaSecundaria.nome = responseListagem.conteudo.landingPage.nome;
          this.wapstore.categoriaSecundaria.url  = responseListagem.estrutura.seo.canonical;
          break;

        case 'product/listing/search':
          //PAGINA
          this.wapstore.pagina.nome      = 'busca';
          this.wapstore.pagina.secao     = "listagem-produtos";
          this.wapstore.pagina.subsecao  = "busca";

          //BUSCA
          this.wapstore.busca.query      = responseListagem.conteudo.busca.texto;
          this.wapstore.busca.resultados = parseInt(responseListagem.info.total);
          break;

        default:
          this.wapstore.pagina.nome      = "listagem";
          this.wapstore.pagina.secao     = "listagem-produtos";
          this.wapstore.pagina.subsecao  = "listagem";
          break;
      }

      //PAGINAÇÃO
      var offset = parseInt(responseListagem.info.offset);
      var limit  = parseInt(responseListagem.info.limit);
      this.wapstore.pagina.total = 1;
      this.wapstore.pagina.atual = offset < limit ? 1 : Math.ceil((offset + 1)/limit);

      //PRODUTOS
      var produtos = [];
      responseListagem.conteudo.produtos.map(function(value) {
          produtos.push({
                           id: value.id,
                           nome: value.nome
                         });
      });
      this.wapstore.listagem.produtos = produtos;

      //CONTROLE
      this.pagina  = true;
      this.success = this.usuario && this.carrinho && this.pagina;
    },
    setPaginaDetalheProduto(responseDetalhe){
      //DADOS DA PÁGINA DE DETALHE
      this.wapstore.pagina.nome      = "Detalhe";
      this.wapstore.pagina.secao     = "detalhe";
      this.wapstore.pagina.subsecao  = "produto";
      this.wapstore.pagina.total     = 1;
      this.wapstore.pagina.atual     = 1;

      //DADOS DO PRODUTO
      this.wapstore.produto.id         = responseDetalhe.conteudo.id;
      this.wapstore.produto.sku        = responseDetalhe.conteudo.sku;
      this.wapstore.produto.nome       = responseDetalhe.conteudo.nome;
      this.wapstore.produto.tipo       = 'simples';

      //DISPONIBILIDADE
      this.wapstore.produto.disponivel = responseDetalhe.conteudo.status == 'disponivel';
      this.wapstore.produto.venda      = this.wapstore.produto.disponivel;

      //MARCA
      this.wapstore.produto.marca      = responseDetalhe.conteudo.marca.nome;

      //PREÇOS
      this.wapstore.produto.precoDe      = responseDetalhe.conteudo.precos.de;
      this.wapstore.produto.precoPor     = responseDetalhe.conteudo.precos.por;

      //PARCELAMENTO DEFAULT
      this.wapstore.produto.parcelamento = {
                                             parcelas:1,
                                             valor: responseDetalhe.conteudo.precos.por
                                           }

      //PARCELAMENTO REAL
      if(responseDetalhe.conteudo.precos.parcelamento.length > 0){
        var ultimo = responseDetalhe.conteudo.precos.parcelamento[responseDetalhe.conteudo.precos.parcelamento.length - 1];
        this.wapstore.produto.parcelamento = {
          parcelas: ultimo.parcelas,
          valor: ultimo.valorParcela
        };

      }
      //ATRIBUTOS
      var valores = [];
      this.wapstore.produto.atributos         = {};
      this.wapstore.produto.atributos.unico   = {};

      //ATRIBUTOS SIMPLES
      this.wapstore.produto.atributos.simples = {};
      if(responseDetalhe.conteudo.atributos.simples){
        //OBTÉM TODOS OS VALORES
        responseDetalhe.conteudo.atributos.simples.valores.map(function(value) {
            valores.push({
                             valor: value.label
                           });
        });

        //ATRIBUI O NOME E VALORES
        this.wapstore.produto.atributos.simples.atributo = responseDetalhe.conteudo.atributos.simples.nome;
        this.wapstore.produto.atributos.simples.valores = valores;
        this.wapstore.produto.tipo = 'configuravel';
      }

      //ATRIBUTOS UNICOS
      this.wapstore.produto.atributos.unico = {};
      if(responseDetalhe.conteudo.atributos.unico){
        //OBTÉM TODOS OS VALORES
        valores = [];
        responseDetalhe.conteudo.atributos.unico.valores.map(function(value) {
            valores.push({
                             valor: value.label
                           });
        });

        //ATRIBUI O NOME E VALORES
        this.wapstore.produto.atributos.unico.atributo = responseDetalhe.conteudo.atributos.unico.nome;
        this.wapstore.produto.atributos.unico.valores = valores;
        this.wapstore.produto.tipo = 'configuravel';
      }

      //CATEGORIA
      this.wapstore.produto.categoria = {};
      this.wapstore.produto.categoria.id        = responseDetalhe.conteudo.categoria.id;
      this.wapstore.produto.categoria.nome      = responseDetalhe.conteudo.categoria.nome;
      this.wapstore.produto.categoria.nivel     = responseDetalhe.conteudo.categoria.nivel;
      this.wapstore.produto.categoria.taxonomia = responseDetalhe.conteudo.categoria.taxonomia;

      //URL
      this.wapstore.produto.url = responseDetalhe.conteudo.url;

      //RESET
      this.wapstore.categoria           = {};
      this.wapstore.categoriaSecundaria = {};
      this.wapstore.marca               = {};
      this.wapstore.busca               = {};
      this.wapstore.listagem            = {};
      this.wapstore.pedido              = {};

      //CONTROLE
      this.pagina  = true;
      this.success = this.usuario && this.carrinho && this.pagina;
    }
  },
  created(){
    if (this.dadosUser) {
      this.setUsuario(this.dadosUser);
    }
    //DADOS DO CARRINHO
    comunicacao.$on('carrinhoCarregado', response => {
      this.setCarrinho(response);
    });

    //DADOS DA PÁGINA
    comunicacao.$on('paginaCarregada', response => {
      //TROCA DE PÁGINA NA MESMA INSTANCIA VUE
      if(this.success == true){
        this.setPagina(response);
        this.print();
        return true;
      }

      //NOVA INSTANCIA
      this.setPagina(response);
    });

  }
}
</script>
