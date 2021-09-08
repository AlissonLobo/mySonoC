<template lang="html">
  <section class="mainMenu-bar" v-if="menuData && menuData.menu">
    <div class="row">
      <div class="small-12 columns">
        <nav id="mainMenu" ref="menu">

          <div class="mainMenu-containerMob">
            <div class="mainMenu-header" v-if="screenWidth <= 1023">
              <div @click="closeMenuMob()" class="mainMenu-close" v-if="screenWidth < 1024">
                <svg data-v-22bea350="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11.684 11.684"><g data-v-22bea350="" id="cancel" transform="translate(1 -0.016)"><g data-v-22bea350="" id="Grupo_306" data-name="Grupo 306" transform="translate(-1 0.016)"><path data-v-22bea350="" id="Caminho_733" data-name="Caminho 733" d="M7.129,5.858,11.5,1.489a.64.64,0,0,0,0-.9L11.115.2a.641.641,0,0,0-.9,0L5.842,4.571,1.474.2a.64.64,0,0,0-.9,0L.187.585a.64.64,0,0,0,0,.9L4.556,5.858.187,10.227a.641.641,0,0,0,0,.9l.383.383a.64.64,0,0,0,.9,0L5.842,7.144l4.369,4.369a.634.634,0,0,0,.452.187h0a.634.634,0,0,0,.452-.187l.383-.383a.641.641,0,0,0,0-.9Z" transform="translate(0 -0.016)" fill="#000"></path></g></g></svg>
              </div>
              <p>Menu</p>
            </div>
            <ul class="mainMenu-container">
              <itens
              :itemData="itemMenu"
              :num="i"
              v-for="(itemMenu, i) in menuData.menu "
              :key="i" class="mainMenu-item"
              :class="{menuItemDestaque: itemMenu.destaque}"/>
            </ul>
          </div>

        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import Comunicacao from "@/comunicacao.js";
import { mapState } from 'vuex';

export default {
  props: {
    dadosUser: Object,
  },
  components: {
    itens: () => import("@/components/gerais/cabecalho/menu/itens-menu.vue"),
  },
  data() {
    return {
      showLogo: false,
    };
  },
  computed: {
    ...mapState(['menuData', 'screenWidth'])
  },
  created() {
    // Comunicacao.$on("menuLoaded", (response) => {
    //   this.menuData = response;
    // });
    Comunicacao.$emit("componentMenuReady");

    Comunicacao.$on("openMenu", () => {
      if (this.$refs.menu) {
        document.querySelector("body").style.overflow = "hidden";
        this.$refs.menu.classList.add("opened");
        Comunicacao.$emit("toggleFundoEscuro", {
          acao: true,
        });
        this.showLogo = true;
      }
    });
    Comunicacao.$on("closeMenu", () => {
      if (this.$refs.menu) {
        this.$refs.menu.classList.remove("opened");
        if (this.$refs.menu.querySelector(".opened")) {
          this.$refs.menu.querySelector(".opened").classList.remove("opened");
        }
      }
      document.querySelector("body").style.overflow = "";
    });
  },
  methods: {
    closeMenuMob() {
      Comunicacao.$emit("toggleFundoEscuro", {
        acao: false,
      });
      this.$refs.menu.classList.remove("opened");
      document.querySelector("body").style.overflow = "";
    },
  },
};
</script>

<style lang="css" scoped>
@media (min-width: 1024px) {
  #mainMenu {
    font-size: 10px;
    color: #fff;
    font-weight: 700;
    font-style: normal;
    display: inline-block;
    position: relative;
  }
  .mainMenu-container {
    display: flex;
    position: relative;
    z-index: 11;
  }
}
@media (max-width: 1023px) {
  #mainMenu {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: 500ms;
    background-color: #fff;
    color: #000;
    height: 100%;
    z-index: 21;
    width: 270px;
    overflow: hidden;
  }
  #mainMenu.opened {
    transform: translate(0);
    overflow: unset;
    padding: 4px 15px;
  }
  .mainMenu-containerMob {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    padding-top: 15px;
  }
  .mainMenu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .mainMenu-header p {
    font-weight: bold;
    font-size: 25px;
    text-align: right;
    margin-bottom: 0;
  }

  .mainMenu-close {
    cursor: pointer;
  }
}
</style>
