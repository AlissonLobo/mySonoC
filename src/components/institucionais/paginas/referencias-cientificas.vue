<template lang="html">
  <section>
    <div class="container-topo">
      <h1 class="vitabe-t1">Referências Científicas</h1>
      <p class="vitabe-t2"> Conheça algumas referências.</p>
    </div>
    <div class="container">
      <div class="container-item" v-for="(item, i) in itens" :key="i">
        <p class="institucional-t1" @click="$slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo')">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref="`faq${i}`" class="container-item-text">
          <p v-html="item.resposta"></p>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          pergunta: "1º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/27095961" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/27095961</a>`,
        },
        {
          pergunta: "2º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/21914489" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/21914489</a>`,
        },
        {
          pergunta: "3º Referência Científica ",
          resposta: `<a href="http://www.sbai.org.br/revistas/Vol331/ART%201-10%20-%20Micronutrientes%20e%20sistema%20imunol%C3%B3gico.pdf" target="_blanck">http://www.sbai.org.br/revistas/Vol331/ART%201-10%20-%20Micronutrientes%20e%20sistema%20imunol%C3%B3gico.pdf</a>`,
        },
        {
          pergunta: "4º Referência Científica ",
          resposta: `<a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380979/" target="_blanck">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380979/
          </a>`,
        },
        {
          pergunta: "5º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/19727438" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/19727438</a>`,
        },
        {
          pergunta: "6º Referência Científica ",
          resposta: `<a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929555/ " target="_blanck"> https://www.ncbi.nlm.nih.gov/pmc/ </a>`,
        },
        {
          pergunta: "7º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/19172026" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/19172026</a>`,
        },
        {
          pergunta: "8º Referência Científica ",
          resposta: `<a href="https://www.ncbi.nlm.nih.gov/pubmed/24575202" target="_blanck">https://www.ncbi.nlm.nih.gov/pubmed/24575202
          </a>`,
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.container-item-text a {
  color: rgb(70, 146, 200) !important;
}
section {
  margin-bottom: 90px;
}
.institucional-t1 {
  font-weight: normal;
}
.institucional-t1:hover {
  color: #eb57c0;
  font-weight: bold;
}
.container-topo {
  margin: 40px 0 10px;
}
.institucional-t1 {
  margin-bottom: 10px;
}
.container {
  overflow: hidden;
  border-radius: 4px;
}
.container-item {
  padding: 10px 0 0;
  border-bottom: 1px solid #dbdbdb;
}
.container-item-text {
  overflow: hidden;
  display: none;
}
.container-item-text p {
  font-size: 14px;
  display: block;
  color: #828282;
  text-align: justify;
  padding: 10px;
}
.institucional-t1 i {
  transition: 200ms;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}
@media (max-width: 767px) {
  .institucional-t1 {
    font-size: 14px;
  }
}
</style>