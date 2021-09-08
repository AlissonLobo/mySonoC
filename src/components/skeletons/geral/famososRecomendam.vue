<template lang="html">
  <div class="skeleton" style="margin-top: 50px;">
    <div class="row noColor">
      <div class="small-12 columns noColor">
        <div class="escuro" style="width: 300px; height: 24px; margin: 0 auto 10px;"></div>
        <div class="escuro" style="width: 200px; height: 24px; margin: 0 auto 30px;"></div>
      </div>
      <div class="small-12 columns noColor">
        <div class="flex-container align-justify noColor">
          <div class="skeleton-item noColor" v-for="i in ($screen.width > 767 ? 4 : 2)" :key="i">
            <div class="skeleton-img light"></div>
            <div class="skeleton-bottom noColor" style="background-color: #b0bec5;"></div>
          </div>
        </div>
        <div class="flex-container noColor" style="width:50px; margin: -80px auto 20px;">
          <div style="width: 10px; height: 10px; margin-right: 10px; border-radius: 50%;"></div>
          <div style="width: 10px; height: 10px; margin-right: 10px; border-radius: 50%;"></div>
          <div style="width: 10px; height: 10px; border-radius: 50%;"></div>
        </div>
      </div>

      <div class="skeleton-btn" style="width: 260px; height: 64px; margin: 0 auto 10px; border-radius: 5px;"></div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/skeleton.css";
export default {};
</script>

<style lang="css" scoped>
.skeleton-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 110px;
}
.skeleton-img {
  height: 260px;
  width: 91%;
}
.skeleton-text {
  height: 12px;
  margin-bottom: 5px;
}
.skeleton-bottom {
  width: 91%;
  height: 60px;
}

@media (max-width: 767px) {
  .skeleton {
    justify-content: space-between;
  }
  .skeleton-item {
    width: 48%;
  }
  .skeleton-img {
    height: 135px;
    width: 91%;
  }
}
</style>
