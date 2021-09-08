<template lang="html">
  <div class="skeleton">
    <pitchbar v-if="$screen.width >= 1024" />
    <div class="flex-container align-middle noAnim noRadius" style="width: 100%; height: 230px; margin-bottom: 10px;">
      <div class="row noColor" style="width: 100%;" v-if="$screen.width >= 1024">
        <div class="small-12 large-6 columns noColor large-offset-6">
          <div class="escuro" style="width: 245px; height: 24px; margin-bottom: 13px"></div>
          <div class="escuro" style="width: 100%; height: 12px; margin-bottom: 10px"></div>
          <div class="escuro" style="width: 100%; height: 12px; margin-bottom: 10px"></div>
          <div class="escuro" style="width: 100%; height: 12px; margin-bottom: 10px"></div>
          <div class="escuro" style="width: 270px; height: 12px; margin-bottom: 10px"></div>
        </div>
      </div>
    </div>
    <div class="row noColor">
      <div class="small-12 columns noColor">
        <div class="escuro" style="width: 133px; height: 12px; margin-bottom: 20px"></div>
      </div>
    </div>
    <div class="row noColor">
      <div class="small-12 large-2 columns noColor" v-if="$screen.width >= 1024">
        <menuLateral />
      </div>
      <div class="small-12 large-10 columns noColor">
        <prods />
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
  components: {
    prods: () => import('@/components/skeletons/listagem/produtos.vue'),
    menuLateral: () => import('@/components/skeletons/listagem/menu-lateral.vue'),
    pitchbar: () => import('@/components/skeletons/geral/pitchbar.vue')
  }
}
</script>

<style lang="css" scoped>
</style>
