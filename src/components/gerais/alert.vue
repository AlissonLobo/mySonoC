<template lang="html">
  <transition name="fadeNoDelay">
    <div class="alertDefault" :class="`popType-${config.type}`" v-if="show">
      <div class="alertDefault-container">
        <button type="button" name="button" class="material-icons-round" @click="closePop()">close</button>
        <div class="alertImg">
          <img :src="require(`@/assets/img/alert/${icon}.svg`)" alt="">
        </div>
        <span class="alertTitle" v-if="config.title">
          {{ config.title }}
        </span>
        <span class="alertText" v-if="config.text">
          {{ config.text }}
        </span>

        <div class="alertButtons">
          <button
            @click="button.method ? button.method() : false; closePop()"
            @mouseover="$event.target.style.backgroundColor = button.color; $event.target.style.color = '#fff'"
            @mouseout="$event.target.style.backgroundColor = ''; $event.target.style.color = button.color"
            type="button" class="alertButtons-button" v-for="(button, i) in config.buttons"
            :key="i" :style="{'border-color': button.color, 'color': button.color}">
            {{ button.text }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Comunicacao from '@/comunicacao'
export default {
  data() {
    return {
      show: false,
      config: {
        type: 'default',
        title: null,
        text: null,
        buttons: [
          {
            color: 'gray',
            text: 'OK'
          }
        ]
      }
    }
  },
  computed: {
    icon() {
      let icon;
      switch (this.config.type) {
        case 'alert':
          icon = 'warning'
          break;
        case 'success':
          icon = 'success'
          break;
        default:
          icon = 'default'
      }
      return icon
    }
  },
  methods: {
    closePop() {
      this.show   = false;
      this.config = {
        type: 'default',
        title: null,
        text: null,
        buttons: [
          {
            color: 'gray',
            text: 'OK'
          }
        ]
      }
    }
  },
  created() {
    Comunicacao.$on('alert', data => {
      this.show   = true;
      let config = this.config;
      this.config = {...config, ...data}
    })
  }
}
</script>

<style lang="css" scoped>
.alertDefault {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.alertDefault-container{
  padding: 20px;
  background-color: #fff;
  color: #595959;
  border-radius: 4px;
  position: relative;
  min-width: 400px;
}
.material-icons-round {
  position: absolute;
  top: 5px;
  right: 5px;
}
.alertImg{
  text-align: center;
  margin-bottom: 20px;
}
.alertTitle{
  display: block;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.alertText{
  display: block;
  font-size: 16px;
  text-align: center;
}
.alertButtons{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.alertButtons-button{
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 14px;
}
.alertButtons-button:not(:last-child){
  margin-right: 10px;
}
</style>
