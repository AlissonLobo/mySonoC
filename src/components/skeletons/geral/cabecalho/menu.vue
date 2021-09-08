<template lang="html">
  <div class="skeleton noColor">
    <div class="row noColor">
      <div class="small-12 columns noColor">
        <div class="skeleton-menu noColor">
          <div class="noColor skeleton-menu-item" v-for="i in 7" :key="i">
            <div class="skeleton-menu-item-icone"></div>
            <div class="skeleton-menu-item-text"></div>
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
.skeleton{
  background-color: #F5F5F5;
  min-height: unset;
}
.skeleton-menu{
  display: flex;
  align-items: center;
  height: 42px;
}
.skeleton-menu-item{
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skeleton-menu-item-icone{
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.skeleton-menu-item-text{
  width: 100px;
  height: 10px;
}
</style>
