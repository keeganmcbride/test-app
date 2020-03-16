<template>
  <div class="statsbar-container">
    <div class="statsbar-item">
      <div>Kinnitatud haigusjuhte</div>
      <b>205</b>
    </div>

    <div class="statsbar-item">
      <div>Aktiivseid haigusjuhte</div>
      <b>204</b>
    </div>

    <div class="statsbar-item">
      <div>Hukkunud</div>
      <b>0</b>
    </div>

    <div class="statsbar-item">
      <div>Tervenenud</div>
      <b>1</b>
    </div>

    <div class="statsbar-item">
      <div>Tehtud teste</div>
      <b>1387</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statsbar"
};
</script>

<style lang="scss" scoped>
.statsbar-container {
  display: flex;
  justify-content: space-around;
  margin: 2em 0em;
}

.statsbar-item {
  display: flex;
  flex-direction: column;
}
</style>
