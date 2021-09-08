<template lang="html">
  <section>
    <div class="container-topo">
      <h1 class="vitabe-t1">Termos e Condições</h1>
      <p class="vitabe-t2">Conheça os nossos termos e condições.</p>
    </div>
    <div class="container">
      <div class="container-item" v-for=" (item, i) in itens " :key=" i ">
        <p class="institucional-t1" @click=" $slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo') ">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref=" `faq${i}` " class="container-item-text">
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
          pergunta: "Reembolso / Cancelamento / Estorno  ",
          resposta: `
            O reembolso só é autorizado no caso de não uso do produto, estando lacrado e sem qualquer tipo de violação no frasco, precisa ser devolvido ao remetente, sendo do cliente o custo do envio, dentro do prazo máximo de 7 dias após recebimento. 
          <br><br> 
             O estorno/reembolso ocorre no prazo de até 10 dias. 
          <br><br>
          <p>
            Boleto Bancario: O reembolso acontece dentro da plataforma de pagamento MERCADO PAGO, ficando disponível para resgate em conta bancaria. 
          <br><br>
            Cartão de Crédito: Voltará como credito em sua fatura do cartão em até 30 dias úteis. 
          <br><br>
            Toda solicitação deve ser encaminhada para o e-mail atendimento@vitabe.com.br informando CPF, numero do pedido, fotos anexadas do produto a ser devolvido, e explicação do fato. 
            `,
        },
        {
          pergunta: "Defeito / Avaria  ",
          resposta:
            " Dentro do prazo de 7 dias após o recebimento, se constatar algum problema, entre em contato com o nosso atendimento via e-mail (atendimento@vitabe.com.br) informando CPF, número do pedido, relate o seu problema e anexe foto se possível. ",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
section {
  margin-bottom: 90px;
}
.container-topo {
  margin: 40px 0 10px;
}
.institucional-t1 {
  margin-bottom: 10px;
  border: none;
}
.container {
  overflow: hidden;
  border-radius: 4px;
}
.container-item {
  padding: 0 0 5px;
  border-bottom: 1px;
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
  padding: 10px 20px;
}
.institucional-t1 {
  font-weight: normal;
}
.institucional-t1:hover {
  color: #362b62;
  font-weight: bold;
}
.institucional-t1:hover i,
.institucional-t1 i {
  transition: 200ms;
  color: #828282;
}
.institucional-t1.ativo i {
  transform: rotate(90deg);
}
@media (max-width: 767px) {
  .container-topo {
    margin: 0;
  }
}
</style>