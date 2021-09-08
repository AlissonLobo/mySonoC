<template lang="html">
  <main>
        <router-view :config="config" />
  </main>
</template>

<script>
import Comunicacao from "@/comunicacao";

export default {
  components: {
   
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
};
</script>

<style lang="css" scoped>
</style>
