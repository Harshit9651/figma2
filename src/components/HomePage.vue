<template>
  <div class="main">
    <div class="avil-offer">
      <p>Avil 70% off offer</p>
      <div class="cros"><img src="../assets/close.png" alt="" /></div>
    </div>
  </div>
</template>
<script setup></script>
<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.main {
  background-color: aquamarine;
  height: 100%;
  width: 100%;
  .avil-offer {
    width: 100%;
    height: 2.65rem;
    background: #dcf763;
    display: flex;
    padding-top: 12px;
    padding-right: 10px;
    padding-bottom: 12px;
    padding-left: 10px;
    justify-content: center;
    position: relative;
    .cros {
      position: absolute;
      margin-left: 97%;
      margin-top: 1%;
    }
  }
}
</style>
