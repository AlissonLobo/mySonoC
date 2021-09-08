<template lang="html">
  <div class="">
    <component :is="compAtual" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      compAtual: null
    }
  },
  components: {
    produtosRenova: () => import(`@/pages/produtosRenova.vue`),
   
  },
  created() {
    switch (this.$route.path) {
      case '/produtos':
        this.compAtual = `produtosRenova`;
        break;
      case '/produtos/':
        this.compAtual = `produtosRenova`;
        break;
      // default:
      //   this.compAtual = `listagemDefault`;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
