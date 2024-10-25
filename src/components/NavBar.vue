<template>
  <div class="main">
    <div class="navbar">
      <div class="image left-bar">
        <img src="../assets/Frame 22.png" alt="Logo" />
      </div>

      <div class="right-bar">
        <img src="../assets/favorite.png" alt="Favorite" />
        <img src="../assets/shopping_cart.png" alt="Cart" />
        <div v-if="!islogin" class="login-sigup">
          <button @click="login" class="button1">Log in</button>
          <button class="button2">Sign Up</button>
        </div>
        <div v-if="islogin" class="profile">
          <img src="../assets/account_circle.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  components: {},
};
</script>
<script setup>
import { ref } from "vue";

const islogin = ref(false);

function login() {
  const rightBar = document.getElementsByClassName("right-bar")[0];
  islogin.value = !islogin.value;
  rightBar.style.marginLeft = "75%";
}
</script>
<style scoped lang="scss">
.navbar {
  background-color: rgb(255, 255, 255);
  height: 4rem;
  max-width: 100%;
  box-shadow: 0px 4px 20px 0px #0000001f;
  display: flex;
  align-items: center;
  position: sticky; /* or fixed */
  top: 0; /* Keeps it at the top */
  z-index: 1000;

  .image {
    width: 7.2rem;
    height: 2rem;
    margin-left: 30px;
  }

  .right-bar {
    //width: 19.75rem;
    // width: 21rem;
    height: 3rem;
    margin-left: 66%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .button1,
    .button2 {
      all: unset;
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border: 1px solid #007bff;
      color: #007bff;
      text-align: center;
    }

    .button1 {
      background: transparent;
    }

    .button1:hover {
      background-color: #007bff;
      color: white;
    }

    .button2 {
      margin-left: 1rem;
      background: #7343ea;
      color: white;
      border: 1px solid transparent;
    }

    .button2:hover {
      background-color: #007bff;
      color: white;
    }
    .profile {
      height: 2rem;
      width: 2rem;
      background-color: rgb(255, 255, 255);
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>
