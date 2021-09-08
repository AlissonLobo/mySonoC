<template lang="html">
  <div class="containerLoader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.containerLoader{
  display: flex;
  justify-content: center;
}
.loader{
  display: inline-block;
  width: 0;
  height: 2px;
  background-color: #214861;
  animation: load infinite 1000ms;
}
.preloaderNews .loader{
  background-color: #fff;
  margin-top: 1px;
}
@keyframes load {
  0% {
    width: 0;
  }
  50% {
    border-width: 0px;
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
