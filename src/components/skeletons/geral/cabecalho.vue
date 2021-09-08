<template lang="html">
  <div class="skeleton">
    <div class="row">
      <div class="small-12 columns skeleton-wrapper noColor" style="background-color: #B0BEC5;">
        <div class="skeleton-menu noColor">
          <div class="skeleton-menu-item1"></div>
          <div class="skeleton-menu-item1"></div>
          <div class="skeleton-menu-item1"></div>
        </div>

        <div class="skeleton-menu noColor">
          <div class="skeleton-menu-logo"></div>
        </div>

        <div class="skeleton-menu noColor">
          <div class="skeleton-menu-item1"></div>
          <div class="skeleton-menu-item1"></div>
          <div class="skeleton-menu-item1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
  components: {
    /* mainMenu: () => import('@/components/skeletons/geral/cabecalho/menu.vue') */
  }
}
</script>

<style lang="css" scoped>
header{
  background-color: #B0BEC5;
}
.skeleton-wrapper{
  display: flex;
  justify-content: space-between;
}
.skeleton{
  background-color: #B0BEC5;
  padding: 17.5px 0;
  width: 100%;
}
.skeleton.menuSkeleton{
  margin-top: 0;
}
.skeleton-menu{
  display: flex;
  background-color: #B0BEC5;
  align-items: center;
}
.skeleton-menu-item1{
  width: 80px;
  height: 20px;
  background-color: #b0bec5;
  margin: 0 40px 0 0;
}
.skeleton-menu-logo{
  width: 100px;
  height: 40px;
  background-color: #b0bec5;
  margin: 0 40px 0 0;
}

</style>
