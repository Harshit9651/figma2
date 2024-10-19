<template>
  <div class="main">
    <div class="slidbar">
      <div class="Filter">
        <p id="filters">Filters</p>
        <button><img src="../assets/Vector (1).png" alt="" /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlidBar",
};
</script>

<script setup>
// import {ref} from 'vue'
// const slidbar = ref(true)
// function isslidbar(){
//   slidbar.value = !slidbar.value
// }
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
}

.slidbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 20px 0px #0000001f;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  z-index: 999;

  .Filter {
    display: flex;
    align-items: center;
    gap: 1rem;

    #filters {
      font-size: 20px;
      font-weight: 500;
    }
    button {
      all: unset;
      display: inline-block;
      img {
        height: 0.9rem;
        width: 0.9rem;
        margin-left: 12rem;
      }
    }
  }
  
}
</style>
