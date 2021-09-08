<template lang="html">
  <section class="paginacao">
    <div class="row">
      <div class="small-12 columns">
        <div class="paginacao-container">
          <span class="paginacao-mostrando">
            Mostrando {{ dadosPaginacao.offset + 1 }}-{{ maxExibindo }} de {{ dadosPaginacao.total }} encontrado(s)
          </span>

          <div class="paginacao-bts">
            <button @click="paination($route.query.pg - 1)" :disabled="!($route.query.pg - 1 > 0)" type="button" name="button" class="paginacao-bts-anterior paginacao-bts-bt">
              <svg xmlns="http://www.w3.org/2000/svg" width="7.9" height="14.044" viewBox="0 0 7.9 14.044">
                <g id="_111" data-name="111" transform="translate(116.16 -2.324) rotate(90)">
                  <path id="Caminho_215" data-name="Caminho 215" d="M13.783,64.214a.843.843,0,0,0-.617-.261H.878a.843.843,0,0,0-.617.261.861.861,0,0,0,0,1.234L6.4,71.592a.861.861,0,0,0,1.234,0l6.144-6.144a.861.861,0,0,0,0-1.234Z" transform="translate(2.324 44.307)" fill="#b0bec5"/>
                </g>
              </svg>
              <span>Anterior</span>
            </button>
            <div class="sliderBtsMobile">
              <div class="sliderBtsMobile-track" ref="sliderPagesTrack">
                <button @click="paination(item)" type="button" class="paginacao-bts-bt" :class="{selected: $route.query.pg == item || (!$route.query.pg && item == 1)}" v-for="item in dadosPaginacao.pages" :key="item">
                  {{item}}
                </button>
              </div>
            </div>
            <button @click="paination((parseInt($route.query.pg) || 1) + 1)" :disabled="parseInt($route.query.pg) + 1 > dadosPaginacao.pages" type="button" name="button" class="paginacao-bts-bt paginacao-bts-proximo">
              <span>Próximo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.9" height="14.044" viewBox="0 0 7.9 14.044">
                <g id="_111" data-name="111" transform="translate(-51.26 16.367) rotate(-90)">
                  <path id="Caminho_189" data-name="Caminho 189" d="M13.783,64.214a.843.843,0,0,0-.617-.261H.878a.843.843,0,0,0-.617.261.861.861,0,0,0,0,1.234L6.4,71.592a.861.861,0,0,0,1.234,0l6.144-6.144a.861.861,0,0,0,0-1.234Z" transform="translate(2.324 -12.693)" fill="#b0bec5"/>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dadosPaginacao: Object
  },
  data() {
    return {
      pageParam: screen.width > 767 ? 5 : 3
    }
  },
  computed: {
    maxExibindo() {
      const soma = this.dadosPaginacao.offset + this.dadosPaginacao.limit;
      return soma > this.dadosPaginacao.total ? this.dadosPaginacao.total : soma;
    }
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal.query.pg != oldVal.query.pg) {
        this.changeNextAndPrev();
        if (newVal.query.pg < this.dadosPaginacao.pages) {
          let translate = (newVal.query.pg - (this.pageParam - 1)) * 45;
          this.$refs.sliderPagesTrack.style.transform = `translate(-${translate < 0 ? 0 : translate}px)`
        }
      }
    }
  },
  methods: {
    changeNextAndPrev(){
      if (this.$route.query.pg < this.dadosPaginacao.pages) {
        document.querySelector('link[rel="next"]').setAttribute('href', `${this.$siteUrl}${this.$route.path}?pg=${this.$route.query.pg ? (parseInt(this.$route.query.pg)+1) : 2}`);
      }
      else {
        document.querySelector('link[rel="next"]').remove();
      }
      if (this.$route.query.pg && this.$route.query.pg > 1) {
        if (document.querySelector('link[rel="prev"]')) {
          document.querySelector('link[rel="prev"]').setAttribute('href', `${this.$siteUrl}${this.$route.path}?pg=${(parseInt(this.$route.query.pg)-1)}`);
          return;
        }
        const prev = document.createElement('link');
        prev.setAttribute('rel', 'prev');
        prev.setAttribute('href', `${this.$siteUrl}${this.$route.path}?pg=${(parseInt(this.$route.query.pg)-1)}`);
        document.querySelector('head').appendChild(prev)
        return;
      }
      document.querySelector('link[rel="prev"]').remove();
    },
    paination(numPg){
      this.$router.push({query: {...this.$route.query, pg: numPg}});
    }
  },
  mounted() {
    if (this.$route.query.pg >= this.pageParam) {
      let pg = this.$route.query.pg < this.dadosPaginacao.pages ? this.$route.query.pg : this.$route.query.pg - 1;
      this.$refs.sliderPagesTrack.style.transform = `translate(-${(pg - (this.pageParam - 1)) * 45}px)`
    }
  },
  created(){
    const next = document.createElement('link');
    next.setAttribute('rel', 'next');
    next.setAttribute('href', `${this.$siteUrl}${this.$route.path}?pg=${this.$route.query.pg ? (parseInt(this.$route.query.pg)+1) : 2}`);
    document.querySelector('head').appendChild(next)
    if (this.$route.query.pg && this.$route.query.pg > 1) {
      const prev = document.createElement('link');
      prev.setAttribute('rel', 'prev');
      prev.setAttribute('href', `${this.$siteUrl}${this.$route.path}?pg=${(parseInt(this.$route.query.pg)-1)}`);
      document.querySelector('head').appendChild(prev)
    }
  }
}
</script>


