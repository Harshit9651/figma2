<template>
  <div class="slidbar">
    <ul>
      <li>
        <div class="header">
          <div class="left">
            <img src="../assets/attach_money.png" alt="" />
            <h4>Price</h4>
          </div>
          <div class="right">
            <img src="../assets/expand_less.png" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  .slidbar {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    background-color: aquamarine;
  
    
  }
}
</style>
