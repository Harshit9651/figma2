<template>
  <div class="main">
    <NavBar></NavBar>
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
        <div class="hr"><hr /></div>
        <div class="all-filters">
          <div class="header">
            <h4>Applied filter</h4>
            <div class="right">
              <p>clear all</p>
              <button><img src="../assets/close.png" alt="" /></button>
            </div>
          </div>
          <div class="filters">
            <div class="filter">
              gray <button><img src="../assets/close.png" alt="" /></button>
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              loka pojoa <img src="../assets/close.png" alt="" />
            </div>
          </div>
        </div>

        <div class="price">
          <div class="header">
            <div class="left">
              <img src="../assets/attach_money.png" alt="" />
              <h4>Price</h4>
            </div>
            <div class="right">
              <img src="../assets/expand_less.png" alt="" />
            </div>
          </div>
          <div class="main-content">
            <button
              class="pricebutton"
              :class="{ active: activePrice === 'free' }"
              @click="setActivePrice('free')"
            >
              Free
            </button>
            <button
              class="pricebutton"
              :class="{ active: activePrice === 'paid' }"
              @click="setActivePrice('paid')"
            >
              Paid
            </button>
          </div>
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
<script></script>
<script setup>
import { useProductsStore } from "../store/image";
import { computed, ref } from "vue";

const productsStore = useProductsStore(); // Initialize the store first
const products = computed(() => productsStore.getAllProducts); // Now you can access products

const activePrice = ref("free");
function setActivePrice(type) {
  activePrice.value = type;
}
</script>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "HomePage",
  components: NavBar,
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;


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
      .hr {
        border: 1px sold rgb(255, 255, 255);
        margin-right: 2rem;
        margin-top: 1rem;
      }

      .all-filters {
        display: flex;
        flex-direction: column;
        width: 16rem;
        background-color: rgb(255, 255, 255);
        // padding: 1rem;
        color: black;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.3rem;

          h5 {
            font-family: Inter;
            font-size: 20px;
            font-weight: 500;
            line-height: 18.2px;
            text-align: left;
            color: rgb(23, 23, 23);
          }

          .right {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
              margin-right: 0.1rem;
              color: rgb(26, 25, 25); /* Make the text white for visibility */
              cursor: pointer;
              transition: color 0.3s ease;

              &:hover {
                color: #007bff; /* Highlight the text on hover */
              }
            }

            button {
              all: unset;
              display: inline-block;
              cursor: pointer;

              img {
                height: 1rem;
                width: 1rem;
                margin-left: 0.3rem;
                margin-top: 0.3rem;
              }
            }
          }
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.2rem;

          .filter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 2.63rem;
            padding: 0 1rem;
            background-color: #007bff;
            border-radius: 40px;
            color: white;
            font-size: 1rem;
            font-weight: 500;
            transition: background-color 0.3s ease;
            margin-bottom: 0.5rem; /* Space between filter items */

            &:hover {
              background-color: #0056cc; /* Darker shade on hover */
              cursor: pointer;
            }
            button {
              all: unset;
              display: inline-block;
              img {
                width: 1.2rem;
                height: 1.2rem;
                margin-top: 4px;
                margin-left: 0.5rem;
                cursor: pointer;
              }
            }
          }
        }
      }

      .price {
        width: 16rem;

        height: 1.5rem;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        border: 2px solid black;
        .header {
          border: 2px solid black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            border: 2px solid black;
            display: flex;

            width: 3rem;
            justify-content: space-between;
            align-items: center;

            img {
              height: 1.2rem;
              width: 1.2rem;
            }
          }
        }

        .main-content {
          border: 2px solid black;
          display: flex;
          gap: 1rem;

          .pricebutton {
            all: unset;
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 1.5rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            border: 1px solid #4f5153;
            color: #000000;
            text-align: center;

            &.active {
              background: #7343ea;
              color: white;
            }

            &:hover {
              background: #7343ea;
              color: white;
            }
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
