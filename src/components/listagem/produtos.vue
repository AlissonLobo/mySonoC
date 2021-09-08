<template lang="html">
  <div class="containerProdsListagem">
    <div class="vitrineDefault-container-item"
         :class="{'listagemTipo-homem': listagemConfig[i] && listagemConfig[i].tipo == 'homem', destaque: listagemConfig[i] && listagemConfig[i].destaque}"
         v-for="(prod, i) in listagemData" :key="prod.id">
      <div class="vitrineDefault-container-item-top">
        <div class="vitrineDefault-container-item-top-boxDesc" v-if="prod.precos.de > prod.precos.vista">
          <div class="vitrineDefault-container-item-top-boxDesc-desconto">
            {{ Math.round(100 - (prod.precos.vista * 100 / prod.precos.de)) }}% <br>OFF
          </div>
          <div class="vitrineDefault-container-item-top-boxDesc-descricao" v-html="prod.descricoes.longa"></div>
        </div>
        <div class="vitrineDefault-container-item-top-img">
          <template v-if="prod.selos.length > 0">
            <div class="vitrineSelo" :class="[selo.posicao.x, selo.posicao.y]" v-for="selo in prod.selos" :key="selo.id">
              <img :src="selo[tipoImg.banner]" :alt="selo.nome" v-if="selo[tipoImg.banner] !== ''">
              <span v-if="selo[tipoImg.banner] === ''" :style="{color: selo.cores.texto, backgroundColor: selo.cores.selo}">
                {{ selo.label }}
              </span>
            </div>
          </template>
          <img :src="prod.midias.imagens.length > 0 ? prod.midias.imagens[0][tipoImg.produto].medium : require(`@/${$imgDefaultM}`)" :alt="prod.midias.imagens > 0 ? prod.midias.imagens[0].label : ''">
        </div>
        <div class="vitrineDefault-container-item-top-nome" :to="{...prod.rota}">
          <div class="vitrineDefault-container-item-top-nome-container">
            <b>Contém: </b>
            <h4>{{ prod.nome }}</h4>
          </div>
        </div>
        <div class="boxAvliacaoStars" v-if="prod.avaliacao.quantidade > 0">
          <div class="boxAvliacaoStars-yellow" :style="{width: `${prod.avaliacao.media * 20}%`}"></div>
        </div>
        <div class="seloMaisVendido" v-if="listagemConfig[i] && listagemConfig[i].destaque">MAIS VENDIDO</div>
      </div>
      <div class="vitrineDefault-container-item-bottom">
        <template v-if="prod.status == 'disponivel'">
          <div class="vitrineDefault-container-item-bottom-preco-container" v-if="prod.precos.de > prod.precos.por">
            <span class="vitrineDefault-container-item-bottom-precoMsg">Preço de tabela:</span>
            <span class="vitrineDefault-container-item-bottom-precoDe">
              {{ $formatPrice(prod.precos.de) }}
            </span>
          </div>
          <template v-if="listagemConfig[i] && listagemConfig[i].brinde.ativo == true">
            <div class="vitrineDefault-container-item-bottom-preco-container">
              <span class="vitrineDefault-container-item-bottom-precoMsg">Preço brinde:</span>
              <span class="vitrineDefault-container-item-bottom-precoDe" style="font-weight: normal">
                {{ $formatPrice(listagemConfig[i].brinde.precoBrinde) }}
              </span>
            </div>
            <div class="vitrineDefault-container-item-bottom-preco-container">
              <span class="vitrineDefault-container-item-bottom-precoMsg">Valor total sem desconto:</span>
              <span class="vitrineDefault-container-item-bottom-precoDe" style="font-weight: normal">
                {{ $formatPrice(listagemConfig[i].brinde.precoTotal) }}
              </span>
            </div>
            <br><br>
          </template>
          <div class="vitrineDefault-container-item-bottom-preco-container">
            <span class="vitrineDefault-container-item-bottom-precoMsg">À vista com desconto:</span>
            <span class="vitrineDefault-container-item-bottom-precoPor">
              {{ $formatPrice(prod.precos.vista) }}
            </span>
          </div>
          <br v-if="!listagemConfig[i] || (listagemConfig[i] && listagemConfig[i].brinde.ativo == false)">
          <span class="vitrineDefault-container-item-bottom-condicao">
            Por apenas {{ ultimoSemJuros[i].parcelas }}x de:
            <b>
              <div class="">
                R$
              </div>
              <div class="vitrineDefault-container-item-bottom-condicao-preco">
                {{ ultimoSemJuros[i].valorParcela.toFixed(2).replace('.', ',') }}
              </div>
              s/ juros
            </b>
          </span>
          <button @click="addCart(prod.carrinho)" class="vitrineDefault-container-item-bottom-bt">
            <div>
              COMPRE AGORA
            </div>
          </button>

          <div class="vitrineDefault-container-item-bottom-frete">
            <img src="@/assets/img/ico-frete-gratis.png" alt="">
          </div>
        </template>

        <template v-if="prod.status == 'sobConsulta'">
          <span class="vitrineAlerta">Sob consulta</span>
          <router-link tag="button" :to="{...prod.rota}" class="vitrineDefault-container-item-bottom-bt">
            <span @click.ctrl.exact="openNewtab(prod.url)" @click.middle.exact="openNewtab(prod.url)">
              Solicitar orçamento
            </span>
          </router-link>
        </template>

        <template v-if="prod.status == 'indisponivel'">
          <span class="vitrineAlerta">Produto indisponível</span>
          <router-link tag="button" :to="{...prod.rota}" class="vitrineDefault-container-item-bottom-bt aviseMe">
            <span @click.ctrl.exact="openNewtab(prod.url)" @click.middle.exact="openNewtab(prod.url)">
              Avise-me quando chegar
            </span>
          </router-link>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import Comunicacao from '@/comunicacao'
