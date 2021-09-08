<template>
  <main>
    <section id="avaliacaoLoja">
      <div class="row">
        <div class="small-12 columns">
          <h1 class="avaliacaoLoja-t1">Avaliação da loja</h1>
          <form action="" class="avaliacaoLoja-form" @submit="enviar()">
            <div class="avaliacaoLoja-form-container">
              <transition name="fadeNoDelay">
                <msg v-if="validacao.sucesso" text="Avaliação enviada com sucesso!!!" :negativo="false" />
              </transition>
              <transition name="fadeNoDelay">
                <msg v-if="!validacao.envio" text="Não foi possível enviar sua avaliação." :negativo="true" />
              </transition>
              <transition name="fadeNoDelay">
                <msg v-if="!validacao.experiencia" text="Por favor, dê uma nota." :negativo="true" />
              </transition>
              <h2 class="avaliacaoLoja-t2">Experiência de compra</h2>
              <span class="avaliacaoLoja-t3">Como foi comprar na Elitech Brasil?</span>
              <div class="avaliacaoLoja-containerStars">
                <div v-for="i in 10" :key="i" class="avaliacaoLoja-containerStars-item" :class="{starYellow: experiencia >= i}">
                  <input :id="`experiencia${i}`" type="radio" name="experiencia" :value="i" v-model="experiencia">
                  <label class="avaliacaoLoja-containerStars-item-star" :for="`experiencia${i}`">
                    <span>{{i}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.01" height="28.013" viewBox="0 0 30.01 28.013">
                      <path id="Shape_12_copy_5" data-name="Shape 12 copy 5" d="M3167.01,4308.854a1.272,1.272,0,0,1-.469.847l-6.547,6.248,1.55,8.826a2.508,2.508,0,0,1,.019.353,1.026,1.026,0,0,1-.189.628.53.53,0,0,1-.55.255,1.483,1.483,0,0,1-.721-.212l-8.1-4.165-8.1,4.165a1.559,1.559,0,0,1-.721.212.663.663,0,0,1-.569-.255.832.832,0,0,1-.189-.628,2.817,2.817,0,0,1,.036-.353l1.551-8.826-6.564-6.248a1.339,1.339,0,0,1-.451-.847q0-.654,1.01-.812l9.053-1.289,4.058-8.032q.342-.724.884-.723c.541,0,.656.241.883.723l4.058,8.032,9.053,1.289q1.009.159,1.01.812Z" transform="translate(-3137 -4297.999)" fill="#b0bec5"/>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div class="avaliacaoLoja-form-container">
              <transition name="fadeNoDelay">
                <msg v-if="!validacao.atendimento" text="Por favor, dê uma nota." :negativo="true" />
              </transition>
              <h2 class="avaliacaoLoja-t2">Atendimento</h2>
              <span class="avaliacaoLoja-t3">Como você avalia o atendimento da loja?</span>
              <div class="avaliacaoLoja-containerStars">
                <div v-for="i in 10" :key="i" class="avaliacaoLoja-containerStars-item" :class="{starYellow: atendimento >= i}">
                  <input :id="`atendimento${i}`" type="radio" name="atendimento" :value="i" v-model="atendimento">
                  <label class="avaliacaoLoja-containerStars-item-star" :for="`atendimento${i}`">
                    <span>{{i}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.01" height="28.013" viewBox="0 0 30.01 28.013">
                      <path id="Shape_12_copy_5" data-name="Shape 12 copy 5" d="M3167.01,4308.854a1.272,1.272,0,0,1-.469.847l-6.547,6.248,1.55,8.826a2.508,2.508,0,0,1,.019.353,1.026,1.026,0,0,1-.189.628.53.53,0,0,1-.55.255,1.483,1.483,0,0,1-.721-.212l-8.1-4.165-8.1,4.165a1.559,1.559,0,0,1-.721.212.663.663,0,0,1-.569-.255.832.832,0,0,1-.189-.628,2.817,2.817,0,0,1,.036-.353l1.551-8.826-6.564-6.248a1.339,1.339,0,0,1-.451-.847q0-.654,1.01-.812l9.053-1.289,4.058-8.032q.342-.724.884-.723c.541,0,.656.241.883.723l4.058,8.032,9.053,1.289q1.009.159,1.01.812Z" transform="translate(-3137 -4297.999)" fill="#b0bec5"/>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <div class="avaliacaoLoja-form-container">
              <transition name="fadeNoDelay">
                <msg v-if="!validacao.satisfacao" text="Por favor, escolha um." :negativo="true" />
              </transition>
              <h2 class="avaliacaoLoja-t2">Satisfação</h2>
              <span class="avaliacaoLoja-t3">Você voltaria a comprar na Elitech Brasil?</span>
              <div class="avaliacaoLoja-form-container-inputRadioContainer">
                <input type="radio" id="sim" :value="true" v-model="satisfacao">
                <label for="sim">Sim</label>
              </div>
              <div class="avaliacaoLoja-form-container-inputRadioContainer">
                <input type="radio" id="nao" :value="false" v-model="satisfacao">
                <label for="nao">Não</label>
              </div>
            </div>
            <div class="avaliacaoLoja-form-container">
              <h2 class="avaliacaoLoja-t2">Deixe aqui sua crítica ou sugestão:</h2>
              <textarea v-model="mensagem"></textarea>
            </div>
            <div class="avaliacaoLoja-autorizo">
              <label for="autorizo">
                <input type="checkbox" id="autorizo" v-model="autorizacao">
                Autorizo a publicação da minha avaliação no site https://loja.elitechbrasil.com.br. Fique tranquilo, seu e-mail não será divulgado.
              </label>
            </div>
            <button class="avaliacaoLoja-enviar" type="submit">Enviar</button>
            <div class="avaliacaoLoja-loader"><preloader v-if="loading" /></div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {
    msg: () => import('@/components/gerais/form-msg.vue'),
    preloader: () => import('@/components/gerais/preloader.vue')
  },
  data () {
    return {
      experiencia: 0,
      atendimento: 0,
      satisfacao: null,
      mensagem: '',
      autorizacao: false,
      validacao: {
        experiencia: true,
        atendimento: true,
        satisfacao: true,
        envio: true,
        sucesso: false
      },
      loading: false
    }
  },
  watch: {
    experiencia() {
      this.validacao.experiencia = true;
    },
    atendimento() {
      this.validacao.atendimento = true;
    },
    satisfacao() {
      this.validacao.satisfacao = true;
    }
  },
  methods: {
    enviar() {
      event.preventDefault();
      this.loading = true;
      if(this.experiencia == 0) {
        this.validacao.experiencia = false;
        this.loading = false
        return;
      }
      if(this.atendimento == 0) {
        this.validacao.atendimento = false;
        this.loading = false
        return;
      }
      if(this.satisfacao === null) {
        this.validacao.satisfacao = false;
        this.loading = false
        return;
      }
      this.$requestSend('post', `/v2/front/evaluations/store/add/${this.$route.query.key}`, {
        experiencia: this.experiencia,
        atendimento: this.atendimento,
        satisfacao: this.satisfacao,
        autorizacao: this.autorizacao,
        mensagem: this.mensagem
      }, (success) => {
        this.loading = false
        if (!success) {
          this.validacao.envio = false;
          setTimeout(() => {
            this.validacao.envio = true;            
          }, 5000)
          return;
        }
        this.validacao.sucesso = true;
        setTimeout(() => {
          this.validacao.sucesso = false;            
        }, 5000)
      })
    },
    validaKey() {
      if (this.$route.query.key) {
        this.$requestSend('get', `/v2/front/evaluations/store/add/${this.$route.query.key}`, {}, (success, response) => {
          if (!response.data.sucesso) {
            this.$router.push({name: 'home'})
            return;
          }
        })
        return;
      }
      this.$router.push({name: 'home'})
    }
  },
  created() {
    document.querySelector('title').innerText = 'Avaliação da loja';
    this.validaKey()
  }
}
</script>

<style scoped>
#avaliacaoLoja{
  margin-top: 30px;
}
.avaliacaoLoja-t1{
  font-size: 25px;
  font-weight: bold;
  color: #214861;
  margin-bottom: 0;
}
.avaliacaoLoja-t2{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0px;
}
.avaliacaoLoja-t3{
  font-size: 15px;
  margin-bottom: 5px;
  display: block;
}
.avaliacaoLoja-form-container{
  margin-top: 10px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 20px;
}
.avaliacaoLoja-containerStars{
  display: flex;
  align-items: center;
}
.avaliacaoLoja-containerStars-item > input{
  display: none;
}
.avaliacaoLoja-containerStars-item > input{
  display: none;
}
label.avaliacaoLoja-containerStars-item-star{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 10px;
}
.avaliacaoLoja-containerStars-item-star > span{
  position: absolute;
  padding-top: 5px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
}
.starYellow .avaliacaoLoja-containerStars-item-star svg path{
  fill: #ffc107;
}
.avaliacaoLoja-form-container-inputRadioContainer{
  display: flex;
  align-items: center;
}
.avaliacaoLoja-form-container-inputRadioContainer input{
  margin: 0;
}
.avaliacaoLoja-form-container-inputRadioContainer label{
  font-size: 15px;
}
.avaliacaoLoja-form-container textarea{
  height: 200px;
  width: 600px;
  resize: none;
}
.avaliacaoLoja-autorizo{
  margin-top: 10px;
  /* display: flex;
  align-items: center; */
}
.avaliacaoLoja-autorizo input{
  margin: 0 5px 0 0;
}
.avaliacaoLoja-autorizo label{
  font-size: 15px;
}
.avaliacaoLoja-enviar{
  height: 35px;
  width: 150px;
  background: #214861;
  color: #FFFFFF;
  cursor: pointer;
  font-family: inherit;
  border-radius: 4px;
  margin-top: 30px;
  font-size: 16px;
}
.avaliacaoLoja-loader{
  width: 150px;
  margin-top: 5px;
}

@media (max-width: 767px) {
  label.avaliacaoLoja-containerStars-item-star{
    margin-right: 5px;
  }
  .avaliacaoLoja-enviar{
    height: 40px;
    width: 100%;
    background: #214861;
    color: #FFFFFF;
    cursor: pointer;
    font-family: inherit;
    border-radius: 4px;
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
  }
  .avaliacaoLoja-loader{
    width: 100%;
  }
}
</style>