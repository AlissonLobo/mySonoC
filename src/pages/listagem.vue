<template lang="html">
  <main>
    <notFound v-if="notFound === true && loading.geral === false" />

    <transition name="fade">
      <sklGeral v-if="loading.geral && notFound !== true" />
    </transition>

    <transition name="fade">
      <div v-if="notFound === 'encontrada' && typeListing && loading.geral === false">
        <section id="topoBannerCategoria" v-if="typeListing != 'busca'">
          <div class="topoBannerCategoria-container" :style="{'background-image': `url(${mainBanner ? mainBanner[tipoImg.banner] : ''})`, minHeight: mainBanner && $screen.width > 767 ? '280px' : '380px'}">
            <div class="row align-right">
              <div class="small-12 medium-8 large-6 columns">
                <div class="containerDescCurta">
                  <p class="topoBannerCategoria-container-text" v-html="listagemData[typeListing].descricao" v-if="listagemData[typeListing].descricao"></p>
                  <button ref="btToggleDesc" @click="toggleDesc()" type="button" name="button" class="topoBannerCategoria-container-mais" v-if="listagemData[typeListing].descricaoLonga">
                    <span>
                      Leia mais
                    </span>
                    <div class="material-icons">arrow_drop_down</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="containerDescricaoCategoria" ref="containerDescricaoLonga" v-if="listagemData[typeListing].descricaoLonga" :class="{hiddenSec: closeSec}">
          <div class="row">
            <div class="small-12 columns" v-html="listagemData[typeListing].descricaoLonga"></div>
            <div @click="toggleDesc()" class="small-12 columns containerBtRecolher">
              <button type="button" name="button" class="topoBannerCategoria-container-mais">
                <span>
                  Recolher
                </span>
                <i class="material-icons">arrow_drop_up</i>
              </button>
            </div>
          </div>
        </section>

        <div class="newhair-btn-container">
          <router-link class="newhair-btn" to="/produtos">FEMININO</router-link>
          <router-link class="newhair-btn" to="/produtos-masculino">MASCULINO</router-link>
        </div>

        <section id="mainContainerCategoria" ref="mainContainerCategoria">
          <div class="row">
            <div class="small-12 columns">
              <transition name="fade">
                <sklProds v-if="loading.prods === true"/>
                <listagemProds :listagemData="produtos" :key="JSON.stringify(produtos)" ref="listagem" v-if="loading.prods === false && produtos.length > 0" />
              </transition>
            </div>
          </div>
        </section>

        <paginacao
          v-if="dadosPaginacao.show"
          :dadosPaginacao="dadosPaginacao" />
      </div>
    </transition>
  </main>
</template>

<script>
import Comunicacao from '@/comunicacao.js';
import { mapGetters } from 'vuex'

