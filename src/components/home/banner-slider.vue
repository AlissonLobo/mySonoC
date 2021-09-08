<template lang="html">
  <section id="sliderBannerHome" v-if="banners">
    <div id="slider">
      <div v-for="banner in banners" :key="banner.id" class="containerBanner">
        <a :href="screenWidth > 1023 ? banner.dimensoes.desktop.link : banner.dimensoes.mobile.link" :id="`banner-bannerPrincipal-${banner.id}`">
          <img :src="banner.dimensoes.desktop[tipoImg.banner]" :alt="banner.nome" class="banner-desk" v-if="screenWidth > 1023">
          <img :src="banner.dimensoes.mobile[tipoImg.banner]" :alt="banner.nome" class="banner-mob" v-else>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';
import {mapState, mapGetters} from 'vuex'

export default {
  props: {
      banners: Array
  },
  computed: {
    ...mapState(['screenWidth']),
    ...mapGetters(['tipoImg'])
  },
  mounted() {
    tns({
      container: '#slider',
      mouseDrag: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 6000,
      slideBy: 'page',
      controls: false
    })
  }
}
</script>

<style lang="css" scoped>
#slider{
  min-height: 400px;
  background-color: #DDE8EE;
  background-repeat: no-repeat;
  background-position: -600%;
  background-size: 80%;
  background-image: linear-gradient(90deg, #dee9ee 0%, #d3e0e8 50%, #dee9ee 100%);
  animation: loading infinite 1.5s;
  max-width: 1920px;
  margin: 0 auto;
}
#slider .containerBanner{
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
}
#slider img{
  max-width: unset;
}

@media (min-width: 1024px) and (max-width: 1400px) {
  #slider img{
    max-width: 1600px;
  }
}
@media (min-width: 1024px) and  (max-width: 1200px) {
  #slider{
    min-height: 390px;
  }
  #slider img{
    max-width: 1400px;
  }
}
@media (min-width: 768px) and  (max-width: 1023px) {
  #slider{
    text-align: center;
  }
}
@media (max-width: 767px) {
  #slider{
    min-height: 160px;
  }
  #slider img {
    max-width: 100%;
  }
}
</style>

<style>
  #sliderBannerHome .tns-nav{
    bottom: 10px;
  }
</style>
