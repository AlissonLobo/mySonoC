<template lang="html">
  <section>
    <div class="vendaInternaSpace">
    </div>
    <div class="vendaInterna topoVendaInterna">
      <div class="titles">
        <img src="@/assets/img/geral/venda-interna/logo.png" alt="" width="38.5" height="18" />
        <span>Venda Interna</span>
      </div>

      <div class="numeroVenda">
        <span>Venda nº</span>
        <span class="numero">{{ dados.vendaInterna.id }}</span>
      </div>

      <div class="nomes">
        <span><span class="operador">Operador</span><span class="cliente"> {{ dados.vendaInterna.usuario.nome }}</span></span>
        <span><span class="operador">Cliente</span><span class="cliente"> {{ dados.id }} - {{ dados.nomeRazao }}</span></span>
      </div>

      <div class="botoes">
        <a :href="`${$siteUrl}/checkout/pagamento`">
          <button type="button" title="Finalizar compra" name="button" class="green statusFinalizar">Finalizar <span class="amoitado">Venda</span></button>
        </a>
        <button @click="alert()" type="button" name="button" class="red cancelarVendaInterna">Cancelar <span class="amoitado">Venda</span></button>
      </div>

      <div class="itens">
        <span><span class="quantidade">Itens carrinho</span><span class="valor itensCarrinho"> {{ carrinho.quantidadeItens }}</span></span>
        <span><span class="quantidade">Valor total</span><span class="valor totalCarrinho"> {{ $formatPrice(carrinho.quantidadeTotal) }}</span></span>
      </div>
    </div>
  </section>
</template>

<script>
import Comunicacao from '@/comunicacao';
export default {
  props: {
    dados: Object,
    carrinho: Object
  },
  data() {
    return {
      popupConfig: {
        type: 'alert',
        title: 'Atenção',
        text: 'Tem certeza que deseja cancelar?',
        buttons: [
          {
            color: 'gray',
            text: 'Não'
          },
          {
            color: 'red',
            text: 'Sim',
            method: this.cancelarVenda
          }
        ]
      }
    }
  },
  methods: {
    alert() {
      Comunicacao.$emit('alert', this.popupConfig);
    },
    cancelarVenda() {
      this.$requestSend('post', '/v2/front/sale/cancel', {}, (success, response) => {
        if (success) {
          window.location.href = response.data.redirect;
          return;
        }
        Comunicacao.$emit('alert', {
          type: 'alert',
          title: 'Atenção',
          text: 'Hove um erro ao cancelar a venda.',
        });
      })
    }
  }
}
</script>

<style lang="css" scoped>
.vendaInternaSpace{
  height: 50px;
}

.vendaInterna{
  width: 100%;
  height: 50px;
  background-color: #3C4252;
  color: #d9dee9;
  font-family: arial;
  position: fixed;
  z-index: 2000;
  left:0px;
  top:0px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
}
.vendaInterna .titles{
  float: left;
  background: #FE7B2D;
  color: white;
  line-height: 2.4;
  padding: 0 20px;
  height: 50px;
  font-size: 20px;
}
.vendaInterna .titles img{
  display: inline-block;
  vertical-align: middle;
  margin-top: -5px;
  margin-right: 5px;
}
.vendaInterna .numeroVenda{
  float: left;
  height: 50px;
  background: #2F3544;
  padding: 0 10px;
  padding-top: 8px;
}
.vendaInterna .numeroVenda span{
  display: block;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
}
.vendaInterna .numeroVenda span.numero{
  font-weight: bold;
  font-size: 16px;
}
.vendaInterna .nomes{
  height: 50px;
  float: left;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: 200px;
}
.vendaInterna .nomes > span{
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.vendaInterna .nomes > span > span.operador{
  font-size: 10px;
  line-height: 1.4;
}
.vendaInterna .nomes > span > span.cliente{
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4;
}
.vendaInterna .botoes{
  float: right;
  padding-right: 5px;
}
.vendaInterna .botoes button{
  cursor: pointer;
  padding: 0 25px;
  height: 40px;
  margin-top: 5px;
  float: left;
  color: #d9dee9;
  font-size: 14px;
  font-family: arial;
  background: transparent;
}
.vendaInterna .botoes button:hover{
  background: #2F3544;
}


.vendaInterna .botoes button.green{
  border: 1px solid #6ABF3F;
  color: #6ABF3F;
  margin-right: 5px;
}
.vendaInterna .botoes button.red{
  border: 1px solid #E8616A;
  color: #E8616A;
}
.vendaInterna .botoes button.green:hover{
  background: #6ABF3F;
  color: white;
}
.vendaInterna .botoes button.red:hover{
  background: #E8616A;
  color: white;
}
.vendaInterna .botoes button.green.disabled{
  border: 1px solid #ccc;
  background: #3C4252 !important;
  color: #ccc !important;
  cursor:default;
  margin-right: 5px;
  opacity: 0.5;
}

.vendaInterna .itens{
  height: 50px;
  float: right;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: auto;
}
.vendaInterna .itens > span{
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.vendaInterna .itens > span > span.quantidade{
  font-size: 10px;
  line-height: 1.4;
}
.vendaInterna .itens > span > span.valor{
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4;
}

@media (max-width: 1000px){
  .vendaInterna .botoes button .amoitado{
    display: none;
  }
  .vendaInterna .titles span{
    display: none;
  }
  .vendaInterna .titles img{
    margin: 0;
    margin-top: 14px;
  }
}
@media (max-width: 767px){
  .vendaInterna, .vendaInternaSpace{
    display:none;
  }
}

</style>
