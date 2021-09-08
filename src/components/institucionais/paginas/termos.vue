<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1">Termos e Condições</h1>
      <p class="duvidasT1">Conheça os nossos termos e condições.</p>
    </div>
    <div class="duvidasContainer">
      <div class="duvidasContainer-item" v-for="(item, i) in itens" :key="i">
        <p class="institucional-t1" @click="$slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo')">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref="`faq${i}`" class="duvidasContainer-item-text">
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
          pergunta: "Reembolso / Cancelamento / Estorno",
          resposta: `
          <p>
          O reembolso só é autorizado no caso de não uso do produto, estando lacrado e sem qualquer tipo de violação no frasco, precisa ser devolvido ao remetente, sendo do cliente o custo do envio, dentro do prazo máximo de 7 dias após recebimento.
          </p> 
          <br> 
          <p>
          O estorno/reembolso ocorre no prazo de até 10 dias.
          </p> 
          <br> 
          <p> 
          Boleto Bancario: O reembolso acontece dentro da plataforma de pagamento MERCADO PAGO, ficando disponível para resgate em conta bancaria.
          </p> 
          <br> 
          <p>
          Cartão de Crédito: Voltará como credito em sua fatura do cartão em até 30 dias úteis.
          </p> 
          <br> 
          <p>
          Toda solicitação deve ser encaminhada para o e-mail atendimento@vitabe.com.br informando CPF, numero do pedido, fotos anexadas do produto a ser devolvido, e explicação do fato.
          </p> 
          <br> 
         `},
       {
          pergunta: "Desafio Sono Caps 90 Dias",
          resposta:`
       Conforme anunciado, ao comprar o tratamento de 90 do Sono Caps você automaticamente passa a participar do Desafio 90 Dias. 
       <br> <br>
       Sendo assim, caso não tenha nenhum dos resultados prometidos e visíveis nós devolveremos o seu dinheiro. 
       <br> <br>
       Benefícios do Sono Caps: Acelera em até 6x, crescimento de até 4cm ao mês, diminui em 80% a queda, fortalece as unhas, estimula a produção de colágeno, melhora o sistema imunológico, reduz o frizz, aumenta o volume e o brilho.
       <br><br>
       indispensável o anexo das fotos mensais do cabelo sendo datadas mês a mês enviadas para o e-mail atendimento@vitabe.com.br com o titulo Desafio 90 Dias. 
       <br> <br>
       Obs: Foto com o cabelo todo para trás e o ângulo da foto de costas.
       <br> <br>
       O cabelo deve estar nas mesmas condições em todas as fotos.Vale lembrar que, o Desafio 90 Dias é válido apenas para clientes que comparem 3 potes do Sono Caps em um único pedido, não estendendo para compras de menos.
       <br> <br>
       Ao fim do tratamento de 90 dias e dentro do mesmo período a contar da data de recebimento da compra.</p>     
        `},
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.institucional-t1 {
  margin-bottom: 10px;
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
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item {
  padding: 0;
  margin-bottom: 90px;
}
.duvidasContainer-item-text {
  overflow: hidden;
  display: none;
}
.duvidasContainer-item-text p {
  font-size: 14px;
  display: block;
  color: #828282;
  text-align: justify;
  padding: 10px 20px;
}
.duvidasContainer-item-text b.important {
  color: #000;
  font-weight: bold;
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