import { mapGetters } from 'vuex'

export default {
  props: {
    listagemData: Array
  },
  computed: {
    ...mapGetters(['tipoImg']),
    listagemConfig() {
      let data = [], dataItem;
      this.listagemData.forEach((item, i) => {
        dataItem = item.descricoes.opcional2.replace(/<\/?p>/g, '');
        data[i] = item.descricoes.opcional2.length > 0 ? JSON.parse(dataItem) : null;
      });
      return data;
    },
    ultimoSemJuros() {
      let data = [];
      this.listagemData.forEach((prod, n) => {
        let i = 1,
            dataParcelas = prod.precos.parcelamento;
        data[n] = dataParcelas[dataParcelas.length - i];

        while (data[n].taxa != 0 && dataParcelas.length != i) {
          i++;
          data[n] = dataParcelas[dataParcelas.length - i]
        }
      });

      return data;
    }
  },
  methods: {
    openNewtab(link){
      window.open(link)
    },
    addCart(dadosCarrinho) {
      Comunicacao.$emit('toggleLoader', true);
      let {tipo, itens} = dadosCarrinho;
      let itemAdc       = false
      if (tipo && itens) {
        //ADICIONA O PRODUTO AO CARRINHO
        this.$carrinho.add(tipo,itens,(success, response) => {

          response.data.itens.forEach(prod => {
            itemAdc = itemAdc ? itemAdc : prod.hash.idProduto == dadosCarrinho.itens[0].idProduto;
          });
          //PRODUTO ADICIONADO COM SUCESSO
          if(success) return Comunicacao.$emit('toggleCarrinho', {show: true, data: response.data });
          //PROBLEMAS AO ADICIONAR PRODUTO
          alert('Um problema impediu a adição do produto ao carrinho. Tente novamente mais tarde.');
        });
        return;
      }
    }
  }
}
</script>

