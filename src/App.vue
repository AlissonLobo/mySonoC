<template>
  <div id="app" @keyup.esc="closeFundo()">
    <menuRenova/>
    <menuMob/>
     <transition name="fade">
      <div id="fundoEscuro" v-if="fundoEscuro" @click="closeFundo()"></div>
    </transition>
    <variaveisPublicas />
    <datalayers />
    <snippets />
    <transition name="slideLeft">
      <carrinhoLateral v-if="showCarrinho" :dataCarrinho="dataCarrinho" />
    </transition>
    <!--<whatsapp />-->
    <transition name="fade">
      <router-view :key="$route.path" />
    </transition>
    <rodape/>
  </div>
</template>

<style scoped>
html,body{
  font-family: 'Open Sans',sans-serif !important;
}
.mob{display:none;}
#fundoEscuro {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000047;
}
.slideLeft-leave-to,
.slideLeft-enter {
  transform: translate(110%);
}
.slideLeft-leave-active,
.slideLeft-enter-active {
  transition: 500ms;
}
.slideLeft-leave,
.slideLeft-enter-to {
  transform: translate(0);
}
@media screen and (max-width: 768px){
  .mob{display:block;}
}
</style>

<style lang="scss">
.desk{display: block;}
.mob{display:none;}

@media screen and (max-width: 800px){
  .desk{display:none;}
  .mob{display:block;}
}

</style>

<script>
import Comunicacao from "@/comunicacao.js";
import { mapActions } from 'vuex';

export default {
  components: {
    menuRenova: () => import("@/components/gerais/menuRenova.vue"),
    menuMob: () => import("@/components/gerais/menuMob.vue"),
    carrinhoLateral: () => import("@/components/gerais/carrinho-lateral.vue"),
    variaveisPublicas: () =>
    import("@/components/gerais/head/variaveis-publicas.vue"),
    datalayers: () => import("@/components/gerais/head/datalayers.vue"),
    snippets: () => import("@/components/gerais/head/snippets.vue"),
    rodape: () => import("@/components/gerais/rodape.vue"),
    //whatsapp: () => import("@/components/gerais/whatsapp.vue"),
  },
  data() {
    return {
      fundoEscuro: false,
      fundoEscuroData: {},
      showRodape: false,
      //trocaCabecalho: false,
      showCarrinho: false,
      dataCarrinho: false,
    };
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal.path != oldVal.path) {
        this.showContent();
        window.addEventListener("scroll", this.showContent);
        document.querySelector("html").scrollTop = 0;
        this.closeFundo();

        //this.trocarCabecalho();
      }
    },
  },
  methods: {
    ...mapActions(['getMainMenu', 'getDadosUser']),
    // trocarCabecalho() {
    //   let rota = this.$route.path;
    //   if (
    //     rota == "/newhair-masculino" ||
    //     rota == "/produtos-masculino" ||
    //     rota == "/produtos-masculino/"
    //   ) {
    //     this.trocaCabecalho = true;
    //   } else {
    //     this.trocaCabecalho = false;
    //   }
    // },
    closeFundo() {
      this.fundoEscuro = false;
      if (this.fundoEscuroData.el) {
        this.fundoEscuroData.el.$el.classList.remove(
          this.fundoEscuroData.class
        );
      }
      document.querySelector("body").style.overflow = "";
      Comunicacao.$emit("closeMenu");
    },
    showContent() {
      if (
        document.querySelector("html").scrollTop > 100 ||
        this.$route.query.wapRender == "true"
      ) {
        window.removeEventListener("scroll", this.showContent);
        Comunicacao.$emit("loadContent");
        this.showRodape = true;
      }
    },
  },
  created() {
    this.getMainMenu();
    this.getDadosUser();
    Comunicacao.$on("toggleCarrinho", (response) => {
      this.showCarrinho = response.show;
      this.dataCarrinho = response.data;
    });
    Comunicacao.$on("siteLoaded", () => {
      if (document.body.clientHeight < screen.height) {
        window.removeEventListener("scroll", this.showContent);
        Comunicacao.$emit("loadContent");
        this.showRodape = true;
      }
    });
    this.showContent();
    //this.trocarCabecalho();
    window.addEventListener("scroll", this.showContent);
    Comunicacao.$on("toggleFundoEscuro", (data) => {
      this.fundoEscuro = data.acao;
      this.fundoEscuroData = data;
    });
  },
};
</script>
