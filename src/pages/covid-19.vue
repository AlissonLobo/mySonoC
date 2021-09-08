<template lang="html">
  <section>
    <div class="containerBanner text-center" v-if="$screen.width > 767">
      <img :src="require('@/assets/img/institucionais/banner-covid-desktop.jpg')" alt="Nossos cuidados">
    </div>
     <div class="containerBanner text-center" v-else>
      <img :src="require('@/assets/img/institucionais/banner-covid-mobile.jpg')" alt="Nossos cuidados">
    </div>
  
    <div class="row align-center">
      <div class="column small-12 text-center">
         <img :src="require('@/assets/img/institucionais/contra-covid.jpg')" alt="Contra coronavírus">
      </div>
      <div class="column small-12 large-9 text-center">
         <div class="containerTxt">
          <p> 
            A gente aqui na New Hair tem o bem-estar e a saúde de nossos colaboradores, clientes e parceiros como prioridade. 
            <br class="hide-for-small-only">
            Sabemos que os produtos que vendemos vão ajudar as pessoas a enfrentar esse momento difícil.
            <br class="hide-for-small-only">
            Seguindo as premissas estabelecidas pela Organização Mundial de Saúde e a orientação da nossa área interna de segurança e
            saúde, definimos ações adicionais preventivas e corretivas para assegurar um ambiente saudável para todos.  
          </p>
          <p>
            Reforçamos nossos serviços de limpeza nas salas de escritórios e centros de distribuição. Demos amplo acesso a informações
            seguras sobre o assunto para todo nosso time, por meio do compartilhamento interno de vídeos e cartilhas, comunicando as
            formas de contágio e recomendações para a prevenção. 
          </p>
          <p>
            Continuamos trabalhando para garantir a qualidade dos nossos produtos e serviços, <br class="hide-for-small-only">
            e um ambiente de compra e de trabalho seguro para todos. 
          </p>
         </div>
      </div>
    </div>

    <div class="row align-center containerQuestions">
      <div class="column small-12 text-center">
         <img :src="require('@/assets/img/institucionais/duvidas.jpg')" alt="Tire suas dúvidas">
      </div>
      <div class="column small-12 large-6 text-center">
        <div class="containerDuvidas">
          <div v-for=" (item, i) in itens.slice(0,4)" :key="i">
            <p> {{item.pergunta}}</p>
            <p> {{item.resposta}}</p>
          </div>
        </div>
      </div>
       <div class="column small-12 large-6 text-center">
        <div class="containerDuvidas">
          <div v-for=" (item, i) in itens.slice(4,7)" :key="i">
            <p> {{item.pergunta}}</p>
            <p> {{item.resposta}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="containerBg">
      <div class="row containerVideos">

        <div class="column small-12 large-6 text-center">
          <div>
            <img :src="require('@/assets/img/institucionais/logistica-transporte.jpg')" alt="Logística e Transporte">
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QGPBqQZ7mSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="column small-12 large-6 text-center">
          <div>
            <img :src="require('@/assets/img/institucionais/industria-producao.jpg')" alt="Indústria e Produção">
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2-t6BhC8xZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="column small-12">
          <router-link class="facaSeuPedido" to="/produtos">FAÇA SEU PEDIDO</router-link>
        </div>

      </div>

      <div class="imgFinal"></div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          pergunta: "Dá pra comprar na New Hair normalmente?",
          resposta:
            "Sim. Nossos canais de venda estão funcionando como sempre. Nosso serviço de atendimento também está à disposição.",
        },
        {
          pergunta: "O tempo de entrega mudou?",
          resposta:
            "Por enquanto estamos conseguindo manter as entregas nos prazos previstos. Se houver alguma alteração, avisaremos por e-mail.",
        },
        {
          pergunta: "O atendimento continua funcionando?",
          resposta:
            "Sim. Todos os nossos canais de atendimento estão disponíveis, via E-mail, Instagram, Facebook e Chat Online. Vale lembrar que nossos colaboradores recebem material instrucional diário com o reforço das medidas de segurança e conscientização constante.",
        },
        {
          pergunta: "É possível devolver produtos?",
          resposta:
            "Sim, a devolução de produtos pode ser realizada normalmente diretamente em nosso site, através do nosso Chat Online.",
        },
        {
          pergunta: "Posso me contaminar através do pacote?",
          resposta:
            "Até o momento não há registros de pessoas contaminadas através de produtos. Mas a palavra do momento é precaução. Ao receber sua entrega, lave bem as mãos e use álcool em gel, se possível.",
        },
        {
          pergunta:
            "Como evitar o risco de contaminação no momento da entrega?",
          resposta:
            "A orientação geral é manter ao menos 1 (um) metro de distância do entregador. E lembre-se: lave bem as mãos e use álcool em gel sempre que puder.",
        },
        {
          pergunta:
            "O que a New Hair está fazendo para manter a segurança dos clientes e funcionários?",
          resposta:
            "Acompanhamos as orientações das autoridades de saúde locais e internacionais à medida que essa situação avança. Nossos centros de distribuição continuam funcionando cumprindo todas as orientações de segurança globais da Amazon. Trabalhamos para que os produtos sejam manuseados com segurança tanto por nossa equipe, quanto por nossos clientes. Além disso, quando possível, nossos funcionários estão trabalhando remotamente de suas casas.",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.containerBanner {
  padding-bottom: 40px;
}
.containerTxt p {
  color: #444;
  font-size: 14px;
  margin-bottom: 1rem;
}
.containerTxt {
  padding: 38px 0 40px;
}
.containerDuvidas {
  text-align: left;
  color: #444;
}
.containerDuvidas p:nth-child(1) {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 1rem;
}
.containerDuvidas p:nth-child(2) {
  font-size: 14px;
}
.containerBg {
  padding-top: 40px;
  background: #abd9d9;
  margin-top: 25px;
}
.containerVideos img {
  margin-bottom: 1rem;
}
.facaSeuPedido {
  margin: 50px auto 10px;
}
.imgFinal {
  background-image: url("../assets/img/institucionais/titulo-final-rodape.png");
  width: 100%;
  height: 180px;
  background-position: center bottom;
  background-repeat: no-repeat;
}
@media (min-width: 1024px) {
  .containerDuvidas div {
    padding: 20px;
  }
}
@media (max-width: 767px) {
  .containerQuestions img {
    width: 100%;
  }
  .containerDuvidas div {
    padding: 20px 0;
  }
  .containerDuvidas {
    padding: 0 10px;
  }
  iframe {
    width: 100%;
    height: 300px;
  }
  .imgFinal {
    background-size: 300% auto;
    height: 90px !important;
  }
  .containerVideos img {
    margin: 1rem 0;
  }
}
</style>