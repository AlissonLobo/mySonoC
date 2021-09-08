<template>
  <main>
    <transition name="fade">
      <sklGeral v-if="loading.geral" />
    </transition>
        <transition name="fade">
          <bannerRenova/>
          <!-- <sklBanner v-if="loading.banner" /> -->
        </transition>
        <!-- <bannerSlider :banners="banners" v-if="banners.length > 0 && loading.banner === false"/> -->
        <newsletter/>
        <vantagens/>
        <famososRecomendam/>
        <!-- <famososRecomendam /> -->
        <beneficios/>
        <perfeito/>
        <momento/>
        <kitProdutos/>
        <frete/>
        <bannerDesafio/>
        <avaliacoes/>
        <duvidasHome/>
        <compraSegura/>
  </main>
</template>

<script>
//import comunicacao from '@/comunicacao.js'
//import {mapState, mapGetters} from 'vuex'
// import vitrine from '@/components/gerais/vitrine.vue'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    sklGeral: () => import('@/components/skeletons/home.vue'),
    bannerRenova: () => import('@/components/gerais/bannerRenova.vue'),
    newsletter: () => import("@/components/gerais/newsletter.vue"),
    beneficios: () => import("@/components/gerais/beneficios.vue"),
    famososRecomendam: () => import("@/components/gerais/famososRecomendam.vue"),
    perfeito: () => import("@/components/gerais/perfeito.vue"),
    momento: () => import("@/components/gerais/momento.vue"),
    vantagens: () => import("@/components/gerais/vantagens.vue"),
    kitProdutos: () => import("@/components/gerais/kitProdutos.vue"),
    frete: () => import("@/components/gerais/frete.vue"),
    bannerDesafio: () => import("@/components/gerais/bannerDesafio.vue"),
    duvidasHome: () => import("@/components/gerais/duvidasHome.vue"),
    compraSegura: () => import("@/components/gerais/compraSegura.vue"),
    avaliacoes: () => import("@/components/gerais/avaliacoes.vue"),
    // sklBanner: () => import('@/components/skeletons/home/banner.vue'),
    // bannerSlider: () => import('@/components/home/banner-slider.vue'),
    // famososRecomendam: () => import('@/components/gerais/famosos-recomendam.vue'),
    // vitrine,
    // pitchbar: () => import('@/components/gerais/pitchbar.vue'),
  },
  /*data(){
    return {
      banners: [],
      bannerMeio: null,
      marcas: false,
      vitrineData: false,
      loading: {
        geral: true,
        banner: true
      },
      answer: [],
      answerOpened: null
    }
  },
  computed: {
    ...mapState({
      screenWidth: state => state.screenWidth,
      faq: state => state.duvidas.faq
    }),
    ...mapGetters(['tipoImg'])
  },
  methods: {
    openAnswer(index) {
      if (this.answerOpened != null) {
        this.$set(this.answer, this.answerOpened, false);
        if (index == this.answerOpened) {
          this.answerOpened = null;
          return;
        }
      }
      this.$set(this.answer, index, true);
      this.answerOpened = index;
    }
  },
  created(){
    this.$requestSend('get', '/v2/front/url/home', {}, (success, response) => {
      if (success){
        this.loading.geral = false;
        this.$aplicaSEO(response.data.estrutura);
        comunicacao.$emit('paginaCarregada', response.data);
      }
    });
    this.$requestSend('get', '/v2/front/showcase/banners/banner-principal', {}, (success, response) => {
      this.banners = success ? response.data.banners : false;
      this.loading.banner = false;
    });
    this.$requestSend('get', '/v2/front/showcase/products/escolha-tratamento', {}, (success, response) => {
      this.vitrineData = success ? response.data : false;
    });
    this.$requestSend('get', '/v2/front/showcase/banners/meio-home', {}, (success, response) => {
      this.bannerMeio = success ? response.data.banners : false;
    });
  }*/

  data(){
    return {
      banners: [],
      bannerMeio: null,
      marcas: false,
      vitrineData: false,
      loading: {
        geral: true,
        banner: true
      },
      answer: [],
      answerOpened: null
    }
  },
  computed: {
    ...mapState({
      screenWidth: state => state.screenWidth,
      faq: state => state.duvidas.faq
    }),
    ...mapGetters(['tipoImg'])
  },
  methods: {
    ...mapMutations(['changeDadosPageAtual']),
    openAnswer(index) {
      if (this.answerOpened != null) {
        this.$set(this.answer, this.answerOpened, false);
        if (index == this.answerOpened) {
          this.answerOpened = null;
          return;
        }
      }
      this.$set(this.answer, index, true);
      this.answerOpened = index;
    }
  },
  created(){
    this.$requestSend('get', '/v2/front/url/home', {}, (success, response) => {
      if (success){
        this.loading.geral = false;
        this.$aplicaSEO(response.data.estrutura);
        this.changeDadosPageAtual(response.data);
      }
    });
    this.$requestSend('get', '/v2/front/showcase/banners/banner-principal', {}, (success, response) => {
      this.banners = success ? response.data.banners : false;
      this.loading.banner = false;
    });
    this.$requestSend('get', '/v2/front/showcase/products/escolha-tratamento', {}, (success, response) => {
      this.vitrineData = success ? response.data : false;
    });
    this.$requestSend('get', '/v2/front/showcase/banners/meio-home', {}, (success, response) => {
      this.bannerMeio = success ? response.data.banners : false;
    });
  }

}

