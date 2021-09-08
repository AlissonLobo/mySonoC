<template lang="html">
  <section @click.stop="" id="carrinhoLateral">
    <div class="carrinhoLateral-mainContainer">
      <!-- PRELOADER -->
      <transition name="fadeNoDelay">
        <div class="carrinhoLateral-preloader" v-if="loader">
          <img src="@/assets/img/geral/preloader.svg" alt="">
        </div>
      </transition>

      <!-- TOPO -->
      <div class="carrinhoLateral-topo">
        <span class="carrinhoLateral-t1">Carrinho de compras</span>
        <button class="carrinhoLateral-fechar" @click="closeCarrinho()">
          <svg class="icon-inline modal-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
        </button>
      </div>

      <!-- PRODUTOS -->
      <div class="carrinhoLateral-prods">
        <template v-if="errorMsgs">
          <span v-html="errorMsg.mensagem" v-for="(errorMsg, i) in errorMsgs" :key="i" :class="errorMsg.tipo" class="carrinhoLateral-errorMsg"></span>
        </template>
        <template v-if="produtos && produtos.length > 0">
          <div class="carrinhoLateral-prods-item" v-for="(produto, i) in produtos" :key="i">
            <div class="carrinhoLateral-prods-item-img">
              <img :src="produto.imagem ? produto.imagem : require(`@/${$imgDefaultM}`)" alt="">
            </div>
            <div class="carrinhoLateral-prods-item-dados">
              <p class="carrinhoLateral-prods-item-dados-nome">
                {{ produto.nome }}
              </p>
              <p class="carrinhoLateral-prods-item-dados-frete">
                Frete grátis
              </p>
              <div class="carrinhoLateral-prods-item-dados-flex">
                <div class="carrinhoLateral-prods-item-dados-qtd">
                  <button type="button" name="button" @click="produto.quantidade > 1 ? produto.quantidade-- : produto.quantidade; alteraQtd(produto.quantidade, i, true)">
                    <svg class="icon-inline icon-w-12 svg-icon-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M368 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                  </button>
                  <input type="text" v-model="produto.quantidade" value="" @keyup="alteraQtd(produto.quantidade, i)" onkeypress="return event.charCode >= 48 && event.charCode <= 57">
                  <button type="button" name="button" @click="produto.quantidade++; alteraQtd(produto.quantidade, i, true)">
                    <svg class="icon-inline icon-w-12 svg-icon-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                  </button>
                </div>
                <div class="carrinhoLateral-prods-item-dados-attrPreco">
                  <span class="carrinhoLateral-prods-item-dados-attrPreco-preco">{{ $formatPrice(produto.precos.precoPor) }}</span>
                </div>
              </div>
            </div>
            <div class="carrinhoLateral-prods-remove">
             <!-- <button type="button" name="button" @click="rmvItem(i)">
                <svg class="icon-inline svg-icon-text icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path></svg>
              </button>-->
              <img  src="@/assets/img/geral/lixo.png" width="22px"  @click="rmvItem(i)">  
            </div>
          </div>
        </template>
        <div id="carrinhoVazio" v-else>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="%233d9ccc"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"/></svg>
          </span>
          <p>O carrinho de compras está vazio.</p>
        </div>
      </div>

      <!-- RODAPÉ -->
      <div class="carrinhoLateral-rodape" v-if="subtotal && produtos.length > 0">
        <div class="carrinhoLateral-rodape-subtotal">
          <span class="carrinhoLateral-rodape-subtotal-t1">
            Subtotal
          </span>
          <span class="carrinhoLateral-rodape-subtotal-valor">
            {{ $formatPrice(subtotal.valor) }}
          </span>
        </div>
        <div class="carrinhoLateral-rodape-total">
          <span class="carrinhoLateral-rodape-total-t1">
            Total
          </span>
          <span class="carrinhoLateral-rodape-total-valor">
            {{ subtotal.descontoVista ? $formatPrice(subtotal.descontoVista.valor) : $formatPrice(subtotal.valor) }}
          </span>
        </div>
        <div class="carrinhoLateral-rodape-parcelamento" v-if="parcelamento">
          Ou até {{ parcelamento.parcelas }}x de {{ this.$formatPrice(parcelamento.valorParcela) }} sem juros
        </div>
        <span class="carrinhoLateral-rodape-totalDesconto" v-if="subtotal.descontoVista && subtotal.descontoVista.porcentagem > 0">Valor com <b>{{ subtotal.descontoVista.porcentagem }}% de desconto</b> no boleto ou depósito.</span>
        <div class="carrinhoLateral-rodape-bts">
          <div class="" :class="{disabled: subtotal.valor > 1000}">
            <a :href="`${$siteUrl}checkout/carrinho/`" class="carrinhoLateral-rodape-carrinho">Finalizar compra</a>
          </div>
          <p class="alertMax" v-if="subtotal.valor > 1000">
            Valor máximo do pedido é de R$1000
          </p>
          <div class="carrinhoLateral-rodape-fechar">
            <router-link to="/produtos">
              <span @click="closeCarrinho()">
                Ver mais produtos
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comunicacao from '@/comunicacao.js';

