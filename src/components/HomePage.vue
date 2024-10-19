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
    <div class="frame24">
      <div class="inner-div">
        <h3>5467 perfect 3D models for interior Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ut
          ad! Corporis sed in debitis beatae autem id quis praesentium?
        </p>
        <div class="search-box">
          <div class="input-with-dropdown">
            <input type="text" placeholder="Search..." />
            <select class="dropdown">
              <option value="all">ALL</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
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
      margin-left: 66%;
      display: flex;
      align-items: center;
      justify-content: space-between;

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
        background: #7343ea;
        color: white;
        border: 1px solid transparent;
      }

      .button2:hover {
        background-color: #007bff;
        color: white;
      }
    }
  }

  .frame24 {
    margin: 0%;
    height: 18.235rem;
    background: #7343ea;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .inner-div {
      height: 80%;
      width: 30%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .input-with-dropdown {
      position: relative;
      width: 536px; /* Set input box width */
      height: 44px; /* Set input box height */
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      // border-radius: 1.5rem 0 0 1.5rem;
      border-radius: 2rem;
      outline: none;
      box-sizing: border-box;
    }

    select {
      position: absolute;
      top: 0;
      right: 0;
      width: 120px;
      height: 100%;
      border: 1px solid #ccc;
      background-color: white;
      border-radius: 0 1.5rem 1.5rem 0;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
