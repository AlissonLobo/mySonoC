<template lang="html">
  <div class="skeleton">
    <div class="skeleton-banner noRadius"></div>
  </div>
</template>

<script>
import '@/assets/css/skeleton.css'
export default {
}
</script>

<style lang="css" scoped>
.skeleton {
  width: 100%;
}
.skeleton-banner {
  height: 536px;
}
@media (max-width: 767px) {
  .skeleton-banner {
    height: 180px;
  }
}
</style>
