<template>
  <div class="main">
    <div v-if="isoffer" class="avil-offer">
      <p>Avil 70% off offer</p>
      <div class="cros">
        <button @click="closeoffer">
          <img src="../assets/close.png" alt="" />
        </button>
      </div>
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
    <div class="result-slidbar-section">
      <div class="slidbar">
        <div class="Filter">
          <p id="filters">Filters</p>
          <button><img src="../assets/Vector (1).png" alt="" /></button>
        </div>
        <div class="hr"><hr></div>
        <div class="price">
          <div class="left"><img src="../assets/attach_money.png" alt=""> <h4>price</h4></div>
          <div class="right">hello</div>
        </div>
      </div>
      <div class="result">
        <div class="allModel">
          <p>All Models (1245)</p>
          <div class="filter">
            <img src="../assets/filter_list.png" alt="" /> Most Popular
          </div>
        </div>

        <div class="cards">
          <div v-for="product in products" :key="product.id" class="card">
            <img :src="product.image" :alt="product.title" />
            <div class="card-content">
              <h6>{{ product.title }}</h6>
              <p>{{ product.formats }}</p>
            </div>

            <div v-if="product.off" class="off">
              <img src="../assets/local_offer.png" alt="Discount" />
              {{ product.off }}
            </div>
            <div v-if="product.rate" class="off-rate">
              <h6 id="rate">{{ product.rate }}</h6>
            </div>
            <div class="cart"><img src="../assets/Frame 54.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "../store/image";
import { computed, ref } from "vue";
const isoffer = ref(true);

const productsStore = useProductsStore(); // Initialize the store first
const products = computed(() => productsStore.getAllProducts); // Now you can access products
function closeoffer() {
  isoffer.value = !isoffer.value;
}
</script>

<script>
// import SlidBar from './SlidBar.vue';
export default {
  name: "HomePage",
  // components:SlidBar
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
    border-bottom: 1px solid #e0e0e0;
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

  .result-slidbar-section {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;

    .slidbar {
      // position: fixed;
      top: 0;
      left: 0;
      width: 20%;
      height: 100vh;
      background-color: rgb(255, 255, 255);
      box-shadow: 4px 6px 24px 4px #0000001f;
      display: flex;
      flex-direction: column;
      padding-left: 5rem;
      border-right: 1px solid #e0e0e0;

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
            margin-left: 10rem;
          }
        }
      }
     .hr{
      border: 1px sold rgb(255, 255, 255);
      margin-right: 2rem;
     }
     .price{
      width: 17rem;
      height: 1.5rem;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
      
        width: 3rem;
        justify-content: space-between;
        align-items: center;

        img{
         height: 1rem;
         width:1rem;
        }
      }
    
    }

    }
    .result {
      width: 80%;
      background-color: rgb(255, 255, 255);
      height: 100vh;
      overflow-y: auto;

      .allModel {
        background-color: #fcfcfc;
        display: flex;
        justify-content: space-between;
        height: 2.35rem;
        align-items: center;
        margin-left: 1rem;
        margin-right: 2rem;
      }
      .cards {
        background-color: #ffffff;
        margin-left: 1rem;
        margin-right: 2rem;
        margin-top: 1rem;
        height: 83vh;
        display: flex;
        flex-wrap: wrap;
        gap: 1.1rem;
        row-gap: 0.5rem;

        .card {
          background-color: rgb(255, 255, 255);
          height: 13.245rem;
          width: 16.34rem;
          border-radius: 0.635rem;
          box-shadow: 0px 4px 20px 0px #0000001f;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;

          img {
            width: 100%;
            height: 70%;
            object-fit: cover;
          }
          .cart {
            height: 2.5rem;
            width: 2.5rem;
            position: absolute;
            margin-left: 80%;
            margin-top: 64%;
          }

          .card-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.5rem;
            height: 20%;
            overflow: hidden;

            h6 {
              margin: 0;
              font-size: 1rem;
              font-weight: bold;
              color: #333;
              overflow: hidden;
            }

            p {
              margin: 0;
              font-size: 0.875rem;
              color: #666;
              overflow: hidden;
            }
          }
          .off {
            position: absolute;
            margin-top: 3%;
            margin-left: 3%;
            height: 2.5rem;
            width: 6.5rem;
            border-radius: 2rem;
            color: #06c270;
            background-color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 16px;

            img {
              height: 1rem;
              width: 1rem;
            }
          }
          .off-rate {
            position: absolute;
            margin-top: 3%;
            margin-left: 70%;
            height: 2.5rem;
            width: 4rem;
            border-radius: 2rem;
            color: #ffab40;
            background-color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 16px;
            #rate {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
