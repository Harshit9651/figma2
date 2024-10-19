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
            <select class="dropdown">
              <option value="all">ALL</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <input type="text" placeholder="Search 5764 3D Models.." />
          </div>
        </div>
        <div class="searchs">
          <div class="search">
            <img src="../assets/search.png" alt="" /> chair
          </div>
          <div class="search">
            <img src="../assets/search.png" alt="" /> Bedroom
          </div>
          <div class="search">
            <img src="../assets/search.png" alt="" /> Soffa
          </div>
        </div>
      </div>
    </div>
    <div class="tabular-quick-filter">
      <div class="tabular">
        <img src="../assets/king_bed.png" alt="" />
        <p>Furniture</p>
      </div>
      <div class="tabular">
        <img src="../assets/light.png" alt="" />
        <p>Lighting</p>
      </div>
      <div class="tabular">
        <img src="../assets/texture.png" alt="" />
        <p>Textures</p>
      </div>
      <div class="tabular">
        <img src="../assets/devices.png" alt="" />
        <p>Materials</p>
      </div>
      <div class="tabular">
        <img src="../assets/tonality.png" alt="" />
        <p>Technology</p>
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
  .tabular-quick-filter {
    height: 5.625rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    box-shadow: 0px 4px 20px 0px #0000001f;
    .tabular {
      height: 100%;
      width: 7.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255);
      color: rgb(80, 69, 69);
      flex-direction: column;
      // gap: 0.2rem;
    }
  }
}
</style>