export default {
  props: {
    dataCarrinho: Object
  },
  data() {
    return {
      produtos: null,
      subtotal: null,
      delayUpdate: null,
      loader: false,
      errorMsgs: null,
      qtdItens: 0
    }
  },
  computed: {
    parcelamento() {
      let result = null;
      if (this.subtotal.parcelamento) {
        this.subtotal.parcelamento.forEach((item, i) => {
          if (!this.subtotal.parcelamento[i+1] || this.subtotal.parcelamento[i+1].taxa > 0) {
            result = item;
          }
        });
      }
      return result;
    }
  },
  methods: {
    closeCarrinho() {
      Comunicacao.$emit('toggleCarrinho', {show: false});
      Comunicacao.$emit('toggleFundoEscuro', {acao: false});
    },
    rmvItem(id) {
      this.loader = true;
      let item    = this.produtos[id].hash
      item.tipo   = this.produtos[id].tipo


      this.$carrinho.remove(item, (success, response) => {
        this.produtos = success ? response.data.itens : this.produtos
        this.subtotal = success ? response.data.subtotal : this.subtotal
        this.loader   = false;
        this.qtdItens = response.data.quantidadeTotal;

        Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
        Comunicacao.$emit('updateSubTotal', response.data.subtotal)
      });
    },
    alteraQtd(qtd, id, clickBt = false) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || clickBt) {
        clearTimeout(this.delayUpdate)
        this.errorMsgs = null;
        this.delayUpdate = setTimeout(() => {
          this.loader = true;
          qtd = parseInt(qtd);
          let item = this.produtos[id].hash
          item.tipo = this.produtos[id].tipo
          item.quantidade = qtd;
          this.$carrinho.update(item, (success, response) => {
            this.errorMsgs = response.data.mensagens;

            setTimeout(() => {
              this.errorMsgs = null;
            }, 5000);
            this.produtos = success ? response.data.itens : this.produtos
            this.subtotal = success ? response.data.subtotal : this.subtotal
            this.loader   = false;
            this.qtdItens = response.data.quantidadeTotal;

            Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
            Comunicacao.$emit('updateSubTotal', response.data.subtotal)
          });
        }, 300);
      }
    }
  },
  created() {
    Comunicacao.$emit('toggleLoader', false);
    if (!this.dataCarrinho) {
      this.$carrinho.get((success, response) => {
        this.produtos = response.data.itens;
        this.subtotal = response.data.subtotal;
        this.qtdItens = response.data.quantidadeTotal;

        Comunicacao.$emit('updateNumCarrinho', response.data.quantidadeTotal)
        Comunicacao.$emit('updateSubTotal', response.data.subtotal)
      });
      return;
    }
    this.produtos  = this.dataCarrinho.itens;
    this.subtotal  = this.dataCarrinho.subtotal;
    this.qtdItens  = this.dataCarrinho.quantidadeTotal;
    this.errorMsgs = this.dataCarrinho.mensagens;
    Comunicacao.$emit('updateNumCarrinho', this.dataCarrinho.quantidadeTotal);
    Comunicacao.$emit('updateSubTotal', this.dataCarrinho.subtotal);
  },
  mounted() {
    document.querySelector('body, html').style.overflow = 'hidden';
    setTimeout(() => {
      Comunicacao.$emit('toggleFundoEscuro', {acao: true});
      document.querySelector('body').addEventListener('click', this.closeCarrinho);
    }, 300);
  },
  beforeDestroy() {
    document.querySelector('body').removeEventListener('click', this.closeCarrinho);
    document.querySelector('body, html').style.overflow = '';
  }
}
</script>

<style lang="css" scoped>
#carrinhoLateral {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 22;
  width: 100%;
  max-width: 500px;
  height: 100%;
}
#carrinhoLateral * {
  font-family: 'Open sans', sans-serif;
}
.carrinhoLateral-mainContainer{
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 767px) {
  #carrinhoLateral{
    max-width: 320px;
  }
}

/* PRELOADER */
.carrinhoLateral-preloader{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
}
.carrinhoLateral-preloader img{
  width: 150px;
  margin-bottom: 300px;
}

/* TOPO */
.carrinhoLateral-topo{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 15px;
  height: 55px;
  flex: 0 1 auto;
  background-color: #864AC6;
}
.carrinhoLateral-fechar{
  display: flex;
  width: 32px;
  height: 32px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #fff;
  transition: 200ms;
}
.carrinhoLateral-fechar:hover{
  background-color: #fff;
}
.carrinhoLateral-fechar svg{
  width: 20px;
  height: 20px;
  fill: #fff;
}
.carrinhoLateral-fechar:hover svg{
  fill: #864AC6;
}
.carrinhoLateral-t1{
  font-size: 20px;
  color: #fff;
}