</script>

<style>
  .home-t2,
  .home-t1{
    font-size: 36px;
    font-weight: 500;
    color: #404040;
    line-height: 1.11;
    text-align: center;
  }
  .home-t2{
    font-size: 20px;
  }
</style>

<style scoped>
  /* BENEFÍCIOS */
  #beneficios{
    background-color: #EDEDED;
    padding: 30px 0px 65px;
    margin-top: 45px;
  }
  .beneficios-t1{
    text-align: center;
    font-size: 36px;
    line-height: normal;
    font-weight: 500;
    color: #404040;
  }
  .beneficios-t2{
    text-align: center;
    font-size: 15px;
    line-height: 1.3;
    font-family: 'open sans', sans-serif;
    color: #888;
    margin-bottom: 40px;
  }
  .beneficios-t3{
    font-family: 'open sans', sans-serif;
    margin-top: 10px;
    color: #fc2aa8;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 17px;
  }
  .beneficios-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .beneficios-text{
    color: #666666;
    font-size: 13px;
    line-height: 1.5;
  }
  .beneficiosBtComprar{
    margin-top: 60px;
  }
  @media (max-width: 767px) {
    .beneficios-item:not(:last-child) .beneficios-text{
      margin-bottom: 13px;
    }
    .beneficiosBtComprar{
      margin-top: 43px;
    }
  }

  /* PITCHBAR */
  .pitchbarHome{
    margin-top: 20px;
  }

  /* BANNER DO MEIO DA PÁGINA */
  @media (max-width: 767px) {
    .bannerMeio-link{
      width: 100%;
    }
  }


  /* MARCA NAS MIDIAS */
  #midia{
    margin-top: 45px;
  }
  .midia-t1{
    color: #404040;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
    line-height: 1;
  }
  .midia-t2{
    color: #888;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 45px;
  }

  .midia-img{
    margin-bottom: 20px;
  }
  .midia-text{
    font-size: 13px;
    line-height: 1.5;
    color: #666666;
  }
  @media (max-width: 767px) {
    .midia-img{
      margin-bottom: 15px;
    }
    .midia-text{
      margin-bottom: 13px;
    }
  }

  /* DUVIDAS FREQUENTES */
  #duvidas {
    margin-top: 45px;
  }
  .duvidas-t1{
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: #404040;
  }
  .duvidas-t2{
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    color: #888;
    margin-bottom: 60px;
  }
  .duvidas-item-pergunta {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    cursor: pointer;
  }
  .duvidas-item-pergunta h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-align: left;
    margin: 0;
    display: flex;
    align-content: center;
    align-self: center;
    font-weight: 600;
    color: #828282;
  }
  .duvidas-item{
    margin: 10px 0;
  }
  .duvidas-item-pergunta i{
    color: #828282;
    font-size: 20px;
    width: 20px;
    height: 20px;
    transition: 500ms;
    transform: rotate(-90deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .duvidas-item-pergunta i.duvidasItemActive{
    transform: rotate(0deg);
  }
  .duvidas-item-resposta {
    margin: 10px 20px;
  }
  .duvidas-item-resposta p {
    font-family: 'Open Sans', sans-serif;
    color: #828282;
    text-align: justify;
    font-size: 14px;
    line-height: 1.4;
  }

  /* COMPRA SEGURA */
  #seguranca {
    margin-top: 45px;
    padding: 30px 0px 50px;
    background-color: #f9f9f9;
  }
  .seguranca-t1{
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: #404040;
  }
  .seguranca-t2{
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    color: #888;
    margin-bottom: 30px;
  }
  .seguranca-img{
    flex: 1 1 auto;
  }
  .seguranca-t3{
    margin-top: 10px;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.3;
    color: #f13787;
    margin-bottom: 8px;
  }
  .seguranca-text{
    font-size: 14px;
    line-height: 1.4;
    color: #666666;
  }
  .columns:not(:last-child) .seguranca-text{
    margin-bottom: 10px;
  }

  /* VITRINE */
  #vitrineNews{
    margin-top: 45px;
  }
  /* ===================================================== */
</style>
