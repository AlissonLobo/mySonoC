<template lang="html">
  <li @click.stop="$screen.width < 1024 ? openSUb() : false;" @mouseover="loadMenu = true" v-if="itemData">
    <router-link v-if="itemData.rota || itemData.link.indexOf($siteUrl) == -1" :to="itemData.rota ? itemData.rota : itemData.link">
      <div class="mainMenu-iconContainer" v-html="itemData.svg" v-if="itemData.svg != ''"></div>
      {{ itemData.label }}
      <itens/>
    </router-link>
    <a v-else :href="itemData.link">{{ itemData.label }}</a>
  </li>
</template>

<script>
import Comunicacao from "@/comunicacao.js";

export default {
  components: {
    itens: () => import("@/components/gerais/cabecalho/menu/itens-menu.vue"),
  },
  props: {
    itemData: Object,
    num: Number,
    allCategories: Boolean,
    allCategoriesChild: Boolean,
  },
  data() {
    return {
      bannerSub: null,
      repeat: true,
      loadMenu: false,
      bannerLoaded: false,
    };
  },
  methods: {
    openSUb() {
      const subMenu = event.target.closest("li").querySelector(".mainMenu-sub");
      if (subMenu) {
        subMenu.classList.add("opened");
        return;
      }
      Comunicacao.$emit("toggleFundoEscuro", {
        acao: false,
      });
      Comunicacao.$emit("closeMenu");
    },
    closeSUb() {
      const subMenu = event.target.closest(".mainMenu-sub");

      subMenu.classList.remove("opened");
    },
  },
};
</script>

