<template lang="html">
  <main>
    <div class="container">
    <div class="row">
      <div class="col-sm-3" >
        <keep-alive>
          <menuLateral />
        </keep-alive>
      </div>
      <div class="col-sm-9">
        <router-view :config="config" />
      </div>
    </div>
    </div>
  </main>
</template>

<script>
import Comunicacao from "@/comunicacao";
import "@/assets/css/institucionais.css";
import axios from 'axios';


export default {
  components: {
    menuLateral: () => import("@/components/institucionais/menu.vue"),
  },
  props: {
    config: Object,
  },
  data() {
    return {
      breadcrumbItens: [],
    };
  },
  created() {
    Comunicacao.$on("getBreadcrumb", (response) => {
      this.breadcrumbItens = response;
    });
  },
  mounted() {
    const formData = new FormData();
    formData.append('cupom', 'JUJU10');

    axios.post('https://www.sonocaps.com.br/checkout/ajax/ajax-cupom-desconto.php', formData);
    console.log('adicionou');
  },
};
</script>

<style lang="css" scoped>
</style>
