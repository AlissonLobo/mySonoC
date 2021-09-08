<template lang="html">
  <section id="pitchbar">
    <div class="row">
      <div class="small-12 columns">
        <div class="pitchbar-container">
          <div class="pitchbar-item">
            <div class="pitchbar-item-icone">
              <img src="@/assets/img/geral/pitchbar/01.png" alt="">
            </div>
            <div class="">
              <div class="pitchbar-item-t1">
                A VITAMINA CAPILAR
              </div>
              <div class="pitchbar-item-text">
                das celebridades
              </div>
            </div>
          </div>
          <div class="pitchbar-item">
            <div class="pitchbar-item-icone">
              <img src="@/assets/img/geral/pitchbar/02.png" alt="">
            </div>
            <div class="">
              <div class="pitchbar-item-t1">
                PAGUE COM CARTÃO
              </div>
              <div class="pitchbar-item-text">
                em até 12x sem juros
              </div>
            </div>
          </div>
          <div class="pitchbar-item">
            <div class="pitchbar-item-icone">
              <img src="@/assets/img/geral/pitchbar/03.png" alt="">
            </div>
            <div class="">
              <div class="pitchbar-item-t1">
                FRETE GRÁTIS
              </div>
              <div class="pitchbar-item-text">
                para todo Brasil
              </div>
            </div>
          </div>
          <div class="pitchbar-item">
            <div class="pitchbar-item-icone">
              <img src="@/assets/img/geral/pitchbar/04.png" alt="">
            </div>
            <div class="">
              <div class="pitchbar-item-t1">
                SITE 100% SEGURO
              </div>
              <div class="pitchbar-item-text">
                com segurança SSL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';

export default {
  mounted(){
    if (screen.width <= 767) {
      tns({
        container: '.pitchbar-container',
        mouseDrag: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        nav: false
      });
    }
  }
}
</script>

<style lang="css" scoped>
#pitchbar{
  background-color: #fbebf3;
  padding: 10px 0;
}
.pitchbar-container{
  display: flex;
  align-items: center;
}
.pitchbar-item{
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pitchbar-item-icone{
  display: flex;
  margin-right: 10px;
}
.pitchbar-item-t1{
  font-size: 13px;
  color: #000;
  line-height: 1.5;
  font-weight: 900;
}
.pitchbar-item-text{
  font-size: 16px;
  color: #666666;
  line-height: 1.25;
}
</style>

<style>
@media (max-width: 767px) {
  #pitchbar .tns-nav{
    bottom: -35px;
  }
  #pitchbar .tns-inner > div > div{
    display: inline-flex;
  }
}
</style>
