<template lang="html">
  <div class="skeleton">
    <div class="row noColor">
      <div class="small-12 columns noColor">
        <div class="skeleton-pitchbar-container noColor">
          <div class="skeleton-pitchbar-container-item noAnim" v-for="i in ($screen.width > 1023 ? 4 : 1)" :key="i">
            <div class="skeleton-pitchbar-container-item-icon escuro"></div>
            <div class="noColor">
              <div class="skeleton-pitchbar-container-item-t1 escuro"></div>
              <div class="skeleton-pitchbar-container-item-t2 escuro"></div>
            </div>
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
  background-color: #DDE8EE;
}
.skeleton-pitchbar-container{
  display: flex;
  height: 75px;
  align-items: center;
}
.skeleton-pitchbar-container-item{
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
}
.skeleton-pitchbar-container-item:first-child{
  justify-content: flex-start;
}
.skeleton-pitchbar-container-item:last-child{
  justify-content: flex-end;
}
.skeleton-pitchbar-container-item-icon{
  height: 55px;
  width: 55px;
  margin-right: 10px;
  border-radius: 20px;
}
.skeleton-pitchbar-container-item-t1{
  height: 10px;
  width: 145px;
  margin-bottom: 5px;
}
.skeleton-pitchbar-container-item-t2{
  height: 10px;
  width: 112px;
}
@media (max-width: 767px) {
  .skeleton-pitchbar-container-item:last-child{
    justify-content: center;
  }
}
</style>
