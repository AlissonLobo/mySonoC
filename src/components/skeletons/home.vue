<template lang="html">
  <div class="skeleton">
    <banner />
    <famososRecomendam />
    <div class="skeleton-pitchbar noColor">
      <pitchbar />
    </div>

    <banner class="noColor" style="background-color: red;"/>

  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
  components: {
    banner: () => import('@/components/skeletons/home/banner.vue'),
    pitchbar: () => import('@/components/skeletons/geral/pitchbar.vue'),
    famososRecomendam: () => import('@/components/skeletons/geral/famososRecomendam.vue'),
  }
}
</script>

<style lang="css" scoped>
.skeleton {
  width: 100%;
}
.containerSelecaoEspecial{
  display: flex;
  justify-content: space-between;
}
.containerSelecaoEspecial > div{
  width: 24%;
}


@media (max-width: 767px) {
  .containerSelecaoEspecial{
    flex-wrap: wrap;
  }
  .containerSelecaoEspecial > div{
    width: calc(50% - 5px);
    margin-bottom: 10px;
  }
}
</style>
