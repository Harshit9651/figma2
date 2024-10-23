<template>
  <div class="main">
    <div v-if="isOffer" class="avil-offer">
      <p>Avail 70% off offer</p>
      <div class="cros">
        <button @click="closeOffer">
          <img src="../assets/close.png" alt="Close Offer" />
        </button>
      </div>
    </div>

    <div class="navbar">
      <div class="image left-bar">
        <img src="../assets/Frame 22.png" alt="Logo" />
      </div>
      <div class="right-bar">
        <img src="../assets/favorite.png" alt="Favorite" />
        <img src="../assets/shopping_cart.png" alt="Cart" />
        <div  v-if="!islogin"  class="login-sigup">
          <button @click="login" class="button1">Log in</button>
          <button class="button2">Sign Up</button>
        </div>
        <div v-if="islogin" class="profile">
          <img src="../assets/account_circle.png" alt="" />
        </div>
      </div>
    </div>

    <div class="frame24">
      <div class="inner-div">
        <h3>5467 perfect 3D models for interior Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ut
          ad! Corporis sed in debitis beatae autem id quis praesentium?
        </p>

        <div class="search-box">
          <div class="input-with-dropdown">
            <select class="dropdown">
              <option value="all">ALL</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <input type="text" placeholder="Search 5764 3D Models.." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<script setup>
import { ref } from "vue";

const islogin = ref(false);
const isOffer = ref(true);
function login() {
    const rightBar = document.getElementsByClassName("right-bar")[0];
  islogin.value = !islogin.value;
  rightBar.style.marginLeft = "75%"; 

}
function closeOffer() {
  isOffer.value = false;
}
</script>
<style scoped lang="scss">
.avil-offer {
  width: 100%;
  height: 2.65rem;
  background: #dcf763;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  font-size: 15px;
  font-weight: 500;

  .cros {
    position: absolute;
    margin-left: 97%;
    margin-top: 1%;
    button {
      all: unset;
      display: inline-block;
    }
  }
}

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
    .profile{
      height: 2rem;
      width: 2rem;
      background-color: rgb(255, 255, 255);
      img{
        height: 2rem;
      width: 2rem;
      }
    }
  }
}
.frame24 {
  margin: 0%;
  height: 18.235rem;
  background: #7343ea;
  background-image: url("../assets/Pattern.png");
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .inner-div {
    height: 90%;
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .search-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 100%;

      .input-with-dropdown {
        position: relative;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
      }

      select {
        width: 5rem;
        height: 100%;
        border: 1px solid #ccc;
        background-color: white;
        border-radius: 32px 0 0 32px;
        font-size: 16px;
        padding: 10px;
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
      }

      input {
        width: calc(100% - 120px);
        height: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 0 32px 32px 0;
        outline: none;
        box-sizing: border-box;
      }
    }

    .searchs {
      margin-top: 0.7rem;
      width: 70%;
      height: 2.8rem;
      display: flex;
      // justify-content: space-evenly;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      margin-right: 1rem;
    }

    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      color: black;
      background-color: white;
      border: 1px solid #ccc;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: pointer;
      height: 1.3rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #f0f0f0;
        border-color: #1b2128;
        color: #007bff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