<style media="screen">
html{
  scroll-behavior: smooth;
}
</style>

<style lang="css" scoped>
.paginacao{
  margin-top: 50px;
}
.paginacao-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.paginacao-mostrando{
  font-size: 12px;
}
.paginacao-bts,
.sliderBtsMobile,
.sliderBtsMobile .sliderBtsMobile-track{
  display: flex;
}
.sliderBtsMobile{
  max-width: 215px;
  overflow: hidden;
}
.paginacao-bts-bt{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #B0BEC5;
  background-color: #fff;
  height: 35px;
  min-width: 35px;
}
.paginacao-bts-bt:not(:last-child){
  margin-right: 10px
}
.paginacao-bts-bt.selected{
  background-color: #214861;
  border-color: #214861;
  color: #fff;
}
.paginacao-bts-bt.selected,
.paginacao-bts-bt[disabled]{
  pointer-events: none;
}
@media (min-width: 1024px) {
  .paginacao-bts-bt:hover{
    background-color: #214861;
    border-color: #214861;
    color: #fff;
  }
  .paginacao-bts-bt:hover svg path{
    fill: #fff;
  }
}
.paginacao-bts-anterior{
  margin-right: 15px;
}
.paginacao-bts-proximo{
  margin-left: 15px;
}
.paginacao-bts-proximo,
.paginacao-bts-anterior{
  padding: 0 15px;
}
.paginacao-bts-anterior span{
  margin-left: 5px
}
.paginacao-bts-proximo span{
  margin-right: 5px
}
@media (max-width: 1023px) {
  .paginacao{
    margin-bottom: 20px;
  }
  .paginacao-mostrando{
    display: none
  }
  .paginacao-container{
    justify-content: center;
  }
  .sliderBtsMobile{
    max-width: 125px;
  }
  .paginacao-bts-proximo,
  .paginacao-bts-anterior{
    margin: 0;
  }
  .sliderBtsMobile{
    margin-right: 10px
  }
}
@media (max-width: 340px) {
  .paginacao-container{
    display: flex;
    justify-content: center;
  }
  .sliderBtsMobile{
    max-width: 115px;
  }
  .sliderBtsMobile{
    margin-right: 5px
  }
  .paginacao-bts-bt:not(:last-child){
    margin-right: 5px;
  }
  .paginacao-bts-proximo, .paginacao-bts-anterior{
    padding: 0 10px;
  }
}
</style>