export default {
  components: {
    listagemProds: () => import('@/components/listagem/produtos.vue'),
    paginacao: () => import('@/components/gerais/paginacao.vue'),
    notFound: () => import('@/pages/404.vue'),
    sklProds: () => import('@/components/skeletons/listagem/produtos.vue'),
    sklGeral: () => import('@/components/skeletons/listagem.vue')
  },
  data(){
    return {
      listagemData: {},
      notFound: false,
      mainBanner: null,
      produtos: null,
      listagemInfos: null,
      offsetAtual: 0,
      limit: this.$route.query.ipp ? this.$route.query.ipp : 12,
      typeListing: false,
      complementoUrlRequest: '',
      closeSec: true,
      loading: {
        geral: true,
        prods: true
      }
    }
  },
  computed: {
    ...mapGetters(['tipoImg']),
    filtrosSelecionados() {
      let filtros = Object.keys(this.listagemInfos.filtros), i = 0;

      filtros.forEach(item => {
        if (Object.keys(this.$route.query).indexOf(item) != -1) {
          i++;
        }
      });

      return i;
    },
    dadosPaginacao(){
      if (this.listagemInfos) {
        let result = {
          total: this.listagemInfos.total,
          exibindo: this.listagemInfos.exibindo,
          offset: this.listagemInfos.offset,
          limit: this.listagemInfos.limit
        }

        result.pages = Math.ceil(result.total / this.limit);
        result.show = result.pages > 1;

        return result;
      }
      return {show: false};
    }
  },
  watch: {
    $route(newVal, oldVal){
      if (newVal.query != oldVal.query) {
        this.loading.prods = true;
        document.querySelector('html').scrollTop = this.$refs.mainContainerCategoria.offsetTop - 50;
        this.offsetAtual = newVal.query.pg ? (newVal.query.pg - 1) * this.limit : 0;
        this.requestData();
        Comunicacao.$emit('closeMenu');
      }
    },
    produtos() {
      this.loading.prods = false;
    }
  },
  methods: {
    setOrder (route) {
      route = JSON.parse(route);
      this.$router.push(route)
    },
    setLimit (route) {
      route = JSON.parse(route);
      this.limit = route.query.ipp;
      this.$router.push(route)
    },
    defineTypeListing(){
      switch (this.$route.name) {
        case 'product/listing/landing-page':
          this.typeListing = 'landingPage';
          this.complementoUrlRequest = 'landing-page'
          break;
        case 'product/listing/brand':
          this.typeListing = 'marca';
          this.complementoUrlRequest = 'brand'
          break;
        case 'product/listing/search':
          this.typeListing = 'busca';
          this.complementoUrlRequest = 'search'
          break;
        default:
          this.typeListing = 'categoria';
          this.complementoUrlRequest = 'category'
      }
    },
    toggleDesc(){
      let height = this.$refs.containerDescricaoLonga.offsetHeight;
      if(height == 0){
        this.$refs.btToggleDesc.querySelector('span').innerText = 'Recolher';
        this.$refs.btToggleDesc.classList.add('opened');
        this.$refs.containerDescricaoLonga.style.maxHeight = 'unset';
        height = this.$refs.containerDescricaoLonga.offsetHeight;
        this.$refs.containerDescricaoLonga.style.transition = '300ms';
        this.$refs.containerDescricaoLonga.style.maxHeight = '0';
        setTimeout(() => {
          this.$refs.containerDescricaoLonga.style.maxHeight = `${height}px`;
        }, 100);
        return false;
      }

      this.$refs.btToggleDesc.querySelector('span').innerText = 'Leia mais';
      this.$refs.btToggleDesc.classList.remove('opened');

      this.$refs.containerDescricaoLonga.style.transition = '300ms';
      this.$refs.containerDescricaoLonga.style.maxHeight = '0';
    },
    openMenuLateral(){
      document.querySelector('body').style.overflow = 'hidden';
      this.$refs.menuFiltros.$el.classList.add('menuLateralOpen');
      Comunicacao.$emit('toggleFundoEscuro', {
        acao: true,
        el: this.$refs.menuFiltros,
        class: 'menuLateralOpen'
      });
    },
    genPath(path, onlyQuery){
      if (onlyQuery) {
        path = path.replace(/\/.*(\?.*)/g, '$1');
        return path;
      }
      path = path.replace('?', '&');
      return path;
    },
    urlRequest(){
      let url;
      if (this.typeListing == 'search') {
        url = `/v2/front/url/product/listing/${this.complementoUrlRequest}${this.genPath(this.$route.fullPath, true)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
        return url;
      }
      url = `/v2/front/url/product/listing/${this.complementoUrlRequest}?url=${this.genPath(this.$route.fullPath)}&offset=${this.offsetAtual}&limit=${this.limit}${this.$route.query.order ? '' : '&order=Popularidade'}`
      return url;
    },
    requestData(){
      this.$requestSend('get', this.urlRequest(), {}, (success, response) => {
        if (success) {
          this.$aplicaSEO(response.data.estrutura);
          this.breadcrumbItens = response.data.estrutura.breadcrumb;
          this.listagemData = response.data.conteudo;
          this.produtos = response.data.conteudo.produtos;
          this.listagemInfos = response.data.info;

          this.loading.geral = false;

          //VARIÁVEIS PÚBLICAS
          Comunicacao.$emit('paginaCarregada', response.data);

          if (this.$route.name == 'product/listing/category') {
            this.$requestSend('get', `/v2/front/showcase/banners/banner-listagem-categoria?idNivel=${response.data.conteudo[this.typeListing].id}&limit=1`, {}, (success, response) => {
              if (success) {
                this.mainBanner = screen.width > 767 ? response.data.banners[0].dimensoes.desktop : response.data.banners[0].dimensoes.mobile;
              }
            });
          }

          this.notFound = this.offsetAtual >  this.listagemInfos.total ? true : 'encontrada'
          return;
        }

        this.loading.geral = false;
        this.notFound = true;
      });
    }
  },
  created(){
    this.defineTypeListing();
    this.offsetAtual = this.$route.query.pg ? (this.$route.query.pg - 1) * this.limit : 0;
    this.requestData();
    setTimeout(() => {
      this.closeSec = true;
    }, 300);
  }
}
</script>

<style lang="css" scoped>
#pitchbar{
  margin-bottom: 0;
}
/* BANNER NO TOPO */
.topoBannerCategoria-container{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 25px 0;
}
h1{
  font-size: 30px;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
  line-height: 1.13;
}
.topoBannerCategoria-container-text{
  line-height: 1.57142;
  font-size: 14px;
  margin-bottom: 20px;
}
.topoBannerCategoria-container-mais{
  font-size: 12px;
  line-height: 1.166;
  display: flex;
  align-items: center;
}
.topoBannerCategoria-container-mais > span{
  text-decoration: underline;
}
.topoBannerCategoria-container-mais div{
  transition: 200ms;
}
.topoBannerCategoria-container-mais.opened div{
  transform: rotate(-180deg);
}
@media (min-width: 768px) and (max-width: 1300px){
  .topoBannerCategoria-container{
    padding: 0;
    display: flex;
    align-items: center;
  }
  .topoBannerCategoria-container .row{
    width: 100%;
  }
}
@media (max-width: 767px) {
  .topoBannerCategoria-container-mais{
    margin-left: auto;
  }
}
.newhair-btn-container{
  display: flex;
  justify-content: center;
  margin: 45px 0;
}
.newhair-btn.router-link-exact-active{
  background-color: #EEE;
}
.newhair-btn{
  border-radius: 7px;
  padding: 10px;
  border: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  color: #666;
  max-width: 519px;
  width: 100%;
  display: inline-block;
  margin-left: 30px;
}
.newhair-btn:last-child{
  margin-right: 10px;
}
@media(max-width: 767px){
  .newhair-btn{
    margin-left: 10px;
  }
}
/* ===================================================== */

/* CONTAINER PRINCIPAL DA CATEGORIA */
#mainContainerCategoria{
  margin-top: 10px;
}

/* BOTÃO FILTRAR */
@media (min-width: 1024px) {
  #openFiltros{
    display: none;
  }
  #mainContainerCategoria{
    min-height: 300px;
  }
  #menuFiltros{
    margin-bottom: 30px;
  }
}
@media (max-width: 1023px) {
  #openFiltros{
    display: inline-flex;
    align-items: center;
    margin-bottom: 15px;
  }
  #openFiltros i{
    margin-left: 5px;
  }
}

/* SELECTS ACIMA DOS PRODUTOS */
.containerTopProds{
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  border-bottom: 1px solid #B0BEC5;
  margin-bottom: 20px;
}
.containerTopProds-item{
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.containerTopProds-item:not(:last-child){
  margin-right: 10px;
}
.containerTopProds-item select{
  max-width: 150px;
  margin-left: 10px;
  border-radius: 4px;
  border-color: #B0BEC5;
  box-shadow: none !important;
  margin-bottom: 0;
}

/* PRODUTOS NÃO ENCONTRADOS */
.prodsNaoEncontrados{
  font-size: 30px;
  display: block;
  text-align: center;
  margin-top: 20px;
}


@media (max-width: 1023px) {
  .containerTopProds{
    display: none;
  }
}
</style>

<style media="screen">

/* DESCRIÇÃO OCULTA */
#containerDescricaoCategoria{
  background-color: #F6F6F6;
  overflow: hidden;
}
#containerDescricaoCategoria.hiddenSec{
  max-height: 0;
}
.containerDescricaoCategoria-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px
}
.containerDescricaoCategoria-img{
  width: 370px;
  flex-basis: 0 1 auto;
}
.containerDescricaoCategoria-text{
  width: calc(100% - 400px);
}
#containerDescricaoCategoria h2,
#containerDescricaoCategoria h3{
  font-size: 24px;
  color: #214861;
  font-weight: bold;
  line-height: 1.1666;
  margin-bottom: 5px;
}
.containerDescricaoCategoria-text p{
  font-size: 14px;
  line-height: 1.571428;
}
.containerBtRecolher{
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
@media (max-width: 1023px) {
  .containerDescricaoCategoria-container{
    flex-direction: column;
  }
  .containerDescricaoCategoria-img{
    order: 1;
    width: 100%;
    text-align: center;
  }
  .containerDescricaoCategoria-text{
    order: 2;
    width: 100%;
  }
}
/* ===================================================== */
</style>