<style lang="css" scoped>
.sklBanner {
  border-radius: 4px;
  background-color: #dde8ee;
  background-repeat: no-repeat;
  background-position: -600%;
  background-size: 80%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#dee9ee),
    color-stop(50%, #d3e0e8),
    to(#dee9ee)
  );
  background-image: linear-gradient(
    90deg,
    #dee9ee 0%,
    #d3e0e8 50%,
    #dee9ee 100%
  );
  animation: loading infinite 1.5s;
  width: 242px;
  height: 394px;
}
@keyframes loading {
  to {
    background-position: 600%;
  }
}
@media (min-width: 1024px) {
  .mainMenu-container > .mainMenu-item {
    font-weight: 700;
    flex: 1 1 auto;
    height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 10px;
    position: relative;
    margin-right: 40px;
  }
  .mainMenu-container > .mainMenu-item > a,
  .mainMenu-container > .mainMenu-item > span {
    text-align: center;
    width: 100%;
    position: relative;
    justify-content: center;
    height: 100%;
  }
  .mainMenu-iconContainer {
    margin-right: 5px;
    width: 25px;
    display: flex;
    justify-content: center;
  }
  .mainMenu-item span {
    cursor: default;
    display: flex;
    align-items: center;
  }
  .mainMenu-item a {
    display: flex;
    align-items: center;
  }
  .mainMenu-container > .mainMenu-item.menuItemDestaque {
    background-color: #c62828;
  }
  .mainMenu-container > .mainMenu-item.menuItemDestaque.menuAllCategories {
    background-color: #1c3d52;
  }
  .mainMenu-container > .mainMenu-item.menuItemDestaque > span,
  .mainMenu-container > .mainMenu-item.menuItemDestaque > a {
    color: #fff;
  }

  .mainMenu-container > .mainMenu-item.menuAllCategories {
    width: 200px;
    flex: 0 1 auto;
  }
  .menuAllCategories > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menuAllCategories > span i {
    margin-left: 5px;
    font-size: 24px;
  }

  /* SUBMENU */
  .mainMenu-sub {
    position: absolute;
    top: 100%;
    text-align: left;
    background-color: #fff;
    display: none;
    left: 0px;
    padding: 10px 20px 25px;
    font-size: 12px;
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    line-height: 1.16;
    white-space: nowrap;
    min-height: 100%;
    z-index: -1;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .mainMenu-container > .mainMenu-item {
    justify-content: center;
  }
  .mainMenu-container
    > .mainMenu-item:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-last-child(2)):not(:nth-last-child(3)):not(:nth-last-child(1))
    > .mainMenu-sub {
    left: unset;
  }
  .mainMenu-item:not(.menuAllCategories) .mainMenu-sub .mainMenu-item {
    font-weight: 400;
  }

  .mainMenu-container > .mainMenu-item.menuAllCategories > .mainMenu-sub {
    min-width: 200px;
    padding: 0;
    border-bottom-right-radius: 0;
  }
  .mainMenu-container
    > .mainMenu-item.menuAllCategories
    > .mainMenu-sub
    .mainMenu-sub {
    top: 0;
    left: 100%;
    border-bottom-left-radius: 0;
  }
  .mainMenu-container
    > .mainMenu-item.menuAllCategories
    > .mainMenu-sub
    > .mainMenu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mainMenu-container
    > .mainMenu-item.menuAllCategories
    > .mainMenu-sub
    > .mainMenu-item
    > span {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .mainMenu-container
    > .mainMenu-item.menuAllCategories
    > .mainMenu-sub
    > .mainMenu-item
    > a {
    padding: 10px;
  }

  .mainMenu-item:not(.menuAllCategories) > .mainMenu-sub > li:first-child {
    color: #214861;
    font-size: 20px;
    font-weight: bold;
    grid-row: 1 !important;
    border-bottom: 1px solid #b0bec5;
    padding-bottom: 5px;
  }

  .menuAllCategories > ul > .mainMenu-bannerSub {
    display: none;
  }
  .mainMenu-bannerSub {
    width: 242px;
  }
  .mainMenu-container > .mainMenu-item:nth-last-child(1) > .mainMenu-sub,
  .mainMenu-container > .mainMenu-item:nth-last-child(2) > .mainMenu-sub,
  .mainMenu-container > .mainMenu-item:nth-last-child(3) > .mainMenu-sub {
    left: 0;
    right: 0;
  }

  .verTudoMenuDesk a {
    color: #214861;
    text-decoration: underline;
    font-size: 14px;
    font-weight: bold;
  }
  .mainMenu-container
    > .mainMenu-item.menuAllCategories
    > .mainMenu-sub
    > .mainMenu-item.verTudoMenuDesk {
    display: none;
  }
}

@media (max-width: 1023px) {
  .verTudoMenuDesk {
    display: none;
  }
  .mainMenu-container .mainMenu-item {
    color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 0 13px 20px;
    text-transform: full-size-kana;
    color: #3f3f3f;
    font-weight: normal;
    font-size: 13px;
    border-top: 1px solid #eee;
  }
  .mainMenu-container .mainMenu-item > span {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .mainMenu-container .mainMenu-item span,
  .mainMenu-container .mainMenu-item a {
    display: flex;
    align-items: center;
  }
  .mainMenu-container .mainMenu-item .mainMenu-sub {
    position: absolute;
    left: 0;
    width: 100%;
    transform: translate(100%);
    background-color: #214861;
    z-index: 2;
    transition: 300ms;
    top: 0;
    height: 100%;
  }
  .mainMenu-container .mainMenu-item .mainMenu-sub.opened {
    transform: translate(0%);
  }
  .mainMenu-container .mainMenu-item.buttonBackMenu {
    display: flex;
    align-items: center;
    background-color: #1a6688;
    border-bottom: none;
    justify-content: flex-start;
  }
  .mainMenu-iconContainer {
    width: 25px;
    margin-right: 25px;
    text-align: center;
  }
}
</style>
<style media="screen">
@media (max-width: 1023px) {
  .mainMenu-iconContainer svg path[fill="#424242"],
  .mainMenu-iconContainer svg rect[fill="#424242"],
  .mainMenu-iconContainer svg ellipse[fill="#424242"] {
    fill: #fff;
  }
}
@media (min-width: 1024px) {
  .mainMenu-item:hover > span svg path[fill="#424242"],
  .mainMenu-item:hover > span svg rect[fill="#424242"],
  .mainMenu-item:hover > span svg ellipse[fill="#424242"],
  .mainMenu-item:hover > a svg ellipse[fill="#424242"],
  .mainMenu-item:hover > a svg path[fill="#424242"],
  .mainMenu-item:hover > a svg rect[fill="#424242"] {
    fill: #1a6688;
  }
  .mainMenu-item.menuItemDestaque > span > .mainMenu-iconContainer path,
  .mainMenu-item.menuItemDestaque > a > .mainMenu-iconContainer path {
    fill: #fff;
  }
}
</style>
