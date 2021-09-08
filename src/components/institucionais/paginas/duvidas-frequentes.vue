<template lang="html">
  <section>
    <div class="duvidasContainer-topo">
      <h1 class="vitabe-t1"> Perguntas Frequentes </h1>
      <p class="vitabe-t2"> Veja as principais dúvidas dos nossos clientes. </p>
      <p class="vitabe-t2"> Caso ainda tenha alguma pergunta que não apontamos aqui, fale com um de nossos canais de atendimento. </p>
    </div>
    <div class="duvidasContainer">
      <div class="duvidasContainer-item" v-for=" (item, i) in itens " :key=" i ">
        <p class="institucional-t1" @click=" $slideToggle($refs[`faq${i}`][0]); $event.target.classList.toggle('ativo') ">
          {{ item.pergunta }}
          <i class="fa fa-caret-right"></i>
        </p>
        <div :ref=" `faq${i}` " class="duvidasContainer-item-text">
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
          pergunta: "Como devo usar Sono Caps?",
          resposta:
            "Recomendamos a ingestão de 2 (duas) cápsulas ALGUMAS HORAS (CONFIRMAR COM LABORATÓRIO) antes de dormir."
        },
        {
          pergunta: "Em quanto tempo meu sono vai se regularizar?",
          resposta:
            "Os resultados variam de organismo para organismo, mas é possível sentir um sono mais profundo e uma melhora significativa no humor logo nas primeiras semanas de tratamento.",
        },
        {
          pergunta: "Sono Caps é um remédio?",
          resposta:
            "Não. Sono Caps é um Suplemento Alimentar e não precisa de prescrição médica para iniciar o tratamento.",
        },
        {
          pergunta: "Pode ingerir com bebida alcoólica?",
          resposta:
            "O consumo de bebidas alcoólicas não combina com um estilo de vida saudável. No entanto, a ingestão esporádica e moderada de álcool não anula os efeitos do Sono Caps. Apesar disso, o consumo exagerado de bebidas alcoólicas pode prejudicar a performance do produto no organismo.",
        },
        {
          pergunta: "O Sono Caps pode viciar?",
          resposta:
            "Não. Por se tratar de um suplemento alimentar, o consumo do Sono Caps não é capaz de causar dependência ou vício, desde que ingerido de acordo com as recomendações de uso. ",
        },
        {
          pergunta: "Pode tomar mais de 1x ao dia?",
          resposta:
            "Não. Para que o Sono Caps seja consumido de forma segura, o ideal é que ele seja ingerido de acordo com a recomendação de uso descrita na embalagem, ou seja, 2 cápsulas por dia, preferencialmente à noite.",
        },
        {
          pergunta: "Sono Caps engorda?",
          resposta:
            "Não. Sono Caps não engorda, pelo contrário. Por aumentar a produção de serotonina, hormônio responsável pela sensação de bem-estar, ele pode auxiliar no alívio do estresse e, consequentemente, na redução da fome.",
        },
        {
          pergunta: "Posso consumir todos os dias ou apenas quando tiver com dificuldades para dormir?",
          resposta:
            "O ideal é que o consumo do Sono Caps seja diário, para que haja uma melhora na regularidade e qualidade do sono.",
        },
        {
          pergunta: "É necessário ingerir todos os dias para que o sono fique regular?",
          resposta:
            "Sim. Para que haja uma melhora na regularidade e qualidade do sono, recomenda-se o uso diário e contínuo do Sono Caps.",
        },
        {
          pergunta: "Sono Caps possui alguma contraindicação ou efeitos colaterais?",
          resposta:
            "O Sono Caps é um Suplemento Alimentar com ingredientes 100% naturais, porém por possuir XXXX (confirmar com laboratório) em sua composição, o produto NÃO deve ser consumido por gestantes, lactantes e crianças.",
        },
        {
          pergunta: "Quais são os ingredientes do Sono Caps?",
          resposta:
            "Sono Caps é composto por l-triptofano, vitamina B3 (Niacina), vitamina B5 (Ácido Pantotênico), vitamina B6 (Piridoxina) e óleo de semente de abóbora.",
        },
        {
          pergunta: "Sono Caps é aprovado pela Anvisa?",
          resposta:
            "Por se tratar de um Suplemento Alimentar, Sono Caps é um produto dispensado da obrigatoriedade de registro conforme RDC 240/2018.",
        },
        {
          pergunta: "Qual é o prazo de entrega?",
          resposta:
            "O Sono Caps é despachado em média de 24h úteis após aprovação do pagamento, mas dependemos da agilidade dos Correios para que as entregas sejam feitas até o seu endereço.",
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
.duvidasT1 {
  display: block;
  color: #444;
  font-size: 14px;
}
.duvidasContainer-topo {
  margin: 40px 0 0;
}
.institucional-t1 {
  border-bottom: 1px solid #dbdbdb;
}
.duvidasContainer {
  overflow: hidden;
  border-radius: 4px;
}
.duvidasContainer-item {
  padding: 10px 0 0;
  border-bottom: none;
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
  .duvidasContainer-topo {
    margin: 0;
  }
}
</style>