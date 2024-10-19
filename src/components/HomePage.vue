<template>
  <div class="main">
    <div class="avil-offer">
      <p>Avil 70% off offer</p>
      <div class="cros"><img src="../assets/close.png" alt="" /></div>
    </div>
    <div class="navbar">
      <div class="image left-bar">
        <img src="../assets/Frame 22.png" alt="" />
      </div>
      <div class="right-bar">
        <img src="../assets/favorite.png" alt="" />
        <img src="../assets/shopping_cart.png" alt="" />
        <button class="button1">Log in</button>
        <button class="button2">Sign Up</button>
      </div>
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
  height: 100%;
  width: 100%;
  .avil-offer {
    width: 100%;
    height: 2.65rem;
    background: #dcf763;
    display: flex;
    justify-content: center;
    position: relative;
    .cros {
      position: absolute;
      margin-left: 97%;
      margin-top: 1%;
    }
  }
  .navbar {
    background-color: rgb(255, 255, 255);
    height: 4rem;
    max-width: 100%;
    box-shadow: 0px 4px 20px 0px #0000001f;
    display: flex;
    align-items: center;

    .image {
      width: 7.2rem;
      height: 2rem;
      margin-left: 30px;
    }
    .right-bar {
      width: 19.75rem;
      height: 3rem;
      background-color: aqua;
      margin-left: 60% ;
      .button1{
      button {
        all: unset;
        display: inline-block;
        background: transparent;
        border: 1px solid #007bff;
       
        color: #007bff;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 1.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #007bff;
        color: #fff;
      }
    }
    .button2{
      button {
        all: unset;
        display: inline-block;
        background: transparent;
        border: 1px solid #007bff;
       
        color: #007bff;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 1.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #007bff;
        color: #fff;
      }
    }
    }
  }
}
</style>
