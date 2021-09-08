<template lang="html">
  <div class="skeleton">
    <div class="skeleton-item noColor" v-for="i in 8" :key="i">
      <div class="skeleton-img light"></div>
      <div class="skeleton-text" style="width: 73%;"></div>
      <div class="skeleton-text" style="width: 55%;"></div>
      <div class="skeleton-text" style="width: 35%;"></div>
      <div class="boxAvliacaoStars noColor"></div>
      <div class="skeleton-text" style="width: 40%;height: 18px; margin-top: 30px;"></div>
      <div class="skeleton-text" style="width: 31%;"></div>

      <div class="skeleton-text" style="width: 49%;margin-top: 18px;"></div>
      <div class="skeleton-text" style="width: 49%;"></div>
      <div class="skeleton-text" style="width: 49%;"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
}
</script>

<style lang="css" scoped>
.skeleton{
  display: flex;
  flex-wrap: wrap;
}
.skeleton-item{
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 110px;
}
.skeleton-img{
  height: 190px;
  width: 78%;
  margin-bottom: 15px;
}
.skeleton-text{
  height: 12px;
  margin-bottom: 5px;
}

@media (max-width: 767px) {
  .skeleton{
    justify-content: space-between;
  }
  .skeleton-item{
    width: 48%;
  }
  .skeleton-img{
    height: 135px
  }
}
</style>
