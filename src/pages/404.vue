<template lang="html">
  <div class="">
    <h1>
      404
    </h1>
    <span>Página não encontrada</span>
  </div>
</template>

<script>
import comunicacao from '@/comunicacao.js'
export default {
  created(){
    //RESPONSE FIXO DE 404
    var response = {
      estrutura: {
        nivel: "404",
        seo: {
          title: "Página não encontrada",
          description: "",
          keywords: "",
          canonical: "",
          indexar: false
        }
      }
    }

    //CARREGA O SEO
    this.$aplicaSEO(response.estrutura);

    //CARREGA AS VARIÁVEIS PÚBLICAS
    comunicacao.$emit('paginaCarregada', response);
  }
}

</script>

<style lang="css" scoped>
div{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 78px 0;
  flex-direction: column;
}
h1{
  font-weight: bold;
  color: #214861;
  font-size: 72px;
}
span{
  font-size: 30px;
}
</style>