<style lang="css" scoped>
.containerProdsListagem{
  display: grid;
  grid-template-columns: repeat(3, 30.77%);
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-start;
}
.vitrineDefault{
  margin-bottom: 50px;
}
.containerProdsListagem{
  font-family: 'Open Sans', sans-serif;
}
.vitrineDefault-container{
  display: flex;
}
.vitrineDefault-container-item{
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  padding: 0 20px 20px;
  border-radius: 4px;
  box-shadow: 0px 10px 30px rgb(171 171 171 / 60%);
  margin-bottom: 40px;
}
.vitrineDefault-container-item-top{
  text-align: center;
  flex: 0 1 auto;
  position: relative;
}
.vitrineDefault-container-item-top > a{
  display: block;
}
.vitrineDefault-container-item-top-img{
  position: relative;
  cursor: pointer;
}
.vitrineDefault-container-item-top-nome{
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
}
.vitrineDefault-container-item-top-nome b{
  font-size: 12px;
  line-height: 1.6;
  color: #444;
  display: inline;
}
.vitrineDefault-container-item-top-nome h4{
  font-size: 12px;
  line-height: 1.6;
  color: #888;
  display: inline;
}
.vitrineDefault-container-item-bottom{
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 15px;
  text-align: center;
}
.vitrineDefault-container-item-bottom-preco-container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #888;
}
.vitrineDefault-container-item-bottom-precoDe{
  text-decoration: line-through;
}
.vitrineDefault-container-item-bottom-precoDe,
.vitrineDefault-container-item-bottom-precoPor{
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
}
.vitrineDefault-container-item-bottom-precoPor{
  margin-bottom: 10px;
}
.vitrineDefault-container-item-bottom-precoMsg{
  font-size: 12px;
  line-height: 1.166;
  padding-bottom: 7px;
  display: block;
}
.vitrineDefault-container-item-bottom-condicao{
  font-size: 14px;
  color: #888;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  line-height: 1;
}
.vitrineDefault-container-item-bottom-condicao b{
  font-size: 14px;
  white-space: nowrap;
}
.vitrineDefault-container-item-bottom-condicao b div{
  font-size: 20px;
  display: inline-block;
}
.vitrineDefault-container-item-bottom-condicao b div.vitrineDefault-container-item-bottom-condicao-preco {
  font-size: 45px;
}
.vitrineDefault-container-item-bottom-bt{
  background: #04b900;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 20px 50px 20px 50px;
  border-radius: 5px;
  letter-spacing: 0px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 10px;
  font-family: 'Open sans', sans-serif;
}
.vitrineDefault-container-item-bottom-bt span{
  min-height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vitrineDefault-container-item-bottom-frete{
  margin: 20px 0 14px;
}
.vitrineAlerta{
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #D22E2E;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.vitrineDefault-container-item-top-boxDesc{
  display: flex;
  margin: 0 -20px;
  text-align: left;
}
.vitrineDefault-container-item-top-boxDesc-desconto{
  padding: 15px 15px 15px 15px;
  font-weight: bold;
  font-size: 17px;
  line-height: 17px;
  color: #fff;
  background-color: #42C7A1;
}
.vitrineDefault-container-item-top-boxDesc-descricao{
  display: flex;
  flex: 1 1 auto;
}

/* ESTILOS DOS PRODUTOS COM TIPO HOMEM */
.vitrineDefault-container-item.listagemTipo-homem .vitrineDefault-container-item-top-boxDesc-desconto {
  background-color: #04b900;
}
.vitrineDefault-container-item.listagemTipo-homem.destaque .vitrineDefault-container-item-top-boxDesc-desconto {
  background-color: #32457D;
}
.vitrineDefault-container-item.listagemTipo-homem .vitrineDefault-container-item-bottom-bt {
  background-color: #1ED254;
  height: 60px;
  max-width: 190px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.vitrineDefault-container-item.listagemTipo-homem.destaque .vitrineDefault-container-item-bottom-bt {
  background-color: #333;
}
.vitrineDefault-container-item.listagemTipo-homem .vitrineDefault-container-item-top-img {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vitrineDefault-container-item.listagemTipo-homem .vitrineSelo.center.bottom {
  position: relative;
  order: 2;
  margin-top: -25px;
  margin-bottom: 14px;
}

.seloMaisVendido {
  border-radius:30px;
  color:#000;
  background: yellow;
  padding:7px 23px 7px 23px;
  margin: 15px auto 0;
  font-size: 13px;
  font-weight: bold;
  max-width: 143px;
}

@media (min-width: 1024px) {
  .vitrineDefault-container-item:hover .vitrineDefault-container-item-bottom-bt{
    opacity: 1;
  }
}

/* ================================== MOBILE ================================== */
@media (max-width: 767px) {
  .vitrineDefault-container-item{
    border-color: rgba(177, 191, 198, 0.4);
    margin: 0 10px;
    width: 100%;
  }
  .containerProdsListagem{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .containerProdsListagem > .vitrineDefault-container-item{
    flex-basis: auto;
    margin: 0;
    margin-bottom: 40px;
  }
  .vitrineDefault-container-item-bottom-bt.aviseMe{
    min-height: 35px;
  }
  .vitrineDefault-container-item-top-nome h4{
    font-size: 12px;
  }
}
@media (max-width: 1023px) {
  .vitrineDefault-container-item{
    border-color: #B0BEC5;
  }
  .vitrineDefault-container-item .vitrineDefault-container-item-bottom-bt{
    opacity: 1;
  }
}
</style>

<style>
  .vitrineDefault .tns-horizontal.tns-subpixel > .tns-item{
    display: inline-flex;
  }
  .vitrineDefault .tns-nav{
    bottom: -20px;
  }
  .vitrineDefault .tns-inner{
    padding: 0 60px;
  }
  .vitrineDefault-container-item-bottom-condicao-destaque{
    color: #000;
    font-size: 45px;
    font-weight: 700;
    order: 1;
  }
</style>