/* PRODUTOS */
/* msg de erro */
.carrinhoLateral-errorMsg{
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: #ff0000;
  margin-top: 10px;
}
/* ------------- */

.carrinhoLateral-prods{
  padding: 0 14px;
  flex: 1 1 auto;
  overflow: auto;
}
.carrinhoLateral-prods-item{
  display: flex;
  padding: 20px 0 12px;
  position: relative;
}
.carrinhoLateral-prods-item-img{
  padding: 0 5px;
  flex: 0 0 auto;
}
.carrinhoLateral-prods-item-img img{
  max-width: 68px;
}
.carrinhoLateral-prods-item-dados{
  flex: 1 1 auto;
}
.carrinhoLateral-prods-item-dados-nome{
  font-size: 14px;
  display: block;
  padding-right: 15px;
}
.carrinhoLateral-prods-item-dados-frete{
  font-size: 10px;
  font-weight: 700;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80px;
  color: #fff;
  text-transform: uppercase;
  background-color: #864AC6;
  border-radius: 12px;
  margin-top: 4px;
}
.carrinhoLateral-prods-item-dados-attrPreco{
  display: flex;
  align-items: center;
}
.carrinhoLateral-prods-item-dados-attrPreco-attr{
  font-size: 12px;
  color: rgba(6, 11, 17, 0.8);
  line-height: 1.66;
}
.carrinhoLateral-prods-item-dados-attrPreco-preco{
  font-size: 14px;
}
.carrinhoLateral-prods-item-dados-flex{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.carrinhoLateral-prods-item-dados-qtd{
  display: inline-flex;
  margin-top: 14px;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 120px;
  border-radius: 10px;
  transition: 400ms ease;
}
.carrinhoLateral-prods-item-dados-qtd:hover{
  border: 1px solid #864AC6;
}
.carrinhoLateral-prods-item-dados-qtd button{
  width: 33.333%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #939393;
  font-size: 15px;
    border-radius: 20px;
  background: none;
  border: none;
}
.carrinhoLateral-prods-item-dados-qtd button svg{
  width: 10px;
  fill: #864AC6;
}
.carrinhoLateral-prods-item-dados-qtd input{
  color: #000;
  width: 33.333%;
  height: 38px;
  text-align: center;
  font-size: 14px;
  border: none;
  position: relative;
  z-index: 2;
  padding: 0;
  font-weight: 700;
}
.carrinhoLateral-prods-remove{
  position: absolute;
  right: 0;
}
.carrinhoLateral-prods-remove button{
  width: 20px;
  height: 20px;
  max-width: 15px;
}
.carrinhoLateral-prods-remove img{
  cursor: pointer;
}
/* RODAPÉ */
.carrinhoLateral-rodape {
  flex: 0 1 auto;
  padding: 0 20px 25px;
}
.carrinhoLateral-rodape-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #864AC6;
  font-size: 28px;
  font-weight: bold;
  line-height: normal;
}
.carrinhoLateral-rodape-totalDesconto{
  font-size: 16px;
  display: block;
 color: #3d9544;
  text-align: center;
  margin: 0 -13px; 
}
.carrinhoLateral-rodape-subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
}
.carrinhoLateral-rodape-parcelamento{
  font-size: 12px;
  font-weight: 700;
  text-align: right;
}
.carrinhoLateral-rodape-carrinho{
  display: flex;
  height: 46px;
  width: 100%;
  background-color: #864AC6;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  letter-spacing: 2px;
  margin-right: 10px;
  text-transform: uppercase;
  margin-top: 30px;
  transition: 400ms ease;
}
.carrinhoLateral-rodape-carrinho:hover{
  opacity: .8;
}
.disabled{
  cursor: not-allowed;
}
.disabled .carrinhoLateral-rodape-carrinho{
  pointer-events: none;
  background-color: #DDD;
  opacity: .8;
}
.carrinhoLateral-rodape-fechar{
  text-align: center;
  font-size: 14px;
  line-height: normal;
  margin-top: 10px;
  transition: 400ms;
}
.carrinhoLateral-rodape-fechar:hover{
  opacity: .5;
}
.alertMax{
  color: red;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

#carrinhoVazio {
  height: 38px;
  border: 1px solid #3d9ccc;
  color: #3d9ccc;
  text-align: center;
  margin-top: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#carrinhoVazio span{
  display: flex;
}
#carrinhoVazio svg{
  fill: #3d9ccc;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

@media (max-width: 767px) {
  #carrinhoLateral {
    max-width: 100%;
  }
  .carrinhoLateral-rodape-bts {
    flex-direction: column;
  }
  .carrinhoLateral-rodape-carrinho{
    margin-right: 0px;
    margin-bottom: 10px;
  }
  
}
</style>
