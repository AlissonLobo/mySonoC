<template lang="html">
  <div class="mainContainer">
    <div class="container" :class="{negativo}">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    negativo: Boolean
  }
}
</script>

<style lang="css" scoped>
.mainContainer{
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
}
.container{
  height: 35px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #43A047;
  font-size: 16px;
  color: #fff;
  clear: both;
}
.container.negativo {
  background-color: #ba1d1d;
}
</style>
