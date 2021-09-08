<template lang="html">
  <section>
    
    <div v-if="$screen.width > 767">
      <img id="quemSomos-banner" :src="require('@/assets/img/institucionais/quem-somos/banner-topo.jpg')" alt="Nós existimos para ajudá-lo a ser você mesmo">
    </div>
    <div v-else>
      <img id="quemSomos-banner" :src="require('@/assets/img/institucionais/quem-somos/banner-topo-mob.jpg')" alt="Nós existimos para ajudá-lo a ser você mesmo">
    </div>

    <div class="row text-center align-center">
      <div class="columns small-12 large-9 container-bemVindo">
        <p class="txt-1">SOBRE NÓS</p>
        <p class="txt-2">SEJA BEM-VINDO</p>
        <p class="txt-3">
          Durante mais de 5 anos, dedicamos a nossa energia e nossas competências unicamente a uma atividade: a beleza.
          ptamos por oferecer a nossa expertise a serviço de mulheres e homens no mundo inteiro, atendendo à infinita diversidade
          de seus desejos de beleza. Temos o compromisso de cumprir esta missão de forma ética e responsável.
        </p>
      </div>
    </div>

    <div class="row text-center align-center container-MissaoVisaoValores">
      <div class="columns small-12 large-4">
          <p class="txt-2">missão</p>
          <p class="txt-3">
            Inspirar e transformar a vida de pessoas com nutricosméticos naturais de excelência e com altissíma qualidade.
          </p>
      </div>

      <div class="columns small-12 large-4">
          <p class="txt-2">visão</p>
          <p class="txt-3">
            A melhor e mais inovadora experiência de compra no mercado da beleza do homem e da mulher.
          </p>
      </div>

      <div class="columns small-12 large-4">
          <p class="txt-2">valores</p>
          <p class="txt-3">
            Adrenalina, espírito de equipe, inspiração, inovação e foco.
          </p>
      </div>
    </div>

    <div class="row text-center align-center ">
      <div class="columns small-12">
          <p class="txt-1">NHC LOVERS</p>
          <p class="txt-2"> quem usa, ama </p>
          <div class="container-quemUsa">
            <div v-for="(famoso, i) in quemUsa" :key="i">
            <img :src="require(`@/${famoso.img}`)" :alt="famoso.nome">
          </div>
          </div>
            
      </div>
    </div>

    <div class="container-Bg">
      <img  :src="require('@/assets/img/institucionais/quem-somos/logo-be.png')" alt="">
    </div>
   
  </section>
</template>

<script>
export default {
  data() {
    return {
      quemUsa: [
        {
          nome: "Juju Salimeni",
          img: "assets/img/institucionais/quem-somos/juju-salimeni.jpg",
        },
        {
          nome: "Mayara Cardi",
          img: "assets/img/institucionais/quem-somos/mayara-cardi.jpg",
        },
        {
          nome: "Lexa",
          img: "assets/img/institucionais/quem-somos/lexa.jpg",
        },
        {
          nome: "Whindersson Nunes",
          img: "assets/img/institucionais/quem-somos/whindersson-nunes.jpg",
        },
        {
          nome: "Thaeme Mariôto",
          img: "assets/img/institucionais/quem-somos/thaeme-marioto.jpg",
        },
        {
          nome: "Mileide Mihaile",
          img: "assets/img/institucionais/quem-somos/mileide-mihaile.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
#quemSomos-banner {
  display: block;
  margin: 0 auto 40px auto;
}
.txt-1 {
  font-size: 16px;
  color: #eb57bf;
}
.txt-2 {
  font-weight: 500;
  font-size: 36px;
  color: #3f3f3f;
  font-family: "Oswald", sans-serif !important;
  line-height: 20px;
}
.txt-3 {
  margin-top: 30px;
  font-size: 15px;
  color: #656565;
}
.txt-2,
.txt-1 {
  text-transform: uppercase;
}
.txt-3,
.txt-1 {
  margin-bottom: 1rem;
}

.container-MissaoVisaoValores {
  padding-top: 0px;
  padding-bottom: 20px;
  margin-top: 15px;
}
.container-MissaoVisaoValores > div {
  text-align: center;
  padding: 30px;
}

.container-MissaoVisaoValores > div:nth-child(2) {
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.container-quemUsa {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 5px;
}

.container-Bg {
  background: #ed54ad;
  padding: 30px 10px 40px 10px;
  margin-top: 60px;
  margin-bottom: -20px !important;
  display: flex;
  justify-content: center;
}
@media (max-width: 767px) {
  #quemSomos-banner {
    margin: 0 auto;
  }
  .container-bemVindo div {
    padding: 40px 30px 30px 30px;
  }
  .container-quemUsa {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>