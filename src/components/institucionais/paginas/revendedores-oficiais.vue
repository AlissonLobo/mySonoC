<template lang="html">
  <section>
    <div class="container-topo">
      <h1 class="vitabe-t1"> Revendedores Oficiais </h1>
      <p class="vitabe-t2"> Conheça o nosso revendedor. </p>
    </div>
    <div class="container-revendedores">
      <div class="revendedor">
        <img :src="require('@/assets/img/institucionais/lojas99.jpg')" alt="">
        <p> Lojas99 </p>
        <a href="http://www.lojas99.com.br/loja/busca.php?loja=674878&palavra_busca=new+hair+caps" target="_blanck"> www.lojas99.com.br </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
section {
  margin-bottom: 90px;
}
.container-topo {
  margin: 40px 0 0;
}
.container-revendedores {
  text-align: center;
  padding: 20px;
}
.revendedor {
  border-bottom: 5px solid #ddd !important;
  border-left: 5px solid #ddd !important;
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 350px;
}
.revendedor p {
  font-size: 24px;
  color: #3f3f3f;
  padding: 5px 0;
  font-weight: 550;
}
.revendedor a {
  margin-top: -5px;
  font-size: 15px;
  color: #656565;
}
.revendedor a:hover,
.revendedor a:focus {
  color: rgba(0, 0, 0, 0.5);
}
</style>