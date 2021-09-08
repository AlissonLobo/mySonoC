<template lang="html">
  <div class="skeleton" style="margin-top: 50px;">
    <div class="row noColor">
      <div class="small-12 columns noColor">
        <div class="escuro" style="width: 250px; height: 30px; margin: 0 auto 10px;"></div>
        <div class="escuro" style="width: 280px; height: 20px; margin: 0 auto 20px;"></div>
      </div>
      <div class="small-12 columns noColor">
        <div class="flex-container align-justify noColor">
          <div class="skeleton-item noColor" v-for="i in ($screen.width > 767 ? 3 : 1)" :key="i">
            <div class="skeleton-img light"></div>
            <div class="skeleton-text" style="width: 83%;"></div>
            <div class="skeleton-text" style="width: 31%; margin-top: 10px;"></div>
            <div class="skeleton-text" style="width: 60%;height: 18px;"></div>
           
            <div class="skeleton-text" style="width: 31%; margin-top: 10px;"></div>
            <div class="skeleton-text" style="width: 50%;height: 18px;"></div>
            <div class="skeleton-text" style="width: 60%;margin-top: 18px; height: 60px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
}
</script>

<style lang="css" scoped>
.skeleton-item{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 50px;
}
.skeleton-img{
  height: 260px;
  width: 95%;
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
    width: 100%;
  }
  .skeleton-img{
    height: 135px
  }
}
</style>